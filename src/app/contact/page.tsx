"use client";

import React, { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Sparkles, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    projectType: "Custom Logo Design",
    budget: "$2,500 – $5,000",
    timeline: "2 – 4 Weeks",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="py-12 md:py-20 bg-[#fafcf4]">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#595959] font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#0c0d10]" />
            <span>Direct Studio Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0c0d10]">
            Let's Create Your <br />
            Brand Identity.
          </h1>
          <p className="text-base sm:text-lg text-[#595959] mt-4 leading-relaxed font-normal">
            Ready to give your business an iconic, timeless logo mark? Fill out the brief below or reach out directly via WhatsApp for an immediate response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#ffffff] p-8 sm:p-12 rounded-2xl border border-[#e4eac8] shadow-sm">
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#fdfe65] text-[#0c0d10] flex items-center justify-center mx-auto shadow-md border border-[#0c0d10]/15">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0c0d10]">
                  Brief Received Successfully!
                </h3>
                <p className="text-sm text-[#595959] max-w-md mx-auto leading-relaxed font-normal">
                  Thank you, <span className="font-bold text-[#0c0d10]">{formData.name}</span>. We will review your project details for <span className="font-bold text-[#0c0d10]">{formData.businessName || "your brand"}</span> and send an initial proposal within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-wider text-[#0c0d10] underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0c0d10] mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Henrik Nyström"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f2f6dc]/40 border border-[#e4eac8] rounded-xl px-4 py-3.5 text-sm font-semibold text-[#0c0d10] placeholder-[#84878f] focus:outline-none focus:border-[#0c0d10] focus:ring-2 focus:ring-[#fdfe65]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0c0d10] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="henrik@atelier.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#f2f6dc]/40 border border-[#e4eac8] rounded-xl px-4 py-3.5 text-sm font-semibold text-[#0c0d10] placeholder-[#84878f] focus:outline-none focus:border-[#0c0d10] focus:ring-2 focus:ring-[#fdfe65]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0c0d10] mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f2f6dc]/40 border border-[#e4eac8] rounded-xl px-4 py-3.5 text-sm font-semibold text-[#0c0d10] placeholder-[#84878f] focus:outline-none focus:border-[#0c0d10] focus:ring-2 focus:ring-[#fdfe65]"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0c0d10] mb-2">
                      Business or Project Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Atelier Nyström"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-[#f2f6dc]/40 border border-[#e4eac8] rounded-xl px-4 py-3.5 text-sm font-semibold text-[#0c0d10] placeholder-[#84878f] focus:outline-none focus:border-[#0c0d10] focus:ring-2 focus:ring-[#fdfe65]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0c0d10] mb-2">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#f2f6dc]/40 border border-[#e4eac8] rounded-xl px-4 py-3.5 text-sm font-semibold text-[#0c0d10] focus:outline-none focus:border-[#0c0d10] focus:ring-2 focus:ring-[#fdfe65]"
                    >
                      <option>Custom Logo Design</option>
                      <option>Complete Brand Identity System</option>
                      <option>Business & Corporate Branding</option>
                      <option>Social Media Branding Kit</option>
                      <option>Logo Redesign & Modernization</option>
                      <option>Brand Style Guidelines</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0c0d10] mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#f2f6dc]/40 border border-[#e4eac8] rounded-xl px-4 py-3.5 text-sm font-semibold text-[#0c0d10] focus:outline-none focus:border-[#0c0d10] focus:ring-2 focus:ring-[#fdfe65]"
                    >
                      <option>$1,450 – $2,500 (Essential Logo)</option>
                      <option>$2,950 – $5,000 (Full Brand System)</option>
                      <option>$5,800+ (Enterprise Evolution)</option>
                      <option>Flexible / Undetermined</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0c0d10] mb-2">
                    Project Vision & Goals *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your brand ethos, target market, competitors, or specific visual requirements..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#f2f6dc]/40 border border-[#e4eac8] rounded-xl px-4 py-3.5 text-sm font-semibold text-[#0c0d10] placeholder-[#84878f] focus:outline-none focus:border-[#0c0d10] focus:ring-2 focus:ring-[#fdfe65]"
                  />
                </div>

                {/* Submit button in Logo Yellow */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2.5 bg-[#fdfe65] hover:bg-[#edf04c] text-[#0c0d10] font-bold text-xs uppercase tracking-wider py-4 rounded-full border border-[#0c0d10]/15 transition-all duration-200 group shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-3.5 h-3.5 text-[#0c0d10] transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Studio Presence (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Direct Card */}
            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e4eac8] shadow-sm hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#84878f] font-bold">
                    Fastest Response
                  </span>
                  <h3 className="text-lg font-bold text-[#0c0d10]">
                    Chat on WhatsApp
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#595959] leading-relaxed mb-6 font-normal">
                Prefer a quick chat or want to share sketches directly? Connect with Sagar Khunt on WhatsApp.
              </p>
              <a
                href="https://wa.me/919429087311?text=Hello%20Graphomo%2C%20I%20am%20interested%20in%20a%20custom%20logo%20design%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-[#ffffff] font-bold text-xs uppercase tracking-wider py-3.5 rounded-full transition-colors shadow-sm"
              >
                <span>Open WhatsApp Direct</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Details Box */}
            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e4eac8] shadow-sm space-y-6">
              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#0c0d10] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#84878f] font-bold">
                    Direct Email
                  </div>
                  <a href="mailto:hello@graphomo.com" className="text-sm font-bold text-[#0c0d10] hover:underline">
                    hello@graphomo.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#0c0d10] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#84878f] font-bold">
                    Direct Studio Phone
                  </div>
                  <a href="tel:+919429087311" className="text-sm font-bold text-[#0c0d10] hover:underline">
                    +91 94290 87311
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#0c0d10] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#84878f] font-bold">
                    Response Window
                  </div>
                  <div className="text-sm font-bold text-[#0c0d10]">
                    Guaranteed within 24 business hours
                  </div>
                </div>
              </div>
            </div>

            {/* Studio Booking Status */}
            <div className="p-6 rounded-2xl bg-[#fdfe65] border border-[#0c0d10]/15 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0c0d10] animate-ping" />
                <span className="text-xs font-bold text-[#0c0d10] uppercase tracking-wider">
                  Accepting New Projects
                </span>
              </div>
              <span className="text-xs text-[#0c0d10] font-mono font-bold">
                Q1 & Q2 Slots Open
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
