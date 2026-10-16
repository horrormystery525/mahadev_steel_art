import { COMPANY_INFO, GALLERY_PHOTOS, SERVICES } from "@/data/company";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://mahadevsteelart.in",
        "name": COMPANY_INFO.name,
        "alternateName": "Mahadev Steel Art Varanasi",
        "description": COMPANY_INFO.shortAbout,
        "telephone": COMPANY_INFO.phoneRaw,
        "url": "https://mahadevsteelart.in",
        "priceRange": "₹₹",
        "image": GALLERY_PHOTOS.map((p) => p.url),
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Akhari Bypass, Chunar Rd, Akhari Trimuhani",
          "addressLocality": "Varanasi",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "221011",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": COMPANY_INFO.coordinates.lat,
          "longitude": COMPANY_INFO.coordinates.lng,
        },
        "hasMap": COMPANY_INFO.googleMapsUrl,
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            "opens": "09:00",
            "closes": "20:00",
          },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "395",
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Varanasi",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Bhikharipur Kala",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Akhari",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Chunar Road",
          },
        ],
        "paymentAccepted": COMPANY_INFO.paymentMethods.join(", "),
        "currenciesAccepted": "INR",
        "makesOffer": SERVICES.map((service) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.shortDesc,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
