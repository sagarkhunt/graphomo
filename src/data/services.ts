export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  timeline: string;
  deliverables: string[];
  idealFor: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "custom-logo",
    slug: "custom-logo-design",
    title: "Custom Logo Design",
    subtitle: "Original, bespoke brand marks crafted from scratch",
    shortDescription:
      "Unique logos designed specifically for your business. No clipart, no templates, no shortcuts.",
    longDescription:
      "Every company has a distinct story, ethos, and market proposition. We develop tailored logo marks using rigorous geometric principles, custom hand-drawn typography, and deep competitor positioning to create a mark that becomes instantly iconic.",
    iconName: "PenTool",
    timeline: "5 – 7 Business Days",
    idealFor: "Startups, Creators, Businesses needing a distinctive visual anchor",
    deliverables: [
      "3 – 5 Distinct Creative Concepts",
      "Comprehensive Revisions to Polish Your Chosen Mark",
      "Primary, Secondary & Submark Lockups",
      "Full Vector Master Files (AI, EPS, SVG, PDF)",
      "High-Resolution Export Suite (PNG, JPG in RGB & CMYK)",
      "Dark & Light Mode Colorways",
      "Full Commercial & Trademark Copyright Transfer"
    ],
    features: [
      "100% Original Vector Geometry",
      "Golden Ratio Balance & Grid Construction",
      "Pixel-Perfect Scaling From 16px to Billboards",
      "Dedicated Creative Direction"
    ]
  },
  {
    id: "brand-identity",
    slug: "brand-identity-system",
    title: "Complete Brand Identity",
    subtitle: "End-to-end visual identity ecosystems",
    shortDescription:
      "Complete visual identity including logo, typography, color architecture, and comprehensive brand guidelines.",
    longDescription:
      "A great logo is only the first step. Our complete brand identity system builds the entire visual language around your mark — establishing harmonious typography systems, calibrated color psychology, photographic art direction, and stationery suites that command authority.",
    iconName: "Sparkles",
    timeline: "2 – 3 Weeks",
    idealFor: "Established brands, scaling ventures, and serious founders",
    deliverables: [
      "Everything in Custom Logo Design",
      "Comprehensive Color Palette (HEX, RGB, CMYK, Pantone)",
      "Typography System & Font Licensing Guidance",
      "Iconography & Pattern Graphics Library",
      "Business Cards & Letterhead Stationery Suite",
      "Email Signature & Presentation Deck Template",
      "Digital Master Brand Guidelines Book (35+ Pages)"
    ],
    features: [
      "Psychology-Driven Color Harmony",
      "Bespoke Brand Pattern & Textures",
      "Complete Print Production Ready Files",
      "Multi-Channel Cohesion"
    ]
  },
  {
    id: "business-branding",
    slug: "business-branding-solutions",
    title: "Business & Corporate Branding",
    subtitle: "Enterprise-grade identity design for scaling enterprises",
    shortDescription:
      "Professional branding solutions for growing companies, organizations, and venture-backed startups.",
    longDescription:
      "Engineered for businesses requiring high-trust institutional credibility. We craft sophisticated identities that resonate with investors, enterprise clients, and demanding consumers across physical and digital spaces.",
    iconName: "Briefcase",
    timeline: "3 – 4 Weeks",
    idealFor: "B2B firms, fintechs, healthcare, legal, and tech scale-ups",
    deliverables: [
      "Strategic Market & Competitor Audit",
      "Corporate Mark & Sub-Brand Architecture",
      "Executive Stationery & Investor Pitch Kit",
      "Signage, Environmental & Office Mockups",
      "Staff Badges & Uniform Brand Assets",
      "Detailed Brand Governance Manual",
      "Direct Support with Trademark Filings"
    ],
    features: [
      "Enterprise Sub-Brand Hierarchy",
      "Executive Deck Styling",
      "Institutional Trust Architecture",
      "Long-term Brand Governance"
    ]
  },
  {
    id: "social-media-branding",
    slug: "social-media-branding",
    title: "Social Media & Digital Branding",
    subtitle: "Scroll-stopping digital assets tailored for modern feeds",
    shortDescription:
      "Creative brand assets and digital kits optimized for Instagram, LinkedIn, YouTube, X, and TikTok.",
    longDescription:
      "Bridge your logo mark with your digital audience. We build turnkey social identity kits that make your feeds instantly recognizable, memorable, and visually magnetic across all screen sizes.",
    iconName: "Share2",
    timeline: "7 – 10 Business Days",
    idealFor: "E-commerce brands, DTC companies, personal brands, and creators",
    deliverables: [
      "Custom Profile Avatars & Badges",
      "Platform-Specific Header Banners (LinkedIn, X, YouTube)",
      "12 Editable Canva / Figma Post & Story Templates",
      "Highlight Cover Icons & Grid Layout Strategy",
      "Animated Logo Video Intro (1080p & 4K)",
      "Favicon Pack & Mobile App Icon Suite"
    ],
    features: [
      "Figma & Canva Component Library",
      "Motion Logo Sting for Reels/YouTube",
      "Optimized Compression for Crisp Feeds",
      "Modern Grid Aesthetic"
    ]
  },
  {
    id: "logo-redesign",
    slug: "logo-redesign-modernization",
    title: "Logo Redesign & Modernization",
    subtitle: "Evolving your legacy mark for the digital century",
    shortDescription:
      "Modernizing existing logos while preserving built-up brand equity, recognition, and customer loyalty.",
    longDescription:
      "If your current logo looks dated, overly complex, or fails to render crisply on mobile screens, our redesign process carefully refines the geometry, cleans up awkward vector curves, and elevates typography while preserving your hard-earned recognition.",
    iconName: "RefreshCw",
    timeline: "1 – 2 Weeks",
    idealFor: "Companies celebrating anniversaries or undergoing strategic pivots",
    deliverables: [
      "Audit of Current Logo Weaknesses & Equity",
      "Modernized & Cleaned Vector Geometry",
      "Simplified Silhouette for Digital Scalability",
      "Updated Modern Typography Pairing",
      "Before & After Evolution Comparison Deck",
      "Fresh Master Asset Package",
      "Transition Guide for Existing Print & Signage"
    ],
    features: [
      "Preserves Customer Equity & Trust",
      "Fixes Technical Vector Glitches",
      "Boosts Modern Screen Legibility",
      "Side-by-Side Evolution Study"
    ]
  },
  {
    id: "brand-guidelines",
    slug: "brand-guidelines-documentation",
    title: "Brand Guidelines & Style Guides",
    subtitle: "The definitive playbook for maintaining brand integrity",
    shortDescription:
      "Professional documentation explaining how your brand identity must be used across all mediums.",
    longDescription:
      "Protect your investment. We build comprehensive, designer-friendly Brand Guidelines books detailing clear rules for logo clear-space, improper usage, color codes, typographic scales, imagery moodboards, and tone-of-voice directives.",
    iconName: "BookOpen",
    timeline: "10 – 14 Business Days",
    idealFor: "Internal marketing teams, external agencies, and franchise operations",
    deliverables: [
      "Interactive Digital PDF Brand Manual (40+ Pages)",
      "Strict Logo Clear-Space & Minimum Size Rules",
      "Color Specs (RGB, HEX, CMYK, Pantone Coated & Uncoated)",
      "Typography Hierarchy & Leading/Tracking Rules",
      "Do's and Don'ts Visual Grid",
      "Co-Branding & Partnership Rules",
      "Editable Source Files (Figma / InDesign)"
    ],
    features: [
      "Clear Guidance for Developers & Printers",
      "Prevents Brand Dilution",
      "Figma Cloud Library Integration",
      "Printable Cheatsheet Reference"
    ]
  }
];

