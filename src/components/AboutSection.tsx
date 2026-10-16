"use client";

import Image from "next/image";
import { COMPANY_INFO } from "@/data/company";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function AboutSection() {
  const { t } = useApp();

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F7F7F5] dark:bg-[#111113] relative border-t border-[#E7E7E4] dark:border-[#27272A] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Workshop Photography in Crisp Frame */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white dark:bg-[#18181C] rounded-3xl p-3 border border-[#E7E7E4] dark:border-[#27272A] shadow-sm transition-colors">
              <div className="relative h-[360px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-[#F3F2EF] dark:bg-[#121214]">
                <Image
                  src="/images/storefront.webp"
                  alt="Mahadev Steel Art Workshop Varanasi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Floating Specification Card */}
              <div className="p-4 mt-2 bg-[#F3F2EF] dark:bg-[#1E1E23] rounded-2xl border border-[#E7E7E4] dark:border-[#2A2A30] transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1AA] font-semibold">
                      {t.about.workshopTag}
                    </p>
                    <h4 className="text-[#111111] dark:text-[#F4F4F5] font-semibold text-sm mt-0.5">
                      {t.about.facilityTitle}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 flex items-center justify-center text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] mt-1">
                  {t.about.facilityDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1AA] mb-3">
                {t.about.eyebrow}
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold text-[#111111] dark:text-[#F4F4F5] tracking-tight leading-tight">
                {t.about.title}
                <span className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-normal">
                  {t.about.titleSub}
                </span>
              </h2>
            </div>

            {/* Editorial Quote */}
            <blockquote className="p-6 rounded-2xl bg-white dark:bg-[#18181C] border border-[#E7E7E4] dark:border-[#27272A] shadow-2xs space-y-2 transition-colors">
              <p className="text-sm sm:text-base font-devanagari text-[#111111] dark:text-[#F4F4F5] italic leading-relaxed font-medium">
                &ldquo;{COMPANY_INFO.ownerQuote}&rdquo;
              </p>
              <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA]">
                {t.about.quoteNote}
              </p>
            </blockquote>

            <p className="text-sm sm:text-base text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed">
              {t.about.narrative}
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {t.about.pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="p-5 rounded-2xl bg-white dark:bg-[#18181C] border border-[#E7E7E4] dark:border-[#27272A] shadow-2xs space-y-1.5 transition-colors"
                >
                  <span className="text-xs font-mono font-semibold text-[#6B6B6B] dark:text-[#A1A1AA] block">
                    {pillar.num}
                  </span>
                  <h4 className="text-[#111111] dark:text-[#F4F4F5] text-sm font-semibold">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Visit Studio CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs sm:text-sm font-semibold tracking-tight transition-all shadow-xs cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>{t.about.visitDirections}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <span className="text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA]">
                {t.about.hours}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
