/* ============================================================
   SBM&G Cart Engine  –  cart.js
   Drop in: /data/cart.js
   Include BEFORE your page script on every page.
   Exposes: window.SBMGCart
   ============================================================ */
window.SBMGCart = (function () {
  'use strict';
  var KEY = 'sbmg_cart';

  /* ── persistence ── */
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch (e) { return []; }
  }
  function save(items) {
    localStorage.setItem(KEY, JSON.stringify(items));
  }

  /* ── read ── */
  function count() {
    return load().reduce(function (s, i) { return s + (i.qty || 0); }, 0);
  }

  /* ── write ── */
  function add(item) {
    /* item shape: { id, name, price, thumbnail, qty?, size?, finish? } */
    var items = load();
    var found = null;
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === item.id &&
          items[i].size   === (item.size   || '24\u00d748"') &&
          items[i].finish === (item.finish || 'Polished')) {
        found = items[i];
        break;
      }
    }
    if (found) {
      found.qty += (item.qty || 1);
    } else {
      items.push({
        id:        item.id,
        name:      item.name      || '',
        price:     item.price     || '',
        thumbnail: item.thumbnail || '',
        size:      item.size      || '24\u00d748"',
        finish:    item.finish    || 'Polished',
        qty:       item.qty       || 1
      });
    }
    save(items);
    syncBadge();
    flashBadge();
  }

  function remove(id, size, finish) {
    save(load().filter(function (x) {
      return !(x.id === id && x.size === size && x.finish === finish);
    }));
    syncBadge();
  }

  function updateQty(id, size, finish, qty) {
    if (qty <= 0) { remove(id, size, finish); return; }
    var items = load();
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === id && items[i].size === size && items[i].finish === finish) {
        items[i].qty = qty; break;
      }
    }
    save(items);
    syncBadge();
  }

  function clear() { save([]); syncBadge(); }

  /* ── UI sync ── */
  function syncBadge() {
    var n = count();
    document.querySelectorAll('.cart-count').forEach(function (el) {
      el.textContent = n;
    });
  }

  function flashBadge() {
    document.querySelectorAll('.cart-count').forEach(function (el) {
      el.style.transition = 'transform 0.22s cubic-bezier(.34,1.56,.64,1)';
      el.style.transform  = 'scale(1.7)';
      setTimeout(function () { el.style.transform = ''; }, 260);
    });
  }

  /* ── toast notification ── */
  function toast(msg) {
    var t = document.getElementById('sbmg-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'sbmg-toast';
      t.style.cssText = [
        'position:fixed','bottom:32px','left:50%',
        'transform:translateX(-50%) translateY(80px)',
        'background:#1a1815','border:1px solid rgba(196,161,101,.35)',
        'color:#e0c98e','padding:14px 28px','border-radius:100px',
        'font-size:13px','letter-spacing:.06em','z-index:99999',
        'transition:transform .35s cubic-bezier(.23,1,.32,1), opacity .35s',
        'opacity:0','pointer-events:none','white-space:nowrap',
        'box-shadow:0 8px 40px rgba(0,0,0,.5)'
      ].join(';');
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(t._timer);
    t._timer = setTimeout(function () {
      t.style.opacity = '0';
      t.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2400);
  }

  /* ── auto-sync badge on every page ── */
  function autoSync() { syncBadge(); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoSync);
  } else {
    autoSync();
  }

  return {
    add: add,
    remove: remove,
    updateQty: updateQty,
    clear: clear,
    count: count,
    load: load,
    syncBadge: syncBadge,
    toast: toast
  };
})();