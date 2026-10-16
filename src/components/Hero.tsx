"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, Star, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { t, language } = useApp();
  const [activeTab, setActiveTab] = useState(0);

  const showcaseItems = [
    {
      tabLabel: t.hero.tabRailings,
      title: language === "hi" ? "एसएस बालकनी एवं सीढ़ी रेलिंग" : "Stainless Steel Balcony & Staircase Balustrade",
      spec: language === "hi" ? "एसएस 304 ग्रेड • मिरर पॉलिश • टफन्ड ग्लास" : "SS 304 Grade • Mirror Polish • Toughened Glass",
      image: "/images/gallery/photo-1.webp",
      desc: language === "hi" 
        ? "मजबूत एसएस 304 ग्रेड स्टेनलेस स्टील से निर्मित, जिसमें सटीक टीआईजी वेल्डिंग और बफिंग की जाती है।"
        : "Rust-free 304 grade austenitic stainless steel with precision TIG joint buffing for homes and villas.",
      whatsappQuery: "SS 304 Balcony Railing",
    },
    {
      tabLabel: t.hero.tabGates,
      title: language === "hi" ? "आधुनिक मुख्य द्वार एवं सुरक्षा ग्रिल" : "Architectural Heavy Entrance Gate & Security Grill",
      spec: language === "hi" ? "16-गेज भारी मेटल • एंटी-रस्ट प्राइमर • सीएनसी कट" : "16-Gauge Heavy Steel • Anti-Corrosion Primer • Laser Cut",
      image: "/images/gallery/photo-0.webp",
      desc: language === "hi"
        ? "मजबूत बाउंड्री गेट, ऑटोमैटिक स्लाइडिंग गेट और सुरक्षा ग्रिल जो आजीवन मजबूती और सुरक्षा प्रदान करते हैं।"
        : "Bespoke boundary gates, sliding mechanisms, and decorative forged window grills built for lifetime security.",
      whatsappQuery: "Designer Main Entrance Gate",
    },
    {
      tabLabel: t.hero.tabWindows,
      title: language === "hi" ? "स्टील एवं एल्युमिनियम स्लाइडिंग खिड़की" : "Weatherproof Steel & Aluminium Sliding Systems",
      spec: language === "hi" ? "पाउडर कोटेड एल्युमिनियम • स्मूथ रोलर्स" : "Anodized Powder-Coated Aluminium • Smooth Rollers",
      image: "/images/gallery/photo-2.webp",
      desc: language === "hi"
        ? "मौसम की मार सहने वाले आधुनिक स्लाइडिंग एल्युमिनियम फ्रेम एवं खिड़कियां।"
        : "High-durability sliding window sections and heavy casement frames engineered for weather resistance.",
      whatsappQuery: "Aluminium Sliding Window Section",
    },
    {
      tabLabel: t.hero.tabFabrication,
      title: language === "hi" ? "स्ट्रक्चरल स्टील शेड, सीढ़ी व फैब्रिकेशन" : "Heavy Structural Steel, Roof Sheds & Staircases",
      spec: language === "hi" ? "हैवी एमएस बीम • सटीक पाइप बेंडिंग" : "Structural MS Beams • Pipe Bending • Precision Trusses",
      image: "/images/gallery/photo-3.webp",
      desc: language === "hi"
        ? "छत के शेड, पॉलीकार्बोनेट कार पोर्च, घुमावदार सीढ़ियां और इंडस्ट्रियल फैब्रिकेशन कार्य।"
        : "Roof sheds, polycarbonate car porches, spiral staircases, and custom commercial steel fabrication.",
      whatsappQuery: "Custom Structural Shed Fabrication",
    },
  ];

  const currentItem = showcaseItems[activeTab];

  return (
    <section className="pt-28 sm:pt-36 pb-12 overflow-hidden bg-[#F7F7F5] dark:bg-[#111113] transition-colors duration-200">
      {/* 1. Asymmetric Hero Header (Auralis Style) */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-14 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Headline and Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Status Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] text-xs font-medium text-[#111111] dark:text-[#F4F4F5] transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.hero.eyebrow}</span>
            </div>

            {/* Master Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-semibold text-[#111111] dark:text-[#F4F4F5] leading-[1.05] tracking-tight transition-colors">
              {t.hero.titleLine1}
              <span className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-normal">
                {t.hero.titleLine2}
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-base sm:text-lg text-[#6B6B6B] dark:text-[#A1A1AA] font-medium font-devanagari transition-colors">
              &ldquo;{t.hero.tagline}&rdquo;
            </p>

            {/* Pill Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="bg-black dark:bg-white text-white dark:text-black px-7 py-3.5 rounded-full font-semibold transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 text-sm flex items-center gap-2.5 shadow-xs"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{t.hero.callNow}</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] text-[#111111] dark:text-[#F4F4F5] px-7 py-3.5 rounded-full font-semibold transition-all hover:bg-[#F3F2EF] dark:hover:bg-[#27272B] active:scale-95 text-sm flex items-center gap-2.5 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.hero.whatsappQuote}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Subtext & Trust Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-4">
            <p className="text-base sm:text-lg text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed transition-colors">
              {t.hero.description}
            </p>

            {/* Trust Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-8 mt-8 border-t border-[#E7E7E4] dark:border-[#27272A] transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] flex items-center justify-center text-[#111111] dark:text-[#F4F4F5] shrink-0 mt-0.5">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111111] dark:text-[#F4F4F5]">{t.hero.statRating}</h4>
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA]">{t.hero.statRatingDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] flex items-center justify-center text-[#111111] dark:text-[#F4F4F5] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111111] dark:text-[#F4F4F5]">{t.hero.statMaterial}</h4>
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA]">{t.hero.statMaterialDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] flex items-center justify-center text-[#111111] dark:text-[#F4F4F5] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111111] dark:text-[#F4F4F5]">{t.hero.statLocation}</h4>
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA]">{t.hero.statLocationDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] flex items-center justify-center text-[#111111] dark:text-[#F4F4F5] shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#111111] dark:text-[#F4F4F5]">{t.hero.statMeasure}</h4>
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA]">{t.hero.statMeasureDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Showcase Panel */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 mb-16">
        <div className="bg-[#F3F2EF] dark:bg-[#161619] rounded-3xl p-5 sm:p-8 flex flex-col relative overflow-hidden border border-[#E7E7E4] dark:border-[#27272A] shadow-sm transition-colors">
          {/* Top Bar: Tabs */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 z-10 pb-4 border-b border-[#E7E7E4] dark:border-[#27272A]">
            <div className="flex flex-wrap gap-1.5 p-1 bg-white dark:bg-[#1E1E22] rounded-full border border-[#E7E7E4] dark:border-[#2A2A30] shadow-2xs">
              {showcaseItems.map((item, index) => (
                <button
                  key={item.tabLabel}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === index
                      ? "bg-black dark:bg-white text-white dark:text-black shadow-xs"
                      : "text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white"
                  }`}
                >
                  {item.tabLabel}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1E1E22] border border-[#E7E7E4] dark:border-[#2A2A30] text-xs font-semibold text-[#111111] dark:text-[#F4F4F5]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{t.hero.liveBadge}</span>
            </div>
          </div>

          {/* Center Stage: Display Canvas */}
          <div className="my-6 max-w-4xl w-full mx-auto bg-white dark:bg-[#1E1E22] rounded-2xl p-4 sm:p-6 border border-[#E7E7E4] dark:border-[#2A2A30] shadow-sm transition-colors">
            <div className="relative h-[300px] sm:h-[420px] w-full bg-[#F7F7F5] dark:bg-[#121214] rounded-xl overflow-hidden flex items-center justify-center border border-[#E7E7E4]/60 dark:border-[#2A2A30] transition-colors">
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain p-2 sm:p-4 transition-all duration-500 ease-out"
                priority
              />

              {/* Floating Material Spec Capsule */}
              <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-black/80 dark:bg-black/90 backdrop-blur-md text-white text-[11px] font-medium tracking-tight">
                {currentItem.spec}
              </div>

              {/* Floating Location Badge */}
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/90 dark:bg-[#1C1B1E]/90 backdrop-blur-md border border-[#E7E7E4] dark:border-[#2A2A30] text-[#111111] dark:text-[#F4F4F5] text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                <MapPin className="w-3 h-3 text-red-600 dark:text-red-400" />
                <span>{t.hero.specimenBadge}</span>
              </div>
            </div>

            {/* Title and WhatsApp Quote */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#111111] dark:text-[#F4F4F5] tracking-tight">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1AA] mt-1 font-medium">
                  {currentItem.desc}
                </p>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  `Hello Mahadev Steel Art, I am looking for quotation for "${currentItem.title}" (${currentItem.spec}). Please provide details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-semibold whitespace-nowrap transition-all shadow-xs shrink-0 self-start sm:self-auto cursor-pointer"
              >
                <span>{t.hero.requestRate}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bottom Feature Strip */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-[#E7E7E4] dark:border-[#27272A] text-xs text-[#6B6B6B] dark:text-[#A1A1AA] transition-colors">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5 font-medium text-[#111111] dark:text-[#F4F4F5]">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {t.hero.guarantee1}
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {t.hero.guarantee2}
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {t.hero.guarantee3}
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                {t.hero.guarantee4}
              </span>
            </div>

            <span className="text-[11px] font-mono text-[#6B6B6B] dark:text-[#A1A1AA]">
              {t.hero.hoursPill}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
