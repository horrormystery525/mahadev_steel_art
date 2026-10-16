"use client";

import Image from "next/image";
import { SERVICES, COMPANY_INFO } from "@/data/company";
import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ServicesSection() {
  const { t, language } = useApp();

  const hindiServiceDetails: Record<string, { desc: string; features: string[]; materials: string[] }> = {
    "steel-railings": {
      desc: "हम बालकनी, सीढ़ी और छत के लिए एसएस 304 व 202 ग्रेड की चमकदार मिरर फिनिश रेलिंग बनाते हैं। टफन्ड ग्लास या स्टील रॉड फिटिंग के साथ आजीवन जंग-मुक्त सुरक्षा।",
      features: ["बालकनी रेलिंग", "सीढ़ी हैंडरेलिंग", "टफन्ड ग्लास रेलिंग", "टेरेस सुरक्षा रेलिंग", "हाई मिरर / साटन बफिंग"],
      materials: ["एसएस 304 ग्रेड (जंग-मुक्त)", "एसएस 202 ग्रेड", "टफन्ड ग्लास", "प्रीमियम फिटिंग्स"],
    },
    "gates-and-grills": {
      desc: "मजबूत बाउंड्री गेट, ऑटोमैटिक व स्लाइडिंग मुख्य द्वार, सीएनसी लेज़र कटिंग डिज़ाइन और खिड़की सुरक्षा ग्रिल जो आपके घर को पूर्ण सुरक्षा और भव्यता प्रदान करते हैं।",
      features: ["मेन एंट्रेंस गेट", "स्लाइडिंग व स्विंग गेट", "लेज़र-कट डिज़ाइनर गेट", "बाउंड्री वॉल ग्रिल", "बालकनी सेफ्टी मेश"],
      materials: ["रॉट आयरन", "फोर्ज्ड स्टील", "स्टेनलेस स्टील", "एंटी-रस्ट प्राइमर कोटिंग"],
    },
    "steel-windows": {
      desc: "पूर्वांचल के मौसम के अनुकूल वेदरप्रूफ एल्युमिनियम स्लाइडिंग सेक्शन, हैवी स्टील केसमेंट खिड़कियां और मच्छर जाली युक्त फ्रेम सटीक नाप पर तैयार किए जाते हैं।",
      features: ["एल्युमिनियम स्लाइडिंग विंडो", "हैवी स्टील केसमेंट फ्रेम", "वेंटिलेटर व एग्जॉस्ट बॉक्स", "मच्छर जाली फ्रेम"],
      materials: ["एनोडाइज्ड एल्युमिनियम", "पाउडर-कोटेड स्टील", "क्लियर व फ्रॉस्टेड ग्लास"],
    },
    "custom-fabrication": {
      desc: "छत के लिए टिन शेड, पॉलीकार्बोनेट कार पोर्च, घुमावदार (स्पाइरल) सीढ़ियां, मेजेनाइन फ्लोर और इंडस्ट्रियल स्टील ट्रस फैब्रिकेशन कार्य अनुभवी कारीगरों द्वारा।",
      features: ["पॉलीकार्बोनेट / टिन शेड", "स्पाइरल (घुमावदार) सीढ़ी", "कार पार्किंग पोर्च शेड", "मेजेनाइन स्ट्रक्चर"],
      materials: ["एमएस पाइप व एंगल", "जीआई शीट्स", "हैवी चैनल व बीम", "पॉलीकार्बोनेट शीट्स"],
    },
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F7F7F5] dark:bg-[#111113] relative transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1AA] mb-4">
              {t.services.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#111111] dark:text-[#F4F4F5] tracking-tight leading-tight">
              {t.services.title}
              <span className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-normal">
                {t.services.titleSub}
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed">
            {t.services.desc}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const hiData = hindiServiceDetails[service.id];
            const title = language === "hi" ? service.hindiTitle : service.title;
            const desc = language === "hi" && hiData ? hiData.desc : service.fullDesc;
            const features = language === "hi" && hiData ? hiData.features : service.features;
            const materials = language === "hi" && hiData ? hiData.materials : service.materials;

            return (
              <div
                key={service.id}
                className="bg-white dark:bg-[#18181C] rounded-3xl p-6 sm:p-8 border border-[#E7E7E4] dark:border-[#27272A] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image Framing: Strictly Uncropped & Proportional */}
                  <div className="relative h-64 sm:h-72 w-full bg-[#F3F2EF] dark:bg-[#121214] rounded-2xl overflow-hidden flex items-center justify-center p-3 border border-[#E7E7E4]/80 dark:border-[#25252A] transition-colors">
                    <Image
                      src={service.image}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />

                    {/* Number Badge */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/90 dark:bg-[#1C1B1E]/90 backdrop-blur-sm border border-[#E7E7E4] dark:border-[#27272A] text-xs font-mono font-semibold text-[#111111] dark:text-[#F4F4F5] shadow-xs">
                      0{index + 1}
                    </div>

                    {/* Material Indicator */}
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/85 dark:bg-white/90 backdrop-blur-sm text-white dark:text-black text-[11px] font-medium flex items-center gap-1.5 shadow-xs">
                      <ShieldCheck className="w-3 h-3 text-emerald-400 dark:text-emerald-600" />
                      <span>{t.services.certifiedGrade}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#111111] dark:text-[#F4F4F5] tracking-tight">
                      {title}
                    </h3>

                    {language === "en" && (
                      <p className="text-xs sm:text-sm font-devanagari text-[#6B6B6B] dark:text-[#A1A1AA] mt-1 font-medium">
                        {service.hindiTitle}
                      </p>
                    )}

                    <p className="text-sm text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed mt-3">
                      {desc}
                    </p>

                    {/* Specifications Pills */}
                    <div className="mt-5 space-y-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1AA] block mb-1.5 font-semibold">
                          {t.services.configLabel}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {features.map((feat) => (
                            <span
                              key={feat}
                              className="px-2.5 py-1 rounded-lg bg-[#F3F2EF] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] text-xs text-[#111111] dark:text-[#F4F4F5] font-medium"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1AA] block mb-1.5 font-semibold">
                          {t.services.alloyLabel}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {materials.map((mat) => (
                            <span
                              key={mat}
                              className="px-2 py-0.5 rounded text-[11px] bg-neutral-100 dark:bg-[#202025] text-[#111111] dark:text-[#F4F4F5] border border-neutral-300 dark:border-[#33333A] font-medium"
                            >
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-6 mt-6 border-t border-[#E7E7E4] dark:border-[#27272A]">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                      `Hello Mahadev Steel Art, I am inquiring about custom fabrication for "${title}". Please share details and pricing estimate.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between py-3 px-5 rounded-full bg-[#F3F2EF] dark:bg-[#222228] hover:bg-neutral-200/80 dark:hover:bg-[#2C2C34] border border-[#E7E7E4] dark:border-[#2E2E34] text-[#111111] dark:text-[#F4F4F5] text-xs font-semibold tracking-wide transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>{t.services.inquireBtn}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#6B6B6B] dark:text-[#A1A1AA] group-hover:text-black dark:group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