export const SERVICE_PACKAGES = [
  {
    name: "Essential Identity",
    price: "$1,450",
    popular: false,
    description: "Ideal for early-stage ventures and startups needing a distinctive, professional logo mark.",
    deliverables: [
      "3 Original Custom Logo Concepts",
      "3 Rounds of Iterative Revisions",
      "Primary & Submark Lockups",
      "Complete Vector Master Suite (AI, SVG, EPS, PDF)",
      "High-Res Web & Print Exports (RGB/CMYK)",
      "Quick Color & Font Cheatsheet",
      "Full Commercial Copyright Ownership"
    ],
    timeline: "5 – 7 Days"
  },
  {
    name: "Full Brand System",
    price: "$2,950",
    popular: true,
    description: "Our most requested comprehensive package. Everything needed to build an authoritative, cohesive brand.",
    deliverables: [
      "5 Bespoke Logo Concepts & Unlimited Revisions",
      "Primary, Secondary, Monogram & Favicon Suite",
      "Complete Color Palette Architecture (HEX/CMYK/Pantone)",
      "Curated Typography System & Pairing Guide",
      "Stationery Design Suite (Business Cards, Letterhead, Envelope)",
      "Social Media Kit (Avatars, Covers & 8 Post Templates)",
      "35+ Page Comprehensive Brand Guidelines Manual",
      "Animated Logo Video Sting (4K MP4)",
      "Full Commercial & Trademark Rights"
    ],
    timeline: "2 – 3 Weeks"
  },
  {
    name: "Enterprise Evolution",
    price: "$5,800",
    popular: false,
    description: "Designed for scaling companies, venture-backed startups, and luxury brands seeking total market domination.",
    deliverables: [
      "Strategic Market & Competitor Landscape Audit",
      "Multi-Concept Exploration with 3D/Spatial Prototypes",
      "Sub-Brand Architecture & Product Lockups",
      "Complete Print, Packaging & Merchandise Suite",
      "Executive Pitch Deck & Investor Presentation Kit",
      "Custom Iconography System (20+ Icons)",
      "60+ Page Exhaustive Brand Governance Manual",
      "Figma Design Token System Integration",
      "Direct Strategy Sessions with Design Director",
      "12 Months Post-Launch Brand Support"
    ],
    timeline: "3 – 5 Weeks"
  }
];
