"use client";

import React from "react";
import { ShieldCheck, Sparkles, Star, Award, Hammer, Compass, Layers, CheckCircle } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function MarqueeTrustStrip() {
  const { t } = useApp();

  const icons = [ShieldCheck, Star, Sparkles, Layers, Award, Compass, Hammer, CheckCircle];

  return (
    <section className="w-full overflow-hidden border-y border-[#E7E7E4] dark:border-[#27272A] bg-white dark:bg-[#151518] py-5 mb-20 sm:mb-28 transition-colors duration-200">
      {/* Eyebrow Label */}
      <div className="max-w-[1280px] mx-auto px-6 text-center mb-4">
        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#6B6B6B] dark:text-[#A1A1AA] font-semibold">
          {t.marquee.eyebrow}
        </p>
      </div>

      {/* Infinite Seamless Marquee */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16">
          {t.marquee.items.concat(t.marquee.items).map((label, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-[#111111] dark:text-[#F4F4F5] font-semibold text-xs sm:text-sm tracking-tight shrink-0 select-none"
              >
                <div className="w-6 h-6 rounded-full bg-[#F3F2EF] dark:bg-[#202024] border border-[#E7E7E4] dark:border-[#2E2E34] flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-[#111111] dark:text-[#F4F4F5]" />
                </div>
                <span>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
