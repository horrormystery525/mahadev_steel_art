"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { GALLERY_PHOTOS, PhotoItem, COMPANY_INFO } from "@/data/company";
import { MessageCircle, X, ArrowUpRight, Plus, MapPin } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function GallerySection() {
  const { t, language } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const categoryOptions = [
    { key: "All", label: t.gallery.filterAll },
    { key: "Railings", label: t.gallery.filterRailings },
    { key: "Gates", label: t.gallery.filterGates },
    { key: "Windows", label: t.gallery.filterWindows },
    { key: "Fabrication", label: t.gallery.filterFabrication },
    { key: "Workshop", label: t.gallery.filterWorkshop },
  ];

  const handleCategoryChange = (key: string) => {
    setSelectedCategory(key);
    setVisibleCount(12);
  };

  const filteredPhotos =
    selectedCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activePhoto) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [activePhoto]);

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      setActivePhoto(null);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#F7F7F5] dark:bg-[#111113] relative border-t border-[#E7E7E4] dark:border-[#27272A] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1AA] mb-4">
              {t.gallery.eyebrow}
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#111111] dark:text-[#F4F4F5] tracking-tight leading-tight">
              {t.gallery.title}
              <span className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-normal">
                {t.gallery.titleSub}
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed">
              {t.gallery.desc}
            </p>
          </div>

          {/* Minimalist Filter Capsule */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-full bg-white dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] shadow-2xs">
            {categoryOptions.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategoryChange(cat.key)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.key
                    ? "bg-black dark:bg-white text-white dark:text-black shadow-xs"
                    : "text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid: Natural, Completely Uncropped Frames */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo) => {
            const photoTitle = language === "hi" && photo.hindiTitle ? photo.hindiTitle : photo.title;

            return (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="bg-white dark:bg-[#18181C] rounded-2xl border border-[#E7E7E4] dark:border-[#27272A] p-3.5 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                {/* Photo Framing: object-contain with gentle neutral padding */}
                <div className="relative h-60 sm:h-64 w-full bg-[#F3F2EF] dark:bg-[#121214] rounded-xl overflow-hidden flex items-center justify-center p-2 border border-[#E7E7E4]/60 dark:border-[#25252A] transition-colors">
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#1C1B1E]/90 backdrop-blur-sm text-[10px] font-mono uppercase tracking-wider text-[#111111] dark:text-[#F4F4F5] border border-[#E7E7E4] dark:border-[#2E2E34] shadow-xs">
                    {photo.category}
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 dark:bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2.5 rounded-full bg-white dark:bg-[#1C1B1E] text-[#111111] dark:text-white shadow-lg scale-90 group-hover:scale-100 transition-transform">
                      <Plus className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-3 pt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-[#111111] dark:text-[#F4F4F5] font-semibold text-sm group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                      {photoTitle}
                    </h3>
                    {language === "en" && photo.hindiTitle && (
                      <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-devanagari mt-0.5 font-medium">
                        {photo.hindiTitle}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6B6B6B] dark:text-[#A1A1AA] group-hover:text-black dark:group-hover:text-white transition-colors shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 100% Self-Hosted Pagination & In-House Action */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          {visibleCount < filteredPhotos.length ? (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredPhotos.length))}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs sm:text-sm font-semibold tracking-tight transition-all shadow-xs cursor-pointer"
            >
              <span>{t.gallery.loadMore} ({filteredPhotos.length - visibleCount} more)</span>
              <Plus className="w-3.5 h-3.5" />
            </button>
          ) : (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#18181C] text-xs font-mono text-[#6B6B6B] dark:text-[#A1A1AA] border border-[#E7E7E4] dark:border-[#27272A]">
              <span>✓ {t.gallery.allLoaded} ({filteredPhotos.length})</span>
            </div>
          )}

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
              language === "hi"
                ? "नमस्ते Mahadev Steel Art, मुझे आपके वर्कशॉप के कैटलॉग से एक खास डिज़ाइन के बारे में बात करनी है।"
                : "Hello Mahadev Steel Art, I would like to inquire about designs from your workshop portfolio."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#18181C] hover:bg-[#F3F2EF] dark:hover:bg-[#202025] text-xs sm:text-sm font-semibold tracking-tight text-[#111111] dark:text-[#F4F4F5] transition-all border border-[#E7E7E4] dark:border-[#27272A] shadow-xs cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.gallery.inquireBtn}</span>
          </a>
        </div>
      </div>

      {/* Light/Dark Themed Architectural Lightbox Dialog */}
      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        onClose={() => setActivePhoto(null)}
        className="fixed inset-0 m-auto bg-transparent p-4 max-w-4xl w-full max-h-[92vh] focus:outline-none z-50 backdrop:bg-black/60 dark:backdrop:bg-black/80 backdrop:backdrop-blur-md"
      >
        {activePhoto && (
          <div className="bg-white dark:bg-[#18181C] border border-[#E7E7E4] dark:border-[#2E2E34] rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-colors">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#E7E7E4] dark:border-[#27272A]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1AA] font-semibold">
                  {activePhoto.category} • {t.gallery.archiveBadge}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#111111] dark:text-[#F4F4F5] mt-0.5">
                  {language === "hi" && activePhoto.hindiTitle ? activePhoto.hindiTitle : activePhoto.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="p-2 rounded-full text-[#6B6B6B] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-white hover:bg-[#F3F2EF] dark:hover:bg-[#25252A] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image: Pristine Uncropped Display */}
            <div className="relative aspect-video sm:aspect-[16/10] bg-[#F7F7F5] dark:bg-[#111113] max-h-[60vh] flex items-center justify-center p-4">
              <Image
                src={activePhoto.url}
                alt={activePhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-[#E7E7E4] dark:border-[#27272A] flex flex-wrap items-center justify-between gap-4 bg-[#F3F2EF] dark:bg-[#141416]">
              <span className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                <span>{t.gallery.modalLocation}</span>
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                    language === "hi"
                      ? `नमस्ते Mahadev Steel Art, मुझे इस डिज़ाइन के बारे में रेट और समय की जानकारी चाहिए: "${activePhoto.hindiTitle || activePhoto.title}" (फोटो: ${activePhoto.id})`
                      : `Hello Mahadev Steel Art, I would like to inquire about pricing and timeline for this design: "${activePhoto.title}" (Photo: ${activePhoto.id}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 text-xs font-semibold shadow-xs cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
                  <span>{t.gallery.modalQuoteBtn}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
