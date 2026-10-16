"use client";

import { useState } from "react";
import { COMPANY_INFO, SERVICES } from "@/data/company";
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ContactSection() {
  const { t, language } = useApp();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Stainless Steel (SS) Railings",
    location: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = language === "hi"
      ? `नमस्ते महादेव स्टील आर्ट,\n\nनाम: ${formData.name}\nमोबाइल: ${formData.phone}\nकाम का प्रकार: ${formData.service}\nवाराणसी में इलाका: ${formData.location || "वाराणसी"}\nविवरण: ${formData.details || "कृपया एस्टीमेट दें और साइट नाप का समय तय करें।"}`
      : `Hello Mahadev Steel Art,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.service}\nLocation in Varanasi: ${formData.location || "Varanasi"}\nProject Notes: ${formData.details || "Please provide quotation and schedule site measurement."}`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F7F7F5] dark:bg-[#111113] relative border-t border-[#E7E7E4] dark:border-[#27272A] transition-colors duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F2EF] dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#27272A] text-xs font-mono uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1AA] mb-4">
            {t.contact.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#111111] dark:text-[#F4F4F5] tracking-tight leading-tight">
            {t.contact.title}
            <span className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-normal">
              {t.contact.titleSub}
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed">
            {t.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Workshop Details & Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-[#18181C] p-6 sm:p-8 rounded-3xl border border-[#E7E7E4] dark:border-[#27272A] shadow-2xs space-y-6 transition-colors">
              <h3 className="text-sm font-semibold text-[#111111] dark:text-[#F4F4F5] uppercase tracking-wider font-mono">
                {t.contact.channelsTitle}
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#F3F2EF] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] flex items-center justify-center text-[#111111] dark:text-[#F4F4F5] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] dark:text-[#F4F4F5]">{t.contact.addressTitle}</h4>
                    <p className="text-[#6B6B6B] dark:text-[#A1A1AA] mt-0.5 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-[#6B6B6B] dark:text-[#A1A1AA] text-xs mt-1 font-mono">
                      {t.contact.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#F3F2EF] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] flex items-center justify-center text-[#111111] dark:text-[#F4F4F5] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] dark:text-[#F4F4F5]">{t.contact.phoneTitle}</h4>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-[#111111] dark:text-white hover:underline font-semibold block mt-0.5"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] dark:text-[#F4F4F5]">{t.contact.whatsappTitle}</h4>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${encodeURIComponent(
                        COMPANY_INFO.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 dark:text-emerald-400 hover:underline font-semibold block mt-0.5"
                    >
                      +91 8796576868
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-[#F3F2EF] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] flex items-center justify-center text-[#6B6B6B] dark:text-[#A1A1AA] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111111] dark:text-[#F4F4F5]">{t.contact.hoursTitle}</h4>
                    <p className="text-[#6B6B6B] dark:text-[#A1A1AA] mt-0.5 font-mono text-xs">
                      {t.contact.hoursValue}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Interactive Map */}
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-[#18181C] border border-[#E7E7E4] dark:border-[#27272A] h-72 sm:h-80 relative shadow-2xs p-2 transition-colors">
              <iframe
                title="Mahadev Steel Art Workshop Location"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              <div className="absolute bottom-5 right-5">
                <a
                  href={COMPANY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white dark:bg-[#1C1B1E] hover:bg-[#F3F2EF] dark:hover:bg-[#27272B] text-[#111111] dark:text-[#F4F4F5] text-xs font-semibold shadow-md border border-[#E7E7E4] dark:border-[#2A2A30] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{t.contact.openMapsBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Measurement Request Form */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#18181C] p-6 sm:p-8 rounded-3xl border border-[#E7E7E4] dark:border-[#27272A] shadow-2xs transition-colors">
              <h3 className="text-sm font-semibold text-[#111111] dark:text-[#F4F4F5] font-mono uppercase tracking-wider">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] mt-1 mb-6">
                {t.contact.formSubtitle}
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#F3F2EF] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] text-center space-y-3">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                  <h4 className="text-[#111111] dark:text-[#F4F4F5] font-semibold text-sm">{t.contact.successTitle}</h4>
                  <p className="text-xs text-[#6B6B6B] dark:text-[#A1A1AA] leading-relaxed">
                    {t.contact.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-1.5 rounded-full bg-white dark:bg-[#1C1B1E] border border-[#E7E7E4] dark:border-[#2A2A30] text-xs text-[#111111] dark:text-[#F4F4F5] hover:bg-neutral-100 dark:hover:bg-[#25252A] transition-colors cursor-pointer"
                  >
                    {t.contact.submitAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label htmlFor="customer-name" className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-mono text-[11px] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] text-[#111111] dark:text-[#F4F4F5] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="customer-phone" className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-mono text-[11px] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      id="customer-phone"
                      type="tel"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] text-[#111111] dark:text-[#F4F4F5] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service-type" className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-mono text-[11px] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.contact.reqLabel}
                    </label>
                    <select
                      id="service-type"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] text-[#111111] dark:text-[#F4F4F5] focus:outline-none focus:border-black dark:focus:border-white transition-colors font-sans"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={language === "hi" ? s.hindiTitle : s.title} className="dark:bg-[#18181C]">
                          {language === "hi" ? s.hindiTitle : s.title}
                        </option>
                      ))}
                      <option value="General Fabrication & Structural Steel" className="dark:bg-[#18181C]">
                        {language === "hi" ? "सामान्य स्ट्रक्चरल फैब्रिकेशन" : "General Structural Fabrication"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="site-location" className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-mono text-[11px] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.contact.locationLabel}
                    </label>
                    <input
                      id="site-location"
                      type="text"
                      placeholder={t.contact.locationPlaceholder}
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] text-[#111111] dark:text-[#F4F4F5] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="project-details" className="block text-[#6B6B6B] dark:text-[#A1A1AA] font-mono text-[11px] uppercase tracking-wider mb-1.5 font-semibold">
                      {t.contact.notesLabel}
                    </label>
                    <textarea
                      id="project-details"
                      rows={3}
                      placeholder={t.contact.notesPlaceholder}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-[#202025] border border-[#E7E7E4] dark:border-[#2E2E34] text-[#111111] dark:text-[#F4F4F5] placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-full bg-black dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.contact.submitBtn}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
