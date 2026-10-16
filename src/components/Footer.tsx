"use client";

import Link from "next/link";
import { Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "@/data/company";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t, language } = useApp();

  return (
    <footer className="bg-[#F3F2EF] dark:bg-[#0E0E10] border-t border-[#E7E7E4] dark:border-[#222226] text-[#6B6B6B] dark:text-[#A1A1AA] text-xs transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs shadow-2xs">
                M
              </div>
              <span className="text-base font-bold text-[#111111] dark:text-[#F4F4F5] tracking-tight">
                Mahadev Steel Art
              </span>
            </div>
            <p className="text-[#6B6B6B] dark:text-[#A1A1AA] text-xs leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-[#111111] dark:text-[#F4F4F5] text-xs font-devanagari font-medium">
              {COMPANY_INFO.hindiTagline}
            </p>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-[#111111] dark:text-[#F4F4F5] font-mono uppercase tracking-widest text-xs mb-4 font-semibold">
              {t.footer.capabilitiesTitle}
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/#services"
                    className="text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white transition-colors"
                  >
                    {language === "hi" ? s.hindiTitle : s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#gallery"
                  className="text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white transition-colors"
                >
                  {t.footer.portfolioLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier Location */}
          <div>
            <h4 className="text-[#111111] dark:text-[#F4F4F5] font-mono uppercase tracking-widest text-xs mb-4 font-semibold">
              {t.footer.atelierTitle}
            </h4>
            <div className="space-y-2 text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed">
              <p>{COMPANY_INFO.address}</p>
              <p className="font-mono text-[11px] text-[#111111] dark:text-[#F4F4F5]">
                Monday – Sunday • 9:00 AM – 8:00 PM
              </p>
              <p className="font-mono text-[11px]">
                Wheelchair Accessible Workshop
              </p>
            </div>
          </div>

          {/* Direct Line */}
          <div>
            <h4 className="text-[#111111] dark:text-[#F4F4F5] font-mono uppercase tracking-widest text-xs mb-4 font-semibold">
              {t.footer.directTitle}
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-[#111111] dark:text-[#F4F4F5] hover:underline font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 hover:underline font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp: +91 8796576868</span>
              </a>
              <div className="pt-2 flex flex-col gap-1.5 text-[#6B6B6B] dark:text-[#A1A1AA] text-[11px] font-mono">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#111111] dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Google Maps Directions</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="#gallery"
                  className="hover:text-[#111111] dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>{language === "hi" ? "75+ वर्कशॉप प्रोजेक्ट्स देखें" : "Browse 75+ Workshop Works"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Local Areas Served for SEO */}
        <div className="mt-14 pt-8 border-t border-[#E7E7E4] dark:border-[#222226] text-[#6B6B6B] dark:text-[#A1A1AA] text-[11px] leading-relaxed">
          <p className="font-mono uppercase tracking-wider text-[#111111] dark:text-[#F4F4F5] mb-1.5 font-semibold">
            {t.footer.areasTitle}
          </p>
          <p>{t.footer.areasList}</p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[#E7E7E4] dark:border-[#222226] flex flex-col sm:flex-row items-center justify-between gap-3 text-[#6B6B6B] dark:text-[#A1A1AA] text-[11px]">
          <p>{t.footer.copyright}</p>
          <p className="text-[#111111] dark:text-[#F4F4F5] font-medium">
            {t.footer.subCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
