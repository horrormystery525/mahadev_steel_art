"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Sun, Moon, Globe } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, language, toggleLanguage, t } = useApp();

  const navLinks = [
    { name: t.nav.capabilities, href: "/#services" },
    { name: t.nav.lookbook, href: "/#gallery" },
    { name: t.nav.atelier, href: "/#about" },
    { name: t.nav.reviews, href: "/#reviews" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#E7E7E4] dark:border-[#27272A] bg-[#F7F7F5]/90 dark:bg-[#111113]/90 backdrop-blur-md transition-all">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[72px]">
        {/* Brand Logo & Studio Tag */}
        <div className="flex items-center gap-5 lg:gap-8 xl:gap-10 shrink-0">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-xs shadow-xs group-hover:scale-105 transition-transform shrink-0">
              M
            </div>
            <div className="flex flex-col shrink-0">
              <span className="text-base font-bold tracking-tight text-[#111111] dark:text-[#F4F4F5] whitespace-nowrap">
                Mahadev Steel Art
              </span>
              <span className="text-[11px] text-[#6B6B6B] dark:text-[#A1A1AA] tracking-tight whitespace-nowrap">
                Akhari Bypass, Varanasi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-3.5 xl:gap-5 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-tight text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#F4F4F5] transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Controls: Workshop Status, WhatsApp, Call Fabricator, then Language & Theme */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 xl:gap-3 shrink-0">
          {/* Live Studio Status Pill */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] text-xs font-medium text-[#111111] dark:text-[#F4F4F5] whitespace-nowrap shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            <span className="whitespace-nowrap">{t.nav.workshopStatus}</span>
          </div>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              COMPANY_INFO.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border border-[#E7E7E4] dark:border-[#27272A] bg-white dark:bg-[#1C1B1E] hover:bg-[#F3F2EF] dark:hover:bg-[#27272B] text-[#111111] dark:text-[#F4F4F5] text-xs font-medium transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="whitespace-nowrap">{t.nav.whatsapp}</span>
          </a>

          {/* Call Fabricator Pill */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="bg-black dark:bg-white text-white dark:text-black px-3.5 sm:px-4.5 py-2 rounded-full font-semibold transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200 active:scale-95 text-xs sm:text-sm flex items-center gap-1.5 shadow-xs whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">{t.nav.callFabricator}</span>
            <span className="sm:hidden whitespace-nowrap">Call</span>
          </a>

          {/* Divider between Call Fabricator and Utility Toggles */}
          <div className="hidden sm:block h-5 w-[1px] bg-neutral-300 dark:bg-neutral-700 mx-0.5 shrink-0" />

          {/* Language Switcher Pill (EN ↔ हिन्दी) - Placed after Call Fabricator */}
          <button
            type="button"
            onClick={toggleLanguage}
            title={language === "en" ? "हिन्दी में बदलें" : "Switch to English"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E7E7E4] dark:border-[#27272A] bg-white dark:bg-[#1C1B1E] hover:bg-[#F3F2EF] dark:hover:bg-[#27272B] text-xs font-semibold text-[#111111] dark:text-[#F4F4F5] transition-all cursor-pointer shadow-2xs whitespace-nowrap shrink-0"
            aria-label="Toggle language between English and Hindi"
          >
            <Globe className="w-3.5 h-3.5 text-[#6B6B6B] dark:text-[#A1A1AA] shrink-0" />
            <span className="whitespace-nowrap">{language === "en" ? "हिन्दी" : "English"}</span>
          </button>

          {/* Theme Switcher Toggle (Light ↔ Dark) - Placed after Call Fabricator */}
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            className="p-2 rounded-full border border-[#E7E7E4] dark:border-[#27272A] bg-white dark:bg-[#1C1B1E] hover:bg-[#F3F2EF] dark:hover:bg-[#27272B] text-[#111111] dark:text-[#F4F4F5] transition-all cursor-pointer shadow-2xs shrink-0"
            aria-label="Toggle between dark and light theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-[#111111]" />
            ) : (
              <Sun className="w-4 h-4 text-amber-400" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white hover:bg-[#F3F2EF] dark:hover:bg-[#1C1B1E] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E7E7E4] dark:border-[#27272A] bg-[#F7F7F5] dark:bg-[#111113] px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 px-3 rounded-xl text-sm font-medium text-[#111111] dark:text-[#F4F4F5] hover:bg-[#F3F2EF] dark:hover:bg-[#1C1B1E]"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#6B6B6B] dark:text-[#A1A1AA]" />
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E7E7E4] dark:border-[#27272A] grid grid-cols-2 gap-2 text-xs">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav.callFabricator}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                COMPANY_INFO.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] text-[#111111] dark:text-[#F4F4F5] font-semibold"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{t.nav.whatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
