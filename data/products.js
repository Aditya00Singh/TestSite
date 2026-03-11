/**
 * products.js — Single source of truth for SBM&G product catalogue.
 * Referenced by:  index.html  (as  ./products.js)
 *                 pages/collection.html  (as  ../products.js)
 *
 * To add / edit products, only touch this file.
 * Fields:
 *   name        – display name
 *   category    – Marble | Granite | Ceramic | Porcelain
 *   description – one-line description shown on cards
 *   thumbnail   – URL or relative path to product image
 *   tags        – comma-separated keywords
 *   price       – price string shown on homepage cards  (e.g. "$185/sq ft")
 *   origin      – country / region of origin
 *   finish      – surface finish
 *   rating      – number 1-5
 *   badge       – "New" | "Bestseller" | "" (empty = no badge)
 *   featured    – true = show in homepage Featured Surfaces section (first 4 used)
 */

window.SBMG_PRODUCTS = [
  {
    name:        "Calacatta Oro Marble",
    category:    "Marble",
    description: "Italian white marble with rich gold veining. Timeless in any setting.",
    thumbnail:   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tags:        "white,Italian,luxury,slab",
    price:       "$185/sq ft",
    origin:      "Italy",
    finish:      "Polished",
    rating:      5,
    badge:       "New",
    featured:    true
  },
  {
    name:        "Black Galaxy Granite",
    category:    "Granite",
    description: "Deep black Indian granite flecked with golden star-like minerals.",
    thumbnail:   "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&q=80",
    tags:        "black,Indian,granite,countertop",
    price:       "$95/sq ft",
    origin:      "India",
    finish:      "Polished",
    rating:      4,
    badge:       "Bestseller",
    featured:    true
  },
  {
    name:        "Travertino Ceramic",
    category:    "Ceramic",
    description: "Warm travertine-look ceramic tiles. Ideal for floors and feature walls.",
    thumbnail:   "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    tags:        "travertine,beige,floor,wall",
    price:       "$48/sq ft",
    origin:      "Spain",
    finish:      "Matt",
    rating:      5,
    badge:       "",
    featured:    true
  },
  {
    name:        "Grigio Porcelain",
    category:    "Porcelain",
    description: "Large-format grey porcelain. Scratch-resistant and ultra low-maintenance.",
    thumbnail:   "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=600&q=80",
    tags:        "grey,large-format,porcelain,modern",
    price:       "$62/sq ft",
    origin:      "Italy",
    finish:      "Semi-polished",
    rating:      4,
    badge:       "New",
    featured:    true
  },
  {
    name:        "Statuario Bianco",
    category:    "Marble",
    description: "Classic white Statuario marble with subtle grey veining from Carrara.",
    thumbnail:   "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&q=80",
    tags:        "white,Carrara,classic,slab",
    price:       "$210/sq ft",
    origin:      "Italy",
    finish:      "Honed",
    rating:      5,
    badge:       "",
    featured:    false
  },
  {
    name:        "Kashmir White Granite",
    category:    "Granite",
    description: "Cream-white granite speckled with burgundy and grey. South Indian quarry.",
    thumbnail:   "https://images.unsplash.com/photo-1587142017488-99e91c71a6c3?w=600&q=80",
    tags:        "white,cream,granite,kitchen",
    price:       "$78/sq ft",
    origin:      "India",
    finish:      "Polished",
    rating:      4,
    badge:       "",
    featured:    false
  },
  {
    name:        "Verde Alpi Marble",
    category:    "Marble",
    description: "Dramatic green marble from the Alps with white calcite veining.",
    thumbnail:   "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=600&q=80",
    tags:        "green,Alpine,statement,slab",
    price:       "$165/sq ft",
    origin:      "Italy",
    finish:      "Polished",
    rating:      5,
    badge:       "New",
    featured:    false
  },
  {
    name:        "Nero Marquina",
    category:    "Marble",
    description: "Striking black marble from Spain with brilliant white veining.",
    thumbnail:   "https://images.unsplash.com/photo-1557804483-ef03f4f9b2c5?w=600&q=80",
    tags:        "black,Spanish,contrast,slab",
    price:       "$145/sq ft",
    origin:      "Spain",
    finish:      "Polished",
    rating:      5,
    badge:       "",
    featured:    false
  },
  {
    name:        "Bianco Drift Porcelain",
    category:    "Porcelain",
    description: "Calacatta-inspired porcelain in large 60x120cm slabs. Budget-smart luxury.",
    thumbnail:   "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=600&q=80",
    tags:        "white,large-format,calacatta-look,affordable",
    price:       "$52/sq ft",
    origin:      "Turkey",
    finish:      "Gloss",
    rating:      4,
    badge:       "Bestseller",
    featured:    false
  },
  {
    name:        "Terracotta Handmade",
    category:    "Ceramic",
    description: "Hand-pressed terracotta tiles. Every piece is unique — no two are the same.",
    thumbnail:   "https://images.unsplash.com/photo-1595514535215-9a3e28b9d6be?w=600&q=80",
    tags:        "terracotta,handmade,earthy,floor",
    price:       "$36/sq ft",
    origin:      "Morocco",
    finish:      "Natural",
    rating:      5,
    badge:       "",
    featured:    false
  },
  {
    name:        "Azul Macaubas Quartzite",
    category:    "Marble",
    description: "Exotic blue-grey quartzite from Brazil. Harder than marble, just as beautiful.",
    thumbnail:   "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
    tags:        "blue,Brazilian,quartzite,exotic",
    price:       "$230/sq ft",
    origin:      "Brazil",
    finish:      "Leathered",
    rating:      5,
    badge:       "New",
    featured:    false
  },
  {
    name:        "Absolute Black Granite",
    category:    "Granite",
    description: "Pure jet-black Indian granite. Zero variation — solid, uniform, bold.",
    thumbnail:   "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=600&q=80",
    tags:        "black,solid,kitchen,countertop",
    price:       "$85/sq ft",
    origin:      "India",
    finish:      "Polished",
    rating:      4,
    badge:       "",
    featured:    false
  },
  {
    name:        "Cement Look Ceramic",
    category:    "Ceramic",
    description: "Industrial cement-effect tiles in warm grey. Trending in loft interiors.",
    thumbnail:   "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    tags:        "cement,industrial,grey,trending",
    price:       "$42/sq ft",
    origin:      "Portugal",
    finish:      "Matt",
    rating:      4,
    badge:       "Bestseller",
    featured:    false
  },
  {
    name:        "Rosa Porrino Granite",
    category:    "Granite",
    description: "Warm pink-salmon granite from Spain. Popular for bathrooms and feature walls.",
    thumbnail:   "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80",
    tags:        "pink,Spanish,bathroom,warm",
    price:       "$88/sq ft",
    origin:      "Spain",
    finish:      "Polished",
    rating:      4,
    badge:       "",
    featured:    false
  },
  {
    name:        "Calacatta Gold Porcelain",
    category:    "Porcelain",
    description: "Gold-vein Calacatta-look porcelain in ultra-thin 6mm panels.",
    thumbnail:   "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    tags:        "gold,thin,panel,modern",
    price:       "$70/sq ft",
    origin:      "Italy",
    finish:      "Semi-polished",
    rating:      5,
    badge:       "New",
    featured:    false
  }
];