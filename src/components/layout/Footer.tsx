"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowUp, Check } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) return;
    setSubscribed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c0d10] text-[#f4f5f1] pt-20 sm:pt-28 md:pt-32 pb-12 border-t border-[#22252d] relative overflow-hidden">
      {/* Decorative ambient logo-yellow glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fdfe65]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20 relative z-10">
        {/* Lunna Massive Editorial Title: "Entrust Design to Professionals" */}
        <div className="pb-16 sm:pb-24 border-b border-[#22252d]">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#f4f5f1] leading-[1.05]">
            Entrust Design <br />
            <span className="text-[#fdfe65]">to Professionals</span>
          </h2>
        </div>

        {/* Lunna 4-Column Footer Grid (elementor-col-25 x 4) */}
        <div className="py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Address */}
          <div className="space-y-4">
            <h6 className="text-xs uppercase tracking-widest text-[#fdfe65] font-bold">
              Address
            </h6>
            <div className="text-sm sm:text-base text-[#a5a7ad] leading-relaxed space-y-1">
              <p className="text-[#f4f5f1] font-semibold">Graphomo Studio —</p>
              <p>Ring Road, Creative Tech District</p>
              <p>Surat, Gujarat, India 395006</p>
            </div>
          </div>

          {/* Column 2: Say Hello */}
          <div className="space-y-4">
            <h6 className="text-xs uppercase tracking-widest text-[#fdfe65] font-bold">
              Say Hello
            </h6>
            <div className="text-sm sm:text-base text-[#a5a7ad] leading-relaxed space-y-2">
              <p>
                <a
                  href="mailto:hello@graphomo.com"
                  className="text-[#f4f5f1] font-medium hover:text-[#fdfe65] pb-0.5 border-b border-[#a5a7ad]/40 hover:border-[#fdfe65] transition-all"
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

          {/* Column 3: Socials */}
          <div className="space-y-4">
            <h6 className="text-xs uppercase tracking-widest text-[#fdfe65] font-bold">
              Socials
            </h6>
            <ul className="space-y-2 text-sm sm:text-base font-semibold text-[#a5a7ad]">
              {[
                { name: "Facebook", href: "https://facebook.com" },
                { name: "Twitter", href: "https://twitter.com" },
                { name: "Dribble", href: "https://dribbble.com" },
                { name: "Instagram", href: "https://instagram.com" },
              ].map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="hover:text-[#fdfe65] transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#fdfe65]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h6 className="text-xs uppercase tracking-widest text-[#fdfe65] font-bold">
              Newsletter
            </h6>
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  required
                  className="w-full bg-[#181a20] border border-[#2d3039] focus:border-[#fdfe65] text-[#f4f5f1] placeholder-[#6f727a] px-4 py-3 rounded-lg text-sm focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={!agreed}
                className={`w-full py-3 px-4 rounded-lg text-xs uppercase tracking-wider font-bold transition-all ${
                  agreed
                    ? "bg-[#fdfe65] text-[#0c0d10] hover:bg-[#edf04c] cursor-pointer"
                    : "bg-[#22252d] text-[#6f727a] cursor-not-allowed"
                }`}
              >
                {subscribed ? "Subscribed!" : "Subscribe"}
              </button>

              <label className="flex items-start gap-2.5 text-xs text-[#a5a7ad] cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 accent-[#fdfe65]"
                />
                <span>
                  I agree to the{" "}
                  <Link href="/privacy" className="underline hover:text-[#fdfe65]">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top (Lunna footer divider + AxiomThemes style) */}
        <div className="pt-8 border-t border-[#22252d] flex flex-col sm:flex-row items-center justify-between text-xs text-[#a5a7ad] gap-4">
          <p>Graphomo © 2026. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#f4f5f1] hover:text-[#fdfe65] transition-colors font-bold uppercase tracking-wider"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#fdfe65]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
