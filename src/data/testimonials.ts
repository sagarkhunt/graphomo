export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  projectSlug?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    clientName: "Henrik Nyström",
    role: "Founding Principal",
    company: "Atelier Nyström Architects (Stockholm)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    quote:
      "Working with Graphomo was an absolute revelation. Sagar deconstructed our architectural philosophy and translated it into a mark of breathtaking precision and elegance. Our client inquiries doubled within three months of debuting the new identity.",
    rating: 5,
    projectSlug: "aura-architectural-atelier"
  },
  {
    id: "t2",
    clientName: "Éléonore de Vance",
    role: "Artistic Director",
    company: "Aurélia Maison de Parfum (Paris)",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80",
    quote:
      "The gold foil crest Graphomo designed for our perfume bottles captured the 200-year French heritage we needed while feeling modern and electric. The craftsmanship and vector precision is truly unmatched.",
    rating: 5,
    projectSlug: "elysian-haute-parfumerie"
  },
  {
    id: "t3",
    clientName: "David Chen",
    role: "Co-Founder & CEO",
    company: "Nexa Financial Group (Singapore / SF)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    quote:
      "Investors constantly praise our brand identity. In fintech, building instantaneous trust is worth millions. Graphomo gave us an iconic emblem that looks like a Fortune 500 powerhouse from day one.",
    rating: 5,
    projectSlug: "nexa-technologies-fintech"
  },
  {
    id: "t4",
    clientName: "Maya Linnea",
    role: "Founder",
    company: "Aeterna Botanical Organics (Copenhagen)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    quote:
      "Graphomo delivered not just a logo, but a complete visual universe. The amber bottle labels, sustainable linen packaging, and custom typography allowed us to secure shelf space in premium European retailers with ease.",
    rating: 5,
    projectSlug: "aeterna-botanical-organics"
  }
];

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  summary: string;
  details: string[];
  deliverable: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategic Brief",
    duration: "Day 1 – 2",
    summary:
      "We dive deep into your brand DNA, business model, target demographic, competitor landscape, and long-term vision.",
    details: [
      "In-depth client questionnaire & strategy interview",
      "Competitor visual benchmarking across your industry",
      "Defining core brand attributes, tone of voice & emotional cues",
      "Auditing existing assets and touchpoint requirements"
    ],
    deliverable: "Creative Strategy Brief & Direction Alignment Document"
  },
  {
    step: "02",
    title: "Research & Visual Moodboard",
    duration: "Day 3 – 4",
    summary:
      "We map out aesthetic territories, historical type references, material textures, and color moodboards.",
    details: [
      "Curating three distinct visual style directions",
      "Gathering typography specimens and printing techniques",
      "Establishing moodboards for light, space, and materiality",
      "Aligning on the conceptual roadmap before vectorization begins"
    ],
    deliverable: "Curated Moodboard Presentation & Visual Direction Sign-off"
  },
  {
    step: "03",
    title: "Concept Exploration & Hand Sketches",
    duration: "Day 5 – 7",
    summary:
      "Pen to paper. We generate dozens of raw sketches, geometric constructions, monograms, and optical ligatures.",
    details: [
      "Dozens of rough concept thumbnails and symbol explorations",
      "Testing lettermark connections and negative space balance",
      "Filtering down to the top 3–5 highest-potential conceptual contenders",
      "Initial rough digital vector digitization"
    ],
    deliverable: "Selected Concept Directions Ready for Vectorization"
  },
  {
    step: "04",
    title: "Vector Craft & Mathematical Grid",
    duration: "Day 8 – 11",
    summary:
      "We build every contour in vector space using Golden Ratio geometry, optical stroke corrections, and custom anchor placement.",
    details: [
      "Precision Bézier curve tuning with minimum anchor points",
      "Constructing geometric grids (Golden Ratio, circles, isometric axes)",
      "Optical kerning adjustments for zero distortion at micro sizes",
      "Testing lockups in solid monochrome black & white"
    ],
    deliverable: "Comprehensive Initial Concepts Presentation Deck (in Real Mockups)"
  },
  {
    step: "05",
    title: "Client Feedback & Iterative Polish",
    duration: "Day 12 – 14",
    summary:
      "Collaborative refinement. We test variations, fine-tune proportions, and calibrate color palettes until perfection is reached.",
    details: [
      "Gathering detailed client impressions and stakeholder thoughts",
      "Iterating stroke weights, typeface pairings, or symbol angles",
      "Validating readability across mobile screens, favicons, and signage",
      "Selecting the winning master direction"
    ],
    deliverable: "Final Approved Master Mark & Color Palette Selection"
  },
  {
    step: "06",
    title: "Brand Delivery & Master Asset Kit",
    duration: "Day 15+",
    summary:
      "The handover. We package high-resolution master vectors, digital formats, print files, and the Brand Guidelines book.",
    details: [
      "Exporting full vector suite (AI, EPS, SVG, PDF in RGB & CMYK)",
      "High-res transparent PNGs at 1000px, 2000px, 4000px and favicons",
      "Compiling the 35+ page Brand Guidelines Manual",
      "Signing over 100% full commercial copyright ownership transfer"
    ],
    deliverable: "Complete Cloud Asset Package & Brand Guidelines Book"
  }
];
