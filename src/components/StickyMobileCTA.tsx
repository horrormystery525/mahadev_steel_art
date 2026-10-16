"use client";

import { Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useApp } from "@/context/AppContext";

export default function StickyMobileCTA() {
  const { t } = useApp();

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-4 inset-x-4 z-50 md:hidden max-w-sm mx-auto bg-white/95 dark:bg-[#18181C]/95 rounded-full p-2 border border-[#E7E7E4] dark:border-[#2E2E34] shadow-[0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-md transition-colors"
    >
      <div className="grid grid-cols-2 gap-2">
        {/* Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-xs tracking-tight shadow-xs active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
          <span>{t.mobileCta.call}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
            COMPANY_INFO.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-full bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 text-white font-semibold text-xs tracking-tight shadow-xs active:scale-95 transition-transform"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
          <span>{t.mobileCta.whatsapp}</span>
        </a>
      </div>
    </aside>
  );
}
