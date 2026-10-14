import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy, Palette, Type, Compass, CheckCircle2, Award } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export const dynamic = "force-static";

// Generate static params for all project slugs
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Synchronous resolution or React.use for params
  return params.then(({ slug }) => {
    const project = PROJECTS.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
      title: `${project.title} — Case Study`,
      description: project.tagline,
      openGraph: {
        title: `${project.title} | Graphomo Studio`,
        description: project.tagline,
        images: [{ url: project.coverImage }],
      },
    };
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject =
    projectIndex > 0 ? PROJECTS[projectIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : PROJECTS[0];

  return (
    <article className="py-12 md:py-20 bg-[#f9fbf5]">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#595959] hover:text-[#141416] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Works</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="pb-12 border-b border-[#e1e5d4]/80">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 bg-[#141416] text-[#f9fbf5] rounded-full text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[#595959] uppercase tracking-wider">
              {project.year} • {project.industry}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141416] leading-[1.08]">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#595959] mt-4 max-w-3xl leading-relaxed">
            {project.tagline}
          </p>

          {/* Metadata Grid Bar */}
          <div className="mt-10 pt-8 border-t border-[#e1e5d4]/60 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            <div>
              <div className="text-[#8b8f87] uppercase tracking-wider font-semibold">Client</div>
              <div className="text-sm font-bold text-[#141416] mt-1">{project.client}</div>
            </div>
            <div>
              <div className="text-[#8b8f87] uppercase tracking-wider font-semibold">Timeline</div>
              <div className="text-sm font-bold text-[#141416] mt-1">{project.year}</div>
            </div>
            <div>
              <div className="text-[#8b8f87] uppercase tracking-wider font-semibold">Category</div>
              <div className="text-sm font-bold text-[#141416] mt-1">{project.category}</div>
            </div>
            <div>
              <div className="text-[#8b8f87] uppercase tracking-wider font-semibold">Creative Direction</div>
              <div className="text-sm font-bold text-[#141416] mt-1">Sagar Khunt / Graphomo</div>
            </div>
          </div>
        </header>

        {/* Main Cover Mockup Image */}
        <div className="my-12 rounded-2xl overflow-hidden border border-[#e1e5d4] shadow-lg relative aspect-[16/9] w-full bg-[#f1f4ea]">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Deliverables Pills */}
        <div className="pb-16 border-b border-[#e1e5d4]/60">
          <div className="text-xs uppercase tracking-widest text-[#595959] font-bold mb-4">
            Deliverables Scope
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.deliverables.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#ffffff] border border-[#e1e5d4] rounded-full text-xs font-semibold text-[#141416] flex items-center gap-2 shadow-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f3cc0c]" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>

        {/* The Challenge & The Strategic Solution */}
        <section className="py-16 border-b border-[#e1e5d4]/60 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              01 / The Challenge
            </h2>
            <h3 className="text-2xl font-bold text-[#141416] tracking-tight">
              Establishing Market Authority.
            </h3>
            <p className="text-base text-[#595959] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              02 / The Solution
            </h2>
            <h3 className="text-2xl font-bold text-[#141416] tracking-tight">
              Mathematical Precision & Soul.
            </h3>
            <p className="text-base text-[#595959] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Mathematical Grid & Concept Breakdown */}
        <section className="py-16 border-b border-[#e1e5d4]/60">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              03 / Geometric Construction
            </h2>
            <h3 className="text-3xl font-bold text-[#141416] tracking-tight mt-2">
              Bézier Curves & Golden Ratio Grid.
            </h3>
            <p className="text-base text-[#595959] mt-3 leading-relaxed">
              {project.conceptDescription}
            </p>
          </div>

          {/* Construction Blueprint Display */}
          <div className="p-8 sm:p-12 bg-[#ffffff] rounded-2xl border border-[#e1e5d4] relative overflow-hidden flex flex-col items-center justify-center min-h-[340px]">
            {/* Grid background lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f4ea_1px,transparent_1px),linear-gradient(to_bottom,#f1f4ea_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 text-center max-w-md space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#141416] text-[#f3cc0c] flex items-center justify-center shadow-md">
                <Compass className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-[#141416]">
                100% Vector Precision Anatomy
              </h4>
              <p className="text-xs text-[#595959] leading-relaxed">
                Constructed with non-destructive mathematical tangents, 0.01pt stroke consistency, and optical kerning compensations for flawless high-resolution rendering.
              </p>
            </div>
          </div>
        </section>

        {/* Logo Variations Matrix */}
        <section className="py-16 border-b border-[#e1e5d4]/60">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              04 / Logo System & Lockups
            </h2>
            <h3 className="text-3xl font-bold text-[#141416] tracking-tight mt-2">
              Responsive Variations.
            </h3>
            <p className="text-base text-[#595959] mt-2">
              Every identity is stress-tested in solid monochrome and reverse lockups to guarantee adaptability across all substrates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Dark Lockup */}
            <div className="bg-[#141416] text-[#f9fbf5] p-8 rounded-2xl flex flex-col items-center justify-center min-h-[200px] border border-[#272930] shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8b8f87] mb-4">
                Primary Dark Mode
              </span>
              <div className="text-2xl font-bold tracking-tight text-center font-display">
                {project.title.split(" ")[0]}
              </div>
            </div>

            {/* Light Canvas Lockup */}
            <div className="bg-[#ffffff] text-[#141416] p-8 rounded-2xl flex flex-col items-center justify-center min-h-[200px] border border-[#e1e5d4] shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8b8f87] mb-4">
                Monochrome Clean
              </span>
              <div className="text-2xl font-bold tracking-tight text-center font-display">
                {project.title.split(" ")[0]}
              </div>
            </div>

            {/* Submark / Emblem */}
            <div className="bg-[#f1f4ea] text-[#141416] p-8 rounded-2xl flex flex-col items-center justify-center min-h-[200px] border border-[#e1e5d4] shadow-sm">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8b8f87] mb-4">
                Compact Submark (16px – 64px)
              </span>
              <div className="w-12 h-12 rounded-full border-2 border-[#141416] flex items-center justify-center font-bold text-sm">
                {project.title.substring(0, 2).toUpperCase()}
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Swatch Inspector */}
        <section className="py-16 border-b border-[#e1e5d4]/60">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              05 / Chromatic Calibration
            </h2>
            <h3 className="text-3xl font-bold text-[#141416] tracking-tight mt-2 flex items-center gap-2">
              <Palette className="w-7 h-7 text-[#f3cc0c]" />
              <span>Color System Specifications</span>
            </h3>
            <p className="text-base text-[#595959] mt-2">
              Each tone is calibrated across digital sRGB displays, CMYK offset printing inks, and Pantone spot systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.colorPalette.map((color, idx) => (
              <div
                key={idx}
                className="bg-[#ffffff] rounded-2xl overflow-hidden border border-[#e1e5d4] shadow-sm flex flex-col"
              >
                {/* Color Swatch block */}
                <div
                  className="h-28 w-full border-b border-[#e1e5d4]/50"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h4 className="font-bold text-sm text-[#141416]">{color.name}</h4>
                    <p className="text-[11px] text-[#8b8f87] mt-0.5">{color.usage}</p>
                  </div>

                  <div className="pt-3 border-t border-[#e1e5d4]/60 space-y-1 font-mono text-xs text-[#595959]">
                    <div className="flex justify-between">
                      <span className="text-[#8b8f87]">HEX:</span>
                      <span className="font-bold text-[#141416]">{color.hex}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8b8f87]">CMYK:</span>
                      <span>{color.cmyk}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8b8f87]">Pantone:</span>
                      <span>{color.pantone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography System */}
        <section className="py-16 border-b border-[#e1e5d4]/60">
          <div className="max-w-3xl mb-8">
            <h2 className="text-xs uppercase tracking-widest text-[#595959] font-bold">
              06 / Typography Pairing
            </h2>
            <h3 className="text-3xl font-bold text-[#141416] tracking-tight mt-2 flex items-center gap-2">
              <Type className="w-7 h-7 text-[#f3cc0c]" />
              <span>Type Architecture</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e1e5d4]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8b8f87]">
                Primary Display Logotype
              </span>
              <h4 className="text-2xl font-bold text-[#141416] mt-2 font-display">
                {project.typography.primary}
              </h4>
              <p className="text-xs text-[#595959] mt-4 leading-relaxed">
                {project.typography.notes}
              </p>
              <div className="mt-6 pt-4 border-t border-[#e1e5d4]/60 text-xs font-mono text-[#8b8f87]">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
              </div>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#e1e5d4]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#8b8f87]">
                Secondary & Editorial Body Font
              </span>
              <h4 className="text-2xl font-bold text-[#141416] mt-2">
                {project.typography.secondary}
              </h4>
              <p className="text-xs text-[#595959] mt-4 leading-relaxed">
                Selected for maximum optical legibility across high-density reading environments, brochures, and digital dashboards.
              </p>
              <div className="mt-6 pt-4 border-t border-[#e1e5d4]/60 text-xs font-mono text-[#8b8f87]">
                abcdefghijklmnopqrstuvwxyz • — $ € £ % &
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Impact Metrics */}
        <section className="py-16 border-b border-[#e1e5d4]/60">
          <h2 className="text-xs uppercase tracking-widest text-[#595959] font-bold mb-8">
            07 / Commercial Impact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-[#ffffff] p-8 rounded-2xl border border-[#e1e5d4] text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#141416] tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#595959] mt-2">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Previous / Next Project Navigation Bar */}
        <nav className="py-16 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
          <Link
            href={`/portfolio/${prevProject.slug}`}
            className="flex-1 p-6 bg-[#ffffff] rounded-2xl border border-[#e1e5d4] hover-lift group"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8b8f87] mb-1">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Previous Project</span>
            </div>
            <div className="text-base font-bold text-[#141416] group-hover:text-[#595959] transition-colors">
              {prevProject.title}
            </div>
          </Link>

          <Link
            href={`/portfolio/${nextProject.slug}`}
            className="flex-1 p-6 bg-[#ffffff] rounded-2xl border border-[#e1e5d4] hover-lift text-right group"
          >
            <div className="flex items-center justify-end gap-2 text-xs font-semibold uppercase tracking-wider text-[#8b8f87] mb-1">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="text-base font-bold text-[#141416] group-hover:text-[#595959] transition-colors">
              {nextProject.title}
            </div>
          </Link>
        </nav>
      </div>
    </article>
  );
}
