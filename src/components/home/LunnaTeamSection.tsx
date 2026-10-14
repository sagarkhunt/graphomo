"use client";

import React from "react";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  code: string;
}

const TEAM: TeamMember[] = [
  {
    id: "1",
    name: "Alex Walker",
    role: "Graphic Designer",
    image: "/images/team/team-1.jpg",
    code: "01 // DESIGN",
  },
  {
    id: "2",
    name: "Kelly Stone",
    role: "Art Director",
    image: "/images/team/team-2.jpg",
    code: "02 // DIRECTION",
  },
  {
    id: "3",
    name: "David Miller",
    role: "Senior Brand Designer",
    image: "/images/team/team-3.jpg",
    code: "03 // IDENTITY",
  },
  {
    id: "4",
    name: "Emma Watson",
    role: "Lead Typographer",
    image: "/images/team/team-4.jpg",
    code: "04 // TYPECRAFT",
  },
];

export const LunnaTeamSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-b border-[#e4eac8] bg-[#fafcf4]">
      {/* Expansive Full-Width Container */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#e4eac8]">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-bold text-[#a5a6aa] block">
              our team
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1d1d1d] tracking-tight">
              Crafting Brands Together
            </h2>
          </div>
          <div className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#595959] bg-[#ffffff] px-4 py-2 rounded-full border border-[#e4eac8]">
            MULTIDISCIPLINARY CREATIVE DIRECTORS
          </div>
        </div>

        {/* 4-Column Team Portraits Grid (sc_team_featured) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="group relative block overflow-hidden rounded-2xl bg-[#0c0d10] aspect-[3/4] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Member Portrait Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Corner Code Tag */}
              <div className="absolute top-4 right-4 z-10 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#0c0d10]/70 backdrop-blur-sm text-[#ffffff] border border-[#ffffff]/15">
                {member.code}
              </div>

              {/* Lunna Dark Hover Overlay Curtain (trx_addons_hover_mask) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10]/95 via-[#0c0d10]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-8 z-10" />

              {/* Lunna Hover Info (trx_addons_hover_team) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-3">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#ffffff] tracking-tight group-hover:text-[#fdfe65] transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#a5a6aa] mt-1">
                    {member.role}
                  </div>
                </div>

                {/* Social Icons Strip */}
                <div className="pt-3 border-t border-[#ffffff]/20 flex items-center space-x-3 text-xs uppercase font-bold text-[#ffffff]">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="hover:text-[#fdfe65] transition-colors"
                  >
                    FB
                  </a>
                  <span>•</span>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="hover:text-[#fdfe65] transition-colors"
                  >
                    TW
                  </a>
                  <span>•</span>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="hover:text-[#fdfe65] transition-colors"
                  >
                    DR
                  </a>
                  <span>•</span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="hover:text-[#fdfe65] transition-colors"
                  >
                    IG
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
