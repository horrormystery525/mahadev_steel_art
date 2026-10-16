import Hero from "@/components/Hero";
import MarqueeTrustStrip from "@/components/MarqueeTrustStrip";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTrustStrip />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
