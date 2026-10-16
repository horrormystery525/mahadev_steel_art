"use client";

import { Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function MobileStickyBar() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#0c0c16]/95 backdrop-blur-lg border-t border-amber-500/30 p-2.5 px-3 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${COMPANY_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-sm tracking-wide shadow-lg shadow-amber-500/20 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>कॉल करें (Call)</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
            COMPANY_INFO.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-950 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>व्हाट्सएप करें</span>
        </a>
      </div>
    </aside>
  );
}
