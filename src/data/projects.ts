export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  client: string;
  year: string;
  industry: string;
  coverImage: string;
  galleryImages: string[];
  deliverables: string[];
  challenge: string;
  solution: string;
  conceptDescription: string;
  colorPalette: {
    name: string;
    hex: string;
    cmyk: string;
    pantone: string;
    usage: string;
  }[];
  typography: {
    primary: string;
    secondary: string;
    notes: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "aura-atelier",
    slug: "aura-architectural-atelier",
    title: "Aura Architectural Atelier",
    tagline: "Minimalist geometry meets Scandinavian spatial design",
    category: "Minimal Logo",
    client: "Atelier Nyström Architects",
    year: "2025",
    industry: "Architecture & Spatial Design",
    coverImage: "/images/projects/aura-minimal.jpg",
    galleryImages: [
      "/images/projects/aura-minimal.jpg",
      "/images/about/studio-process.jpg",
    ],
    deliverables: [
      "Custom Monogram Mark",
      "Architectural Grid System",
      "Stationery & Debossed Letterpress",
      "Brand Guidelines (42 Pages)",
      "Digital Vector Asset Kit"
    ],
    challenge:
      "Atelier Nyström required a refined brand identity reflecting their philosophy of brutalist minimalism, structural transparency, and bespoke Nordic timber craftsmanship without feeling cold or sterile.",
    solution:
      "We engineered a geometric 'AN' ligature based on architectural floorplan vectors and Golden Ratio proportions. The mark incorporates tactile debossing on 600gsm raw cotton stock with precise negative-space alignment.",
    conceptDescription:
      "The custom ligature balances acute structural angles with serene negative space, echoing the interplay of natural daylight through floor-to-ceiling glass pavilions.",
    colorPalette: [
      { name: "Nordic Linen", hex: "#EAE7DF", cmyk: "6, 5, 10, 0", pantone: "Warm Gray 1 C", usage: "Primary Paper Canvas" },
      { name: "Raw Concrete", hex: "#7E807D", cmyk: "45, 38, 40, 10", pantone: "Cool Gray 8 C", usage: "Secondary Accent" },
      { name: "Charcoal Slate", hex: "#1D1E20", cmyk: "70, 65, 60, 75", pantone: "Black 7 C", usage: "Typography & Mark" },
      { name: "Warm Oak", hex: "#BA9875", cmyk: "25, 40, 60, 5", pantone: "7509 C", usage: "Interior Brand Highlights" }
    ],
    typography: {
      primary: "KUniforma Semibold & Regular",
      secondary: "Editorial Serif Light",
      notes: "Carefully tracked letter-spacing at +120em for timeless architectural gravitas."
    },
    metrics: [
      { label: "Client Inquiries", value: "+148%" },
      { label: "Design Award", value: "German Brand Gold" },
      { label: "Assets Delivered", value: "35+ Formats" }
    ],
    featured: true
  },
  {
    id: "elysian-haute",
    slug: "elysian-haute-parfumerie",
    title: "Aurélia Paris — Haute Parfumerie",
    tagline: "Ultra-luxury gold foil crest for bespoke French fragrance",
    category: "Luxury Branding",
    client: "Aurélia Maison de Parfum",
    year: "2024",
    industry: "Luxury Fragrance & Cosmetics",
    coverImage: "/images/projects/elysian-luxury.jpg",
    galleryImages: [
      "/images/projects/elysian-luxury.jpg",
      "/images/projects/verve-botanicals.jpg"
    ],
    deliverables: [
      "Royal Monogram & Crest",
      "Custom Gold Foil Stamping Specs",
      "Bottled Glass Embossing Vector",
      "Wax Seal Custom Matrix",
      "Silk Ribbon & Box Packaging Suite"
    ],
    challenge:
      "Aurélia needed an emblem worthy of 200-year French perfumery heritage that stands out in boutique salons across Paris, Dubai, and New York while maintaining subtle contemporary elegance.",
    solution:
      "We crafted an interlocking 'AP' crest framed by ornamental botanical filigree and a delicate crown motif, executed with micro-embossed metallic gold foil on dark emerald velvet paper.",
    conceptDescription:
      "The monogram intertwines royal heraldic symmetry with organic jasmine and rose silhouettes, communicating rare artisanal ingredients and timeless Parisian luxury.",
    colorPalette: [
      { name: "Emerald Royale", hex: "#123C2D", cmyk: "85, 30, 70, 60", pantone: "5535 C", usage: "Primary Envelope & Packaging" },
      { name: "Burnished Gold", hex: "#D4AF37", cmyk: "20, 30, 85, 5", pantone: "871 C Metallic", usage: "Foil Crest & Monogram" },
      { name: "Antique Cream", hex: "#FDFBF7", cmyk: "2, 2, 4, 0", pantone: "Warm White C", usage: "Letterhead & Label Stock" },
      { name: "Forest Moss", hex: "#082017", cmyk: "88, 45, 75, 80", pantone: "Black 6 C", usage: "Deep Contrast Elements" }
    ],
    typography: {
      primary: "Cormorant Garamond Regular",
      secondary: "KUniforma Medium",
      notes: "Classical high-contrast French serifs with mathematical horizontal proportionality."
    },
    metrics: [
      { label: "Retail Placement", value: "18 Flagships" },
      { label: "Packaging Recognition", value: "Pentawards 2024" },
      { label: "Average Order Value", value: "+64%" }
    ],
    featured: true
  },
  {
    id: "verve-botanicals",
    slug: "aeterna-botanical-organics",
    title: "Aeterna Botanical Skincare",
    tagline: "Pure organic apothecary brand identity & sustainable packaging",
    category: "Brand Identity",
    client: "Aeterna Organic Lab",
    year: "2025",
    industry: "Organic Wellness & Beauty",
    coverImage: "/images/projects/verve-botanicals.jpg",
    galleryImages: [
      "/images/projects/verve-botanicals.jpg",
      "/images/about/studio-process.jpg"
    ],
    deliverables: [
      "Wordmark & Apothecary Monogram",
      "Sustainable Dropper Bottle Label System",
      "Amber Glass Direct Print Files",
      "Typography Hierarchy & Packaging Templates",
      "E-Commerce Visual Guidelines"
    ],
    challenge:
      "Aeterna sought to bridge clinical dermatological efficacy with warm, sustainable earthiness without falling into generic green-leaf design clichés.",
    solution:
      "A clean, rhythmic high-contrast serif wordmark paired with minimalist laboratory typography and raw linen paper wraps, balancing medical purity with warm tactile organics.",
    conceptDescription:
      "Aeterna's identity speaks to enduring natural wellness. The typography features custom-carved serif terminals that evoke botanical stems and herbal tinctures.",
    colorPalette: [
      { name: "Linen Warmth", hex: "#E9DFCF", cmyk: "10, 12, 20, 0", pantone: "7527 C", usage: "Primary Background & Labels" },
      { name: "Botanical Olive", hex: "#46533A", cmyk: "65, 45, 80, 40", pantone: "5743 C", usage: "Secondary Brand Voice" },
      { name: "Apothecary Amber", hex: "#9E5522", cmyk: "25, 65, 95, 20", pantone: "7579 C", usage: "Glassware & Accents" },
      { name: "Deep Lichen", hex: "#1C2419", cmyk: "75, 60, 70, 70", pantone: "Black 3 C", usage: "Text & Primary Mark" }
    ],
    typography: {
      primary: "Serif Botanica / Newsreader",
      secondary: "KUniforma Light",
      notes: "Clinical clarity meets handcrafted herbalist elegance."
    },
    metrics: [
      { label: "Sephora Launch", value: "Q2 2025" },
      { label: "D2C Conversion", value: "+38.6%" },
      { label: "Packaging Recyclability", value: "100%" }
    ],
    featured: true
  },
  {
    id: "nox-coffee",
    slug: "origin-specialty-coffee",
    title: "Origin Specialty Coffee Co.",
    tagline: "Bold modern typography & artisan single-origin seal",
    category: "Typography Logo",
    client: "Origin Coffee Roasters",
    year: "2024",
    industry: "Specialty Hospitality & Beverage",
    coverImage: "/images/projects/nox-coffee.jpg",
    galleryImages: [
      "/images/projects/nox-coffee.jpg",
      "/images/projects/zenith-apparel.jpg"
    ],
    deliverables: [
      "Custom Heavy Condensed Wordmark",
      "Single-Origin Flavor Matrix Label System",
      "Kraft & Matte Black Foil Packaging Bags",
      "Cafe Ceramic Cup & Merchandise Stamp",
      "Menu Typography System"
    ],
    challenge:
      "Standing out in a saturated artisanal coffee landscape across London and Berlin with packaging that commands attention on retail shelves and instagram tables.",
    solution:
      "We engineered an ultra-impactful, bespoke condensed grotesque logotype paired with an iconic 'Ö' bean leaf monogram stamped in gold on kraft paper stock.",
    conceptDescription:
      "Solid, unyielding modernist geometry captures the bold intensity of dark espresso, while meticulous craft stamps reflect micro-lot terroir transparency.",
    colorPalette: [
      { name: "Obsidian Slate", hex: "#161719", cmyk: "70, 65, 65, 80", pantone: "Black 6 C", usage: "Primary Matte Bags" },
      { name: "Kraft Ochre", hex: "#D6B082", cmyk: "20, 35, 60, 5", pantone: "466 C", usage: "Single Origin Labels" },
      { name: "Roasted Espresso", hex: "#4A3222", cmyk: "50, 65, 80, 55", pantone: "4625 C", usage: "Secondary Packaging" },
      { name: "Pure White", hex: "#FFFFFF", cmyk: "0, 0, 0, 0", pantone: "White C", usage: "High Contrast Wordmark" }
    ],
    typography: {
      primary: "KUniforma Black & Bold",
      secondary: "KUniforma Regular Mono",
      notes: "Custom condensed glyphs with zero kerning drift across bag seals."
    },
    metrics: [
      { label: "Shelf Sell-Through", value: "+82%" },
      { label: "Subscription Growth", value: "4.2x" },
      { label: "Roastery Expansion", value: "3 Locations" }
    ],
    featured: true
  },
  {
    id: "kroma-fintech",
    slug: "nexa-technologies-fintech",
    title: "Nexa Technologies — Global Card",
    tagline: "Futuristic neon isometric logo mark for next-gen fintech",
    category: "Startup Branding",
    client: "Nexa Financial Group",
    year: "2025",
    industry: "Fintech, Web3 & Digital Banking",
    coverImage: "/images/projects/kroma-fintech.jpg",
    galleryImages: [
      "/images/projects/kroma-fintech.jpg",
      "/images/about/studio-process.jpg"
    ],
    deliverables: [
      "Isometric Geometric Polyhedron Logo",
      "Metal Debit Card Precision Laser Files",
      "Dark Mode UI Design Tokens",
      "Dynamic 3D Vector Assets",
      "Complete Brand Book & Pitch Deck"
    ],
    challenge:
      "Fintech startups frequently look interchangeable with generic gradient swooshes. Nexa required an iconic mark representing mathematical cryptographic security and frictionless payments.",
    solution:
      "A wireframe isometric polyhedron with luminescent gradient neon paths on brushed obsidian metal, symbolizing multi-dimensional financial speed and institutional trust.",
    conceptDescription:
      "The geometric form unfolds seamlessly into an 'N' monogram, engineered with strict 30-degree isometric angles that scale effortlessly from mobile app favicons to billboard displays.",
    colorPalette: [
      { name: "Cyber Cyan", hex: "#00E5FF", cmyk: "65, 0, 5, 0", pantone: "Process Cyan C", usage: "Primary Mark Glow" },
      { name: "Hyper Violet", hex: "#9D00FF", cmyk: "70, 85, 0, 0", pantone: "2665 C", usage: "Gradient Terminus" },
      { name: "Obsidian Brushed", hex: "#0D0F13", cmyk: "80, 75, 65, 90", pantone: "Black 7 C", usage: "Hardware & Card Face" },
      { name: "Steel Silver", hex: "#8F9CA8", cmyk: "35, 20, 20, 5", pantone: "7544 C", usage: "Secondary Typography" }
    ],
    typography: {
      primary: "KUniforma Bold Extended",
      secondary: "Geist Mono / KUniforma Regular",
      notes: "Engineered for crystal-clear readability on 60fps dynamic financial apps."
    },
    metrics: [
      { label: "Series A Raised", value: "$18.5M" },
      { label: "Card Pre-Orders", value: "240,000+" },
      { label: "App Store Rating", value: "4.9 / 5.0" }
    ],
    featured: true
  },
  {
    id: "zenith-apparel",
    slug: "aether-organic-goods",
    title: "Aether Organic Streetwear",
    tagline: "Sacred geometry tree emblem & modern heritage apparel mark",
    category: "Mascot Logo",
    client: "Aether Apparel Collective",
    year: "2024",
    industry: "Sustainable Streetwear & Goods",
    coverImage: "/images/projects/zenith-apparel.jpg",
    galleryImages: [
      "/images/projects/zenith-apparel.jpg",
      "/images/about/studio-process.jpg"
    ],
    deliverables: [
      "Sacred Geometry Tree Emblem",
      "Screenprint & Embroidery Vector Masters",
      "Woven Label & Hangtag System",
      "Heavy Canvas Tote Bag Prints",
      "Lookbook Editorial Typography"
    ],
    challenge:
      "Aether required an emblematic logo that could live seamlessly as a chest embroidery, back print, and metal button without degrading in quality across fabric textures.",
    solution:
      "A monoline geometric tree emblem constructed from interlocking chevron peaks and trunk roots, evoking ancient Scandinavian petroglyphs reimagined through brutalist streetwear.",
    conceptDescription:
      "Three mountain canopies emerge from a grounded trunk, symbolizing the brand's triad of ethical raw materials, zero-waste manufacture, and lifelong durability.",
    colorPalette: [
      { name: "Raw Ecru", hex: "#F3EDE2", cmyk: "4, 6, 12, 0", pantone: "7527 C", usage: "Canvas & Heavy Cotton" },
      { name: "Iron Carbon", hex: "#1A1A1A", cmyk: "70, 65, 65, 85", pantone: "Black 6 C", usage: "Screenprint Inks" },
      { name: "Sage Earth", hex: "#63705C", cmyk: "55, 35, 65, 25", pantone: "5625 C", usage: "Hangtags & Accents" },
      { name: "Clay Rust", hex: "#A8583B", cmyk: "25, 75, 80, 20", pantone: "7580 C", usage: "Limited Edition Releases" }
    ],
    typography: {
      primary: "KUniforma Heavy / Black",
      secondary: "KUniforma Regular Mono",
      notes: "Solid geometric weight optimized for low-bleed textile embroidery."
    },
    metrics: [
      { label: "Drop Sell-Out Time", value: "7 Minutes" },
      { label: "Retail Stockists", value: "42 Boutiques" },
      { label: "Global Reach", value: "32 Countries" }
    ],
    featured: true
  },
  {
    id: "graphomo-identity",
    slug: "graphomo-studio-identity",
    title: "Graphomo — Official Studio Identity",
    tagline: "Bringing Your Vision To Life with pure geometric precision",
    category: "Lettermark",
    client: "Graphomo Studio (Internal)",
    year: "2025",
    industry: "Design & Brand Identity Studio",
    coverImage: "/brand/graphomo-official-logo.png",
    galleryImages: [
      "/brand/graphomo-official-logo.png",
      "/brand/graphomo-main-logo.png",
      "/brand/graphomo-submark-logo.png",
      "/images/about/studio-process.jpg"
    ],
    deliverables: [
      "Original Graphomo Master Logo & Mark",
      "Circular Geometric Submark Emblem",
      "KUniforma Custom Typography Pairing",
      "Studio Stationery & Digital Touchpoints",
      "Official Studio Brand Guidelines"
    ],
    challenge:
      "Developing our own definitive visual brand to communicate unparalleled mastery in custom logo creation, geometric discipline, and creative vision.",
    solution:
      "The Graphomo mark synthesizes continuous fluid loops with pure circular geometry, flanked by the bold custom logotype and the founding studio motto: 'Bringing Your Vision To Life.'",
    conceptDescription:
      "The submark combines the eye of perception, the infinity loop of creative thought, and the precision of the compass tool — the three pillars of timeless brand creation.",
    colorPalette: [
      { name: "Graphomo Carbon", hex: "#141416", cmyk: "75, 65, 65, 85", pantone: "Black 7 C", usage: "Primary Mark & Ink" },
      { name: "Graphomo Gray", hex: "#595959", cmyk: "55, 45, 45, 20", pantone: "Cool Gray 9 C", usage: "Secondary Elements" },
      { name: "Editorial Cream", hex: "#F9FBF5", cmyk: "2, 1, 4, 0", pantone: "Warm White C", usage: "Brand Canvas Canvas" },
      { name: "Electric Amber", hex: "#F3CC0C", cmyk: "5, 20, 95, 0", pantone: "109 C", usage: "Action Accents" }
    ],
    typography: {
      primary: "KUniforma Heavy & Semibold",
      secondary: "KUniforma Regular & Light",
      notes: "The bespoke studio font family created specifically for timeless identity design."
    },
    metrics: [
      { label: "Logo Precision", value: "100% Vector" },
      { label: "Client NPS", value: "99.4%" },
      { label: "Global Presence", value: "Worldwide" }
    ],
    featured: true
  }
];

export const CATEGORIES = [
  "All",
  "Minimal Logo",
  "Luxury Branding",
  "Brand Identity",
  "Startup Branding",
  "Typography Logo",
  "Lettermark",
  "Mascot Logo"
] as const;
