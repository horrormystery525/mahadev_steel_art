import Image from "next/image";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";


export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#0d0d18] overflow-hidden py-16 sm:py-24">
      {/* Workshop Background Image with heavy industrial overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gallery/photo-3.webp"
          alt="Mahadev Steel Art Workshop Varanasi"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1a] via-[#0f0f1a]/80 to-[#0f0f1a]/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,168,56,0.15)_0%,transparent_70%)]"></div>
      </div>

      {/* Sparks particles simulation in CSS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
        <div className="spark" style={{ left: "15%", bottom: "20%", animationDelay: "0s" }}></div>
        <div className="spark" style={{ left: "28%", bottom: "10%", animationDelay: "1.2s" }}></div>
        <div className="spark" style={{ left: "45%", bottom: "25%", animationDelay: "0.6s" }}></div>
        <div className="spark" style={{ left: "62%", bottom: "15%", animationDelay: "2.1s" }}></div>
        <div className="spark" style={{ left: "78%", bottom: "30%", animationDelay: "1.7s" }}></div>
        <div className="spark" style={{ left: "88%", bottom: "12%", animationDelay: "0.9s" }}></div>
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Varanasi&apos;s Trusted Steel & Fabrication Workshop • Akhari Bypass</span>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white font-heading tracking-wider leading-[0.95] drop-shadow-2xl">
          MAHADEV STEEL ART
        </h1>

        {/* Hindi Tagline */}
        <p className="mt-4 text-xl sm:text-2xl md:text-3xl text-amber-400 font-bold tracking-wide amber-glow-text font-heading">
          &ldquo;{COMPANY_INFO.hindiTagline}&rdquo;
        </p>

        {/* Sub-tagline */}
        <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-lg text-neutral-300 font-normal leading-relaxed">
          Specializing in premium <span className="text-white font-semibold">Stainless Steel Railings</span>, <span className="text-white font-semibold">Designer Gates & Grills</span>, <span className="text-white font-semibold">Aluminium Windows</span>, and <span className="text-white font-semibold">Heavy Structural Fabrication</span>.
        </p>

        {/* Two Primary Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-neutral-950 font-black text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Call Now ({COMPANY_INFO.phone})</span>
          </a>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              COMPANY_INFO.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-emerald-950 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>WhatsApp Enquiry & Quote</span>
          </a>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-neutral-300 text-xs sm:text-sm">
          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="text-amber-400 font-extrabold text-xl sm:text-2xl font-heading">5.0 ★</span>
            <span className="text-[11px] sm:text-xs text-neutral-400">395+ Verified Client Reviews</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="text-amber-400 font-extrabold text-xl sm:text-2xl font-heading">SS 304</span>
            <span className="text-[11px] sm:text-xs text-neutral-400">100% Rust-Proof Grade</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="text-amber-400 font-extrabold text-xl sm:text-2xl font-heading">7 DAYS</span>
            <span className="text-[11px] sm:text-xs text-neutral-400">Open 9:00 AM – 8:00 PM</span>
          </div>

          <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
            <span className="text-amber-400 font-extrabold text-xl sm:text-2xl font-heading">FREE</span>
            <span className="text-[11px] sm:text-xs text-neutral-400">Measurement & Estimate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
