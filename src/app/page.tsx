import React from "react";
import { LunnaHero } from "@/components/home/LunnaHero";
import { LunnaPortfolioGrid } from "@/components/home/LunnaPortfolioGrid";
import { LunnaServicesShowcase } from "@/components/home/LunnaServicesShowcase";
import { LunnaCounterModern } from "@/components/home/LunnaCounterModern";
import { LunnaVideoBanner } from "@/components/home/LunnaVideoBanner";
import { LunnaWhoWeAre } from "@/components/home/LunnaWhoWeAre";
import { LunnaTeamSection } from "@/components/home/LunnaTeamSection";
import { LunnaRecentArticles } from "@/components/home/LunnaRecentArticles";

export const metadata = {
  title: "Graphomo — Creative Logo Design & Brand Identity Studio",
  description:
    "A creative digital design studio specializing in bespoke logo design, brand architecture, and visual identities. Bringing your vision to life.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Lunna Hero Section */}
      <LunnaHero />

      {/* 2. Lunna Featured Portfolio Grid & View All Projects */}
      <LunnaPortfolioGrid />

      {/* 3. Lunna Interactive Capabilities Split Tabs (controller-tools-3) */}
      <LunnaServicesShowcase />

      {/* 4. Lunna Skills / Counter Modern (98 Projects / 65 People / 10 Years / 15 Offices) */}
      <LunnaCounterModern />

      {/* 5. Lunna Cinematic Video Showreel Banner with PLAY Button */}
      <LunnaVideoBanner />

      {/* 6. Lunna "Who We Are" Geometric Feature Grid */}
      <LunnaWhoWeAre />

      {/* 7. Lunna "Our Team" Creative Directors (4 Columns with Hover Info) */}
      <LunnaTeamSection />

      {/* 8. Lunna Blog / Recent Articles */}
      <LunnaRecentArticles />
    </>
  );
}
