"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X, Mail, Phone, MapPin } from "lucide-react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close panel on route change or ESC key
  useEffect(() => {
    setPanelOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#fafcf4]/95 backdrop-blur-md shadow-sm border-b border-[#e4eac8] py-3.5"
            : "bg-[#fafcf4] border-b border-[#e4eac8]/60 py-4.5"
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
          <div className="flex items-center justify-between">
            {/* Left Area: Brand Logo + Studio Indicator */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center group relative z-10">
                <div className="relative h-10 sm:h-11 w-44 sm:w-56 transition-transform duration-200 group-hover:scale-[1.02]">
                  <Image
                    src="/brand/graphomo-logo-horizontal.png"
                    alt="Graphomo — Bringing Your Vision To Life"
                    fill
                    sizes="(max-width: 640px) 176px, 224px"
                    priority
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              {/* Studio Live Status Indicator (Unique Agency Detail) */}
              <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffffff] border border-[#e4eac8] text-[11px] font-bold tracking-wider text-[#0c0d10] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[#595959] font-medium">STUDIO:</span>
                <span className="uppercase">AVAILABLE FOR 2026</span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 text-[14px] font-semibold transition-colors relative tracking-wide ${
                      isActive
                        ? "text-[#0c0d10] font-bold"
                        : "text-[#595959] hover:text-[#0c0d10]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2.5px] bg-[#fdfe65] rounded-full shadow-sm" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area: CTA Button + Lunna 3-Line Menu Trigger */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 bg-[#fdfe65] hover:bg-[#edf04c] text-[#0c0d10] text-xs uppercase tracking-wider font-bold px-5 py-2.5 rounded-full border border-[#0c0d10]/15 transition-all duration-200 group shadow-sm hover:shadow"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#0c0d10]" />
              </Link>

              {/* Lunna Signature 3-Line Menu Button */}
              <button
                onClick={() => setPanelOpen(true)}
                className="p-2 sm:p-2.5 rounded-full hover:bg-[#fdfe65]/40 transition-colors focus:outline-none flex items-center justify-center group"
                aria-label="Open Fullscreen Navigation Menu"
                title="Open Menu"
              >
                {/* Exact Lunna SVG Icon from reference */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="16"
                  viewBox="0 0 31.712 15.368"
                  className="transition-transform duration-200 group-hover:scale-105"
                >
                  <g id="group" transform="translate(9.662 13.645)">
                    <path
                      id="line"
                      d="M21.189,396H.861a.861.861,0,0,0,0,1.723H21.189a.861.861,0,0,0,0-1.723Z"
                      transform="translate(0 -396)"
                      fill="#0c0d10"
                    />
                    <g id="group-2" data-name="group" transform="translate(40)">
                      <path
                        id="line-2"
                        data-name="line"
                        d="M-19.148-12.795H-48.812"
                        fill="#0c0d10"
                        stroke="#0c0d10"
                        strokeLinecap="round"
                        strokeWidth="1.7"
                      />
                      <path
                        id="line-3"
                        data-name="line"
                        d="M-19.148-12.795H-48.812"
                        transform="translate(0 7)"
                        fill="#0c0d10"
                        stroke="#0c0d10"
                        strokeLinecap="round"
                        strokeWidth="1.7"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
         LUNNA FULLSCREEN NAVIGATION PANEL (scheme_dark / #menu_panel_style_1)
         ========================================================================= */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ${
          panelOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
      >
        {/* Dark Backdrop Overlay */}
        <div
          className="absolute inset-0 bg-[#0c0d10]/80 backdrop-blur-md transition-opacity duration-500"
          onClick={() => setPanelOpen(false)}
        />

        {/* Slide-in Panel from Right */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full sm:w-[540px] md:w-[620px] bg-[#0c0d10] text-[#f4f5f1] shadow-2xl p-6 sm:p-10 md:p-14 flex flex-col justify-between overflow-y-auto border-l border-[#22252d] transition-transform duration-500 ease-out ${
            panelOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top Panel Bar: Logo + Close Button */}
          <div className="flex items-center justify-between pb-8 border-b border-[#22252d]">
            <div className="relative h-9 w-40">
              <Image
                src="/brand/graphomo-official-logo.png"
                alt="Graphomo Logo"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>
            <button
              onClick={() => setPanelOpen(false)}
              className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#a5a7ad] hover:text-[#fdfe65] transition-colors p-2"
              aria-label="Close menu"
            >
              <span>Close</span>
              <X className="w-5 h-5 text-[#fdfe65]" />
            </button>
          </div>

          {/* Large Editorial Menu Links */}
          <div className="my-auto py-8">
            <span className="text-xs uppercase tracking-widest text-[#a5a7ad] font-semibold mb-4 block">
              Navigation Menu
            </span>
            <ul className="space-y-4 sm:space-y-5">
              {[
                { href: "/", label: "Design Agency", num: "01" },
                { href: "/portfolio", label: "Selected Portfolio", num: "02" },
                { href: "/services", label: "Our Capabilities", num: "03" },
                { href: "/process", label: "Design Process", num: "04" },
                { href: "/about", label: "About Graphomo", num: "05" },
                { href: "/blog", label: "Journal & Insights", num: "06" },
                { href: "/contact", label: "Contact Studio", num: "07" },
              ].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setPanelOpen(false)}
                      className="group flex items-center justify-between text-2xl sm:text-4xl font-bold tracking-tight text-[#f4f5f1] hover:text-[#fdfe65] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-[#a5a7ad] group-hover:text-[#fdfe65] transition-colors">
                          {item.num}
                        </span>
                        <span className={isActive ? "text-[#fdfe65]" : ""}>
                          {item.label}
                        </span>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-[#595959] group-hover:text-[#fdfe65] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bottom Studio Info & Socials */}
          <div className="pt-8 border-t border-[#22252d] space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#a5a7ad]">
              <div className="space-y-1">
                <div className="text-[#f4f5f1] font-bold uppercase tracking-wider text-[11px]">
                  Studio Location
                </div>
                <p>Ring Road, Creative Tech District</p>
                <p>Surat, Gujarat, India 395006</p>
              </div>
              <div className="space-y-1">
                <div className="text-[#f4f5f1] font-bold uppercase tracking-wider text-[11px]">
                  Direct Inquiries
                </div>
                <p>
                  <a
                    href="mailto:hello@graphomo.com"
                    className="hover:text-[#fdfe65] transition-colors"
                  >
                    hello@graphomo.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+919429087311"
                    className="hover:text-[#fdfe65] transition-colors"
                  >
                    +91 94290 87311
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs uppercase tracking-wider font-bold">
              {[
                { name: "Facebook", href: "https://facebook.com" },
                { name: "Twitter", href: "https://twitter.com" },
                { name: "Dribbble", href: "https://dribbble.com" },
                { name: "Instagram", href: "https://instagram.com" },
                { name: "Behance", href: "https://behance.net" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a5a7ad] hover:text-[#fdfe65] transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
