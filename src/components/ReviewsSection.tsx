"use client";

import { REVIEWS, COMPANY_INFO } from "@/data/company";
import { Star, CheckCircle, ArrowUpRight, MessageCircle } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ReviewsSection() {
  const { t, language } = useApp();

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#F7F7F5] dark:bg-[#111113] relative border-t border-[#E7E7E4] dark:border-[#27272A] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Section Header with Aggregate Rating Capsule */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1AA] mb-4">
              {t.reviews.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#111111] dark:text-[#F4F4F5] tracking-tight leading-tight">
              {t.reviews.title}
              <span className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-normal">
                {t.reviews.titleSub}
              </span>
            </h2>
          </div>

          {/* Aggregate Rating Capsule */}
          <div className="p-4 px-6 rounded-2xl bg-white dark:bg-[#18181C] border border-[#E7E7E4] dark:border-[#27272A] shadow-2xs flex items-center gap-5 transition-colors">
            <div className="text-3xl sm:text-4xl font-bold text-[#111111] dark:text-[#F4F4F5]">
              {t.reviews.aggregateScore}
            </div>
            <div className="border-l border-[#E7E7E4] dark:border-[#27272A] pl-5">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-medium mt-1">
                {t.reviews.aggregateText}
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => {
            const primaryText = language === "hi" && review.hindiText ? review.hindiText : review.text;
            const secondaryText = language === "hi" ? review.text : review.hindiText;

            return (
              <div
                key={review.id}
                className="bg-white dark:bg-[#18181C] rounded-3xl border border-[#E7E7E4] dark:border-[#27272A] p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating & Source Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-0.5 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6B6B6B] dark:text-[#A1A1AA] px-2.5 py-0.5 rounded-full bg-[#F3F2EF] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] font-semibold">
                      via {review.source}
                    </span>
                  </div>

                  {/* Primary Review Text */}
                  <p className="text-sm text-[#111111] dark:text-[#F4F4F5] leading-relaxed font-medium mb-3">
                    &ldquo;{primaryText}&rdquo;
                  </p>

                  {/* Secondary Reflection */}
                  {secondaryText && (
                    <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] italic pt-3 border-t border-[#E7E7E4] dark:border-[#27272A] leading-relaxed">
                      &ldquo;{secondaryText}&rdquo;
                    </p>
                  )}
                </div>

                {/* Author & Verification */}
                <div className="mt-6 pt-4 border-t border-[#E7E7E4] dark:border-[#27272A] flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-[#111111] dark:text-[#F4F4F5] flex items-center gap-1.5">
                      {review.author}
                      {review.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 fill-emerald-100 dark:fill-emerald-950" />
                      )}
                    </h4>
                    <p className="text-[11px] text-[#6B6B6B] dark:text-[#A1A1AA]">{t.reviews.verifiedClient}</p>
                  </div>
                  {review.date && (
                    <span className="text-[10px] text-[#6B6B6B] dark:text-[#A1A1AA] font-mono">{review.date}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Client Direct Actions & Studio Validation */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs">
          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-white dark:bg-[#18181C] text-[#111111] dark:text-[#F4F4F5] hover:bg-[#F3F2EF] dark:hover:bg-[#222228] border border-[#E7E7E4] dark:border-[#27272A] flex items-center gap-1.5 transition-colors font-medium shadow-2xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.reviews.googleMapsBtn}</span>
            <ArrowUpRight className="w-3 h-3 text-[#6B6B6B] dark:text-[#A1A1AA]" />
          </a>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              language === "hi"
                ? "नमस्ते Mahadev Steel Art, मुझे आपके काम की समीक्षाएं देखकर संपर्क करना है। क्या आप साइट विज़िट और कोटेशन दे सकते हैं?"
                : "Hello Mahadev Steel Art, I came across your client reviews and would like to arrange an on-site measurement and estimate."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full bg-white dark:bg-[#18181C] text-[#111111] dark:text-[#F4F4F5] hover:bg-[#F3F2EF] dark:hover:bg-[#222228] border border-[#E7E7E4] dark:border-[#27272A] flex items-center gap-1.5 transition-colors font-medium shadow-2xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.reviews.whatsappInquiryBtn}</span>
            <ArrowUpRight className="w-3 h-3 text-[#6B6B6B] dark:text-[#A1A1AA]" />
          </a>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="px-4 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 flex items-center gap-1.5 transition-colors font-medium shadow-2xs"
          >
            <span>{language === "hi" ? "कॉल करें: " : "Direct Call: "} {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
