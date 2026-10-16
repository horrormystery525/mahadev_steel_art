export interface ServiceItem {
  id: string;
  title: string;
  hindiTitle: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  materials: string[];
  icon: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  source: "Google" | "Verified Client";
  rating: number;
  text: string;
  hindiText?: string;
  date?: string;
  verified: boolean;
}

export interface PhotoItem {
  id: string;
  url: string;
  category: "Railings" | "Gates" | "Windows" | "Fabrication" | "Workshop";
  title: string;
  hindiTitle?: string;
  alt: string;
}

export const COMPANY_INFO = {
  name: "Mahadev Steel Art",
  legalTagline: "Steel Railing | Gate Greel | Steel window | Steel work manufacturer | Fabrication work in Varanasi",
  hindiTagline: "स्टील की मजबूती, कला की खूबसूरती",
  englishTagline: "The Strength of Steel, The Beauty of Handcrafted Art",
  shortAbout: "Mahadev Steel Art is Varanasi's premier steel and aluminium fabrication workshop located at Akhari Bypass. Specializing in high-grade SS railings, modern designer gates, window grills, and custom metal fabrication.",
  fullAboutHindi: "महादेव स्टील आर्ट वाराणसी (अखरी बाईपास, चुनार रोड) में स्थित एक विश्वसनीय स्टील एवं एल्युमिनियम फैब्रिकेशन कार्यशाला है। हम आधुनिक डिज़ाइन, प्रीमियम फिनिशिंग और उच्च गुणवत्ता वाले स्टेनलेस स्टील व लोहे से मजबूत रेलिंग, गेट, ग्रिल और खिड़कियां तैयार करते हैं।",
  ownerQuote: "हमारे लिए स्टील सिर्फ धातु नहीं, शिल्पकारी और भरोसे की पहचान है। अखरी बाईपास पर हमारी वर्कशॉप में हर रेलिंग, हर गेट अपने हाथों से मजबूती और सुंदरता के साथ बनाया जाता है।",
  ownerName: "Mahadev Steel Art Team",
  phone: "+91 9619360717",
  phoneRaw: "+919619360717",
  whatsapp: "+91 8796576868",
  whatsappRaw: "918796576868",
  whatsappMessage: "नमस्ते Mahadev Steel Art, मुझे स्टील रेलिंग / गेट / फैब्रिकेशन कार्य के बारे में जानकारी चाहिए।",
  address: "Akhari Bypass, Chunar Rd, Akhari Trimuhani, Bhikharipur Kala, Akhari, Varanasi, Uttar Pradesh 221011",
  landmark: "Near Akhari Bypass Chauraha, Chunar Road",
  coordinates: {
    lat: 25.2463175,
    lng: 82.9516945,
  },
  googleMapsUrl: "https://www.google.com/maps/place/Mahadev+Steel+Art+-+Steel+Railing+%7C+Gate+Greel+%7C+Steel+window+%7C+Steel+work+manufacturer%7C+Fabrication+work+in+Varanasi/@25.2463175,82.9516945,17z/data=!3m1!4b1!4m6!3m5!1s0x398e33501e63a78b:0x7aab279b520ad9e1!8m2!3d25.2463175!4d82.9516945!16s%2Fg%2F11x1sbsrph",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=25.2463175,82.9516945&hl=en&z=16&output=embed",
  hours: "Monday - Sunday: 9:00 AM - 8:00 PM (Open All 7 Days)",
  operatingHoursList: [
    { day: "Monday", time: "9:00 AM - 8:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 8:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 8:00 PM" },
    { day: "Thursday", time: "9:00 AM - 8:00 PM" },
    { day: "Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Saturday", time: "9:00 AM - 8:00 PM" },
    { day: "Sunday", time: "9:00 AM - 8:00 PM" },
  ],
  ratings: {
    aggregate: "5.0",
    totalReviews: "395+",
    platforms: [
      { name: "Google Maps Verified", score: "5.0", count: "Akhari Studio", logo: "google" },
      { name: "Direct Client Reviews", score: "5.0", count: "395+ verified", logo: "verified" },
      { name: "In-House Workshop", score: "75+", count: "Completed Works", logo: "portfolio" },
    ],
  },
  paymentMethods: ["Cash", "UPI", "Paytm", "PhonePe", "Amazon Pay", "Bank Transfer"],
  features: [
    "Wheelchair-accessible Entrance",
    "Verified Local Manufacturer",
    "Free Measurement & Estimate",
    "On-site Installation across Varanasi & Mirzapur Road",
    "Custom CAD & Traditional Design Options",
    "Grade 304 & 202 Stainless Steel Availability",
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "steel-railings",
    title: "Stainless Steel (SS) Railings",
    hindiTitle: "स्टेनलेस स्टील (SS) रेलिंग",
    shortDesc: "Premium 304/202 grade SS railings for balconies, staircases, and rooftops with glass, wire, or rod fittings.",
    fullDesc: "We manufacture custom mirror-polish and matte-finish stainless steel railings designed for long-lasting rust-free durability. From sleek modern tempered glass railings to classic ornate spindle patterns, our work elevates residential and commercial architecture.",
    features: ["Balcony Railings", "Staircase Handrails", "Glass-Steel Balustrades", "Terrace Safety Barriers", "High Mirror/Brushed Finish"],
    materials: ["SS 304 Grade (Rust Proof)", "SS 202 Grade", "Toughened Glass", "Wooden Accents"],
    icon: "ShieldCheck",
    image: "/images/gallery/photo-1.webp",
  },
  {
    id: "gates-and-grills",
    title: "Designer Gates & Security Grills",
    hindiTitle: "डिज़ाइनर गेट और सुरक्षा ग्रिल",
    shortDesc: "Heavy-duty main entrance gates, automated sliding gates, and artistic safety window grills.",
    fullDesc: "Protect your property without sacrificing curb appeal. We fabricate robust boundary gates, laser-cut CNC steel gates, collapsible gates, and intricate window grills built with thick gauge metal for maximum security.",
    features: ["Main Entrance Gates", "Sliding & Swing Gates", "Laser-Cut Sheet Gates", "Boundary Wall Grills", "Balcony Security Mesh"],
    materials: ["Wrought Iron", "Forged Steel", "Stainless Steel", "Sheet Metal with Anti-Rust Primer"],
    icon: "DoorClosed",
    image: "/images/gallery/photo-0.webp",
  },
  {
    id: "steel-windows",
    title: "Steel & Aluminium Windows",
    hindiTitle: "स्टील एवं एल्युमिनियम खिड़कियां",
    shortDesc: "Weatherproof steel and aluminium window frames with glass panels, insect screens, and ventilators.",
    fullDesc: "Engineered for durability against the weather of Eastern UP. We craft smooth sliding aluminium sections, heavy steel casement windows, and sound-dampening window fittings designed to your exact structural measurements.",
    features: ["Aluminium Sliding Windows", "Heavy Steel Casement Frames", "Ventilators & Exhaust Boxes", "Mosquito Mesh Integration"],
    materials: ["Anodized Aluminium Sections", "Powder-Coated Steel", "Clear & Frosted Glass"],
    icon: "Grid",
    image: "/images/gallery/photo-2.webp",
  },
  {
    id: "custom-fabrication",
    title: "Custom Structural & Shed Fabrication",
    hindiTitle: "कस्टम स्ट्रक्चरल व शेड फैब्रिकेशन",
    shortDesc: "Roof sheds, tin sheds, staircase structures, spiral staircases, and heavy commercial fabrications.",
    fullDesc: "Have a unique design or architectural requirement? Our Akhari workshop is equipped for precision pipe bending, arc welding, TIG/MIG welding, and structural steel truss construction for industrial sheds, car parkings, and commercial terraces.",
    features: ["Rooftop Polycarbonate / Tin Sheds", "Spiral Staircases", "Car Porch Sheds", "Mezzanine Floor Structures"],
    materials: ["MS Pipes & Angles", "GI Sheets", "Heavy Channels & Beams", "Polycarbonate Sheets"],
    icon: "Hammer",
    image: "/images/gallery/photo-3.webp",
  },
];

export const GALLERY_PHOTOS: PhotoItem[] = [
  {
    "id": "p0",
    "url": "/images/gallery/photo-0.webp",
    "category": "Railings",
    "title": "Stainless Steel Balcony Railing",
    "hindiTitle": "एसएस बालकनी रेलिंग",
    "alt": "SS 304 grade mirror-polish balcony railing fabricated at Mahadev Steel Art"
  },
  {
    "id": "p1",
    "url": "/images/gallery/photo-1.webp",
    "category": "Gates",
    "title": "Heavy Modern Entrance Main Gate",
    "hindiTitle": "मजबूत आधुनिक मेन गेट",
    "alt": "Heavy gauge 16-gauge steel main entrance gate with geometric pattern"
  },
  {
    "id": "p2",
    "url": "/images/gallery/photo-2.webp",
    "category": "Windows",
    "title": "3-Track Aluminium Sliding Window",
    "hindiTitle": "3-ट्रैक एल्युमिनियम स्लाइडिंग खिड़की",
    "alt": "Anodized aluminium 3-track sliding window with insect mesh panel"
  },
  {
    "id": "p3",
    "url": "/images/gallery/photo-3.webp",
    "category": "Fabrication",
    "title": "Structural Rooftop Polycarbonate Shed",
    "hindiTitle": "रूफटॉप पॉलीकार्बोनेट शेड",
    "alt": "Heavy MS pipe structural frame with UV-protected polycarbonate sheet"
  },
  {
    "id": "p4",
    "url": "/images/gallery/photo-4.webp",
    "category": "Workshop",
    "title": "Mahadev Steel Art Akhari Workshop Bay",
    "hindiTitle": "महादेव स्टील आर्ट मुख्य कार्यशाला",
    "alt": "Active fabrication bay with heavy welding and pipe bending stations"
  },
  {
    "id": "p5",
    "url": "/images/gallery/photo-5.webp",
    "category": "Railings",
    "title": "Curved Staircase SS Handrail",
    "hindiTitle": "घुमावदार सीढ़ी एसएस हैंडरेल",
    "alt": "Precision bent stainless steel handrail for residential staircases"
  },
  {
    "id": "p6",
    "url": "/images/gallery/photo-6.webp",
    "category": "Gates",
    "title": "CNC Laser-Cut Designer Metal Gate",
    "hindiTitle": "सीएनसी लेजर कट गेट",
    "alt": "Bespoke laser-cut steel panel gate with precision ornamental detailing"
  },
  {
    "id": "p7",
    "url": "/images/gallery/photo-7.webp",
    "category": "Windows",
    "title": "Solid Steel Security Window Grill",
    "hindiTitle": "सॉलिड स्टील खिड़की सुरक्षा ग्रिल",
    "alt": "High tensile steel bar safety grill embedded directly into masonry"
  },
  {
    "id": "p8",
    "url": "/images/gallery/photo-8.webp",
    "category": "Fabrication",
    "title": "Industrial Warehouse Tin Shed Truss",
    "hindiTitle": "वेयरहाउस टिन शेड ट्रस",
    "alt": "Precision engineered triangular steel truss for industrial warehouses"
  },
  {
    "id": "p9",
    "url": "/images/gallery/photo-9.webp",
    "category": "Workshop",
    "title": "Precision TIG Welding on SS Railing Joint",
    "hindiTitle": "एसएस रेलिंग पर टीआईजी वेल्डिंग",
    "alt": "Master fabricator executing clean TIG root weld on stainless steel"
  },
  {
    "id": "p10",
    "url": "/images/gallery/photo-10.webp",
    "category": "Railings",
    "title": "Toughened Glass Balustrade with SS Spigots",
    "hindiTitle": "टफन्ड ग्लास एवं एसएस रेलिंग",
    "alt": "Modern minimalist frameless glass balustrade with heavy SS 304 spigots"
  },
  {
    "id": "p11",
    "url": "/images/gallery/photo-11.webp",
    "category": "Gates",
    "title": "Automated Sliding Compound Gate",
    "hindiTitle": "ऑटोमैटिक स्लाइडिंग गेट",
    "alt": "Industrial sliding track gate for easy vehicular access"
  },
  {
    "id": "p12",
    "url": "/images/gallery/photo-12.webp",
    "category": "Windows",
    "title": "Modern Geometric Box Window Grill",
    "hindiTitle": "ज्यामितीय बॉक्स खिड़की ग्रिल",
    "alt": "Contemporary projecting box window grill with flower pot stand"
  },
  {
    "id": "p13",
    "url": "/images/gallery/photo-13.webp",
    "category": "Fabrication",
    "title": "Cantilever Car Parking Metal Shed",
    "hindiTitle": "कार पार्किंग कैंटिलीवर शेड",
    "alt": "Space saving cantilever steel porch shed with color coated GI sheets"
  },
  {
    "id": "p14",
    "url": "/images/gallery/photo-14.webp",
    "category": "Workshop",
    "title": "Jindal SS 304 Pipe Inventory & Raw Stock",
    "hindiTitle": "जिंदल एसएस 304 पाइप स्टॉक",
    "alt": "Genuine grade 304 stainless steel raw tubes ready for fabrication"
  },
  {
    "id": "p15",
    "url": "/images/gallery/photo-15.webp",
    "category": "Railings",
    "title": "Terrace Safety Steel Railing",
    "hindiTitle": "छत की सुरक्षा स्टील रेलिंग",
    "alt": "Weatherproof rooftop safety barrier fabricated with 304 grade steel"
  },
  {
    "id": "p16",
    "url": "/images/gallery/photo-16.webp",
    "category": "Gates",
    "title": "Double Swing Wrought Iron Gate",
    "hindiTitle": "डबल स्विंग आयरन गेट",
    "alt": "Classic double swing entrance gate with anti-corrosion primer"
  },
  {
    "id": "p17",
    "url": "/images/gallery/photo-17.webp",
    "category": "Windows",
    "title": "Powder-Coated Aluminium Casement Frame",
    "hindiTitle": "पाउडर-कोटेड एल्युमिनियम फ्रेम",
    "alt": "Weather sealed aluminium casement window frame with rubber beading"
  },
  {
    "id": "p18",
    "url": "/images/gallery/photo-18.webp",
    "category": "Fabrication",
    "title": "Commercial Mezzanine Floor Framework",
    "hindiTitle": "मेजनीन फ्लोर फ्रेमवर्क",
    "alt": "High-capacity I-beam structural steel mezzanine floor for storage"
  },
  {
    "id": "p19",
    "url": "/images/gallery/photo-19.webp",
    "category": "Workshop",
    "title": "Mirror Finish Buffing & Polishing Station",
    "hindiTitle": "मिरर फिनिश बफिंग व पॉलिशिंग",
    "alt": "Specialized high-speed buffing wheel imparting mirror gloss to steel"
  },
  {
    "id": "p20",
    "url": "/images/gallery/photo-20.webp",
    "category": "Railings",
    "title": "Spiral Staircase Custom SS Railing",
    "hindiTitle": "स्पाइरल सीढ़ी की डिज़ाइनर रेलिंग",
    "alt": "Custom crafted continuous spiral staircase stainless steel railing"
  },
  {
    "id": "p21",
    "url": "/images/gallery/photo-21.webp",
    "category": "Gates",
    "title": "Modern Minimalist Boundary Gate",
    "hindiTitle": "आधुनिक बाउंड्री गेट",
    "alt": "Contemporary horizontal slat entrance gate with privacy screening"
  },
  {
    "id": "p22",
    "url": "/images/gallery/photo-22.webp",
    "category": "Windows",
    "title": "Ventilator Metal Frame with Louvers",
    "hindiTitle": "वेंटिलेटर मेटल फ्रेम",
    "alt": "Precision fabricated bathroom and kitchen ventilator with louvers"
  },
  {
    "id": "p23",
    "url": "/images/gallery/photo-23.webp",
    "category": "Fabrication",
    "title": "Exterior Circular Spiral Staircase",
    "hindiTitle": "आउटडोर स्पाइरल मेटल सीढ़ी",
    "alt": "Compact space saving circular spiral staircase with anti-slip steel treads"
  },
  {
    "id": "p24",
    "url": "/images/gallery/photo-24.webp",
    "category": "Workshop",
    "title": "Hydraulic Pipe Bending Machine Operation",
    "hindiTitle": "हाइड्रोलिक पाइप बेंडिंग कार्य",
    "alt": "Accurate pipe bending ensuring uniform radius curves without crinkling"
  },
  {
    "id": "p25",
    "url": "/images/gallery/photo-25.webp",
    "category": "Railings",
    "title": "Modern Horizontal Bar Balcony Railing",
    "hindiTitle": "मॉडर्न हॉरिजॉन्टल बार रेलिंग",
    "alt": "Architectural horizontal bar railing with brushed satin finish"
  },
  {
    "id": "p26",
    "url": "/images/gallery/photo-26.webp",
    "category": "Gates",
    "title": "Artistic Security Compound Gate",
    "hindiTitle": "कलात्मक सुरक्षा गेट",
    "alt": "Heavy duty steel boundary gate combining robust security with curb appeal"
  },
  {
    "id": "p27",
    "url": "/images/gallery/photo-27.webp",
    "category": "Windows",
    "title": "Acoustic Double Glazed Sliding Section",
    "hindiTitle": "डबल ग्लेज्ड स्लाइडिंग सेक्शन",
    "alt": "Sound dampening heavy section aluminium sliding window"
  },
  {
    "id": "p28",
    "url": "/images/gallery/photo-28.webp",
    "category": "Fabrication",
    "title": "Custom Welded Tubular Steel Structure",
    "hindiTitle": "कस्टम ट्यूबलर स्टील ढांचा",
    "alt": "High load structural frame built with heavy gauge MS rectangular tubes"
  },
  {
    "id": "p29",
    "url": "/images/gallery/photo-29.webp",
    "category": "Workshop",
    "title": "Finished Architectural Gates at Workshop",
    "hindiTitle": "कार्यशाला में तैयार डिज़ाइनर गेट",
    "alt": "Finished gates undergoing rigorous structural and dimensional inspection"
  },
  {
    "id": "p30",
    "url": "/images/gallery/photo-30.webp",
    "category": "Railings",
    "title": "Commercial Corridor Heavy Handrail",
    "hindiTitle": "व्यावसायिक कॉरिडोर हैंडरेल",
    "alt": "Durable stainless steel grab rail system for commercial complexes"
  },
  {
    "id": "p31",
    "url": "/images/gallery/photo-31.webp",
    "category": "Gates",
    "title": "Residential Car Parking Folding Gate",
    "hindiTitle": "कार पार्किंग फोल्डिंग गेट",
    "alt": "Bi-fold space saving entrance gate for residential driveways"
  },
  {
    "id": "p32",
    "url": "/images/gallery/photo-32.webp",
    "category": "Windows",
    "title": "Decorative Wrought Iron Window Guard",
    "hindiTitle": "सजावटी आयरन विंडो गार्ड",
    "alt": "Artistic ornamental safety grill with anti-rust black coat"
  },
  {
    "id": "p33",
    "url": "/images/gallery/photo-33.webp",
    "category": "Fabrication",
    "title": "Heavy Machinery Mounting Platform",
    "hindiTitle": "हैवी मशीनरी माउंटिंग बेस",
    "alt": "Vibration resistant reinforced steel platform fabricated for machinery"
  },
  {
    "id": "p34",
    "url": "/images/gallery/photo-34.webp",
    "category": "Workshop",
    "title": "On-Site SS Railing Installation Team",
    "hindiTitle": "साइट पर एसएस रेलिंग इंस्टॉलेशन",
    "alt": "Mahadev Steel Art skilled team installing balustrades at client villa"
  },
  {
    "id": "p35",
    "url": "/images/gallery/photo-35.webp",
    "category": "Railings",
    "title": "Duplex Villa Luxury SS Railing",
    "hindiTitle": "विला लक्ज़री एसएस रेलिंग",
    "alt": "High-polish stainless steel staircase banister with wood-grain blend"
  },
  {
    "id": "p36",
    "url": "/images/gallery/photo-36.webp",
    "category": "Gates",
    "title": "Architectural Louver Gate System",
    "hindiTitle": "आर्किटेक्चरल लूवर गेट",
    "alt": "Custom angle steel louver gate ensuring optimal air flow and privacy"
  },
  {
    "id": "p37",
    "url": "/images/gallery/photo-37.webp",
    "category": "Windows",
    "title": "Balcony Full Glass & Aluminium Enclosure",
    "hindiTitle": "बालकनी ग्लास एनक्लोजर",
    "alt": "Weatherproof sliding aluminium enclosure for exterior balconies"
  },
  {
    "id": "p38",
    "url": "/images/gallery/photo-38.webp",
    "category": "Fabrication",
    "title": "Entrance Portico Canopy Framework",
    "hindiTitle": "प्रवेश द्वार कैनोपी शेड",
    "alt": "Modern architectural steel canopy framework for residential entrances"
  },
  {
    "id": "p39",
    "url": "/images/gallery/photo-39.webp",
    "category": "Workshop",
    "title": "Heavy Steel Plate Cutting & Shearing",
    "hindiTitle": "स्टील प्लेट कटिंग व शीयरिंग",
    "alt": "Heavy hydraulic shear cutting steel sheet panels to millimeter tolerance"
  },
  {
    "id": "p40",
    "url": "/images/gallery/photo-40.webp",
    "category": "Railings",
    "title": "Outdoor Weather-Shield Railing",
    "hindiTitle": "आउटडोर वेदर-शील्ड रेलिंग",
    "alt": "Rust-resistant exterior balcony railing engineered for Varanasi climate"
  },
  {
    "id": "p41",
    "url": "/images/gallery/photo-41.webp",
    "category": "Gates",
    "title": "Heavy Duty Industrial Gate",
    "hindiTitle": "इंडस्ट्रियल हैवी गेट",
    "alt": "Reinforced box section steel gate built for factories and warehouses"
  },
  {
    "id": "p42",
    "url": "/images/gallery/photo-42.webp",
    "category": "Windows",
    "title": "Stainless Steel Window Security Bars",
    "hindiTitle": "एसएस खिड़की सुरक्षा बार",
    "alt": "Rust free SS 304 polished window security grill for wet areas"
  },
  {
    "id": "p43",
    "url": "/images/gallery/photo-43.webp",
    "category": "Fabrication",
    "title": "Terrace Sunroom Steel Structure",
    "hindiTitle": "टेरेस सनरूम स्टील स्ट्रक्चर",
    "alt": "Enclosed rooftop glass and steel structural frame for extra living space"
  },
  {
    "id": "p44",
    "url": "/images/gallery/photo-44.webp",
    "category": "Workshop",
    "title": "MIG Welding on Heavy Structural Truss",
    "hindiTitle": "स्ट्रक्चरल ट्रस पर एमआईजी वेल्डिंग",
    "alt": "Continuous MIG wire welding on warehouse roof truss assembly"
  },
  {
    "id": "p45",
    "url": "/images/gallery/photo-45.webp",
    "category": "Railings",
    "title": "Precision Welded SS Balcony Frame",
    "hindiTitle": "सटीक वेल्डेड बालकनी फ्रेम",
    "alt": "Seamlessly buffed stainless steel pipe frame assembly"
  },
  {
    "id": "p46",
    "url": "/images/gallery/photo-46.webp",
    "category": "Gates",
    "title": "Decorative Forged Metal Entrance Gate",
    "hindiTitle": "सजावटी फोर्ज्ड मेटल गेट",
    "alt": "Handcrafted forged iron main gate with traditional Varanasi motifs"
  },
  {
    "id": "p47",
    "url": "/images/gallery/photo-47.webp",
    "category": "Windows",
    "title": "Custom Curved Arch Window Grill",
    "hindiTitle": "आर्च विंडो सुरक्षा ग्रिल",
    "alt": "Custom curved arch steel window grill fabricated to architectural drawing"
  },
  {
    "id": "p48",
    "url": "/images/gallery/photo-48.webp",
    "category": "Fabrication",
    "title": "Curved Pipe Archway & Pavilion Frame",
    "hindiTitle": "कर्व्ड पाइप मंडप व शेड ढांचा",
    "alt": "Hydraulically bent structural arches for garden and terrace gazebos"
  },
  {
    "id": "p49",
    "url": "/images/gallery/photo-49.webp",
    "category": "Workshop",
    "title": "Workshop Material Quality Inspection",
    "hindiTitle": "मेटल गेज व क्वालिटी परीक्षण",
    "alt": "Verifying tube wall thickness and weld integrity before site dispatch"
  },
  {
    "id": "p50",
    "url": "/images/gallery/photo-50.webp",
    "category": "Railings",
    "title": "Minimalist Architectural Steel Handrail",
    "hindiTitle": "मिनिमलिस्ट स्टील हैंडरेल",
    "alt": "Clean geometric stainless steel stair rail with concealed wall brackets"
  },
  {
    "id": "p51",
    "url": "/images/gallery/photo-51.webp",
    "category": "Gates",
    "title": "Modern Villa Entrance Double Gate",
    "hindiTitle": "विला मुख्य द्वार डबल गेट",
    "alt": "Contemporary charcoal finish steel gate with brass and steel accents"
  },
  {
    "id": "p52",
    "url": "/images/gallery/photo-52.webp",
    "category": "Windows",
    "title": "Heavy Gauge Steel Casement Window",
    "hindiTitle": "हैवी स्टील केसमेंट खिड़की",
    "alt": "Robust steel section window with brass hinges and multi-point locks"
  },
  {
    "id": "p53",
    "url": "/images/gallery/photo-53.webp",
    "category": "Fabrication",
    "title": "Industrial Pipe Rack & Cable Tray",
    "hindiTitle": "इंडस्ट्रियल पाइप रैक फ्रेम",
    "alt": "Commercial grade structural support racks for industrial piping"
  },
  {
    "id": "p54",
    "url": "/images/gallery/photo-54.webp",
    "category": "Workshop",
    "title": "Powder Coating & Anti-Rust Prep Bay",
    "hindiTitle": "एंटी-रस्ट कोटिंग तैयारी",
    "alt": "Zinc chromate primer application on freshly fabricated steel gates"
  },
  {
    "id": "p55",
    "url": "/images/gallery/photo-55.webp",
    "category": "Railings",
    "title": "Decorative SS Master Post Banister",
    "hindiTitle": "सजावटी एसएस मास्टर पिलर रेलिंग",
    "alt": "Heavy master pillar stainless steel handrail for grand entrances"
  },
  {
    "id": "p56",
    "url": "/images/gallery/photo-56.webp",
    "category": "Gates",
    "title": "Sliding Cantilever Security Gate",
    "hindiTitle": "कैंटिलीवर स्लाइडिंग गेट",
    "alt": "Trackless cantilever boundary gate with smooth heavy-duty rollers"
  },
  {
    "id": "p57",
    "url": "/images/gallery/photo-57.webp",
    "category": "Windows",
    "title": "Kitchen Ventilation Exhaust Panel",
    "hindiTitle": "किचन एग्जॉस्ट मेटल पैनल",
    "alt": "Tailor-made exhaust fan opening and safety wire mesh integration"
  },
  {
    "id": "p58",
    "url": "/images/gallery/photo-58.webp",
    "category": "Fabrication",
    "title": "Heavy Duty Steel Staircase Stringers",
    "hindiTitle": "हैवी स्टील सीढ़ी स्ट्रिंगर",
    "alt": "Double channel fabricated staircase base ready for stone tread mounting"
  },
  {
    "id": "p59",
    "url": "/images/gallery/photo-59.webp",
    "category": "Workshop",
    "title": "Custom Aluminium Section Assembly Bench",
    "hindiTitle": "एल्युमिनियम सेक्शन असेंबली बेंच",
    "alt": "Mitre cutting and corner-crimping aluminium window profiles"
  },
  {
    "id": "p60",
    "url": "/images/gallery/photo-60.webp",
    "category": "Railings",
    "title": "Heavy Gauge 304 Balcony Guardrail",
    "hindiTitle": "हैवी 304 बालकनी गार्डरेल",
    "alt": "Jindal steel pipe fabricated safety balustrade with lifetime rust warranty"
  },
  {
    "id": "p61",
    "url": "/images/gallery/photo-61.webp",
    "category": "Gates",
    "title": "Compound Wall Matching Railing & Gate",
    "hindiTitle": "कंपाउंड वॉल गेट व ग्रिल",
    "alt": "Matching exterior perimeter gate and boundary wall safety grills"
  },
  {
    "id": "p62",
    "url": "/images/gallery/photo-62.webp",
    "category": "Windows",
    "title": "Slimline Aluminium Sliding System",
    "hindiTitle": "स्लिमलाइन एल्युमिनियम स्लाइडर",
    "alt": "Narrow profile modern aluminium window maximizing natural light"
  },
  {
    "id": "p63",
    "url": "/images/gallery/photo-63.webp",
    "category": "Fabrication",
    "title": "Rooftop Water Tank Elevated Steel Staging",
    "hindiTitle": "पानी की टंकी स्टील स्टेजिंग",
    "alt": "Reinforced four-leg steel tower structure for rooftop water tanks"
  },
  {
    "id": "p64",
    "url": "/images/gallery/photo-64.webp",
    "category": "Workshop",
    "title": "Varanasi Akhari Bypass Facility Exterior",
    "hindiTitle": "अखरी बाईपास वर्कशॉप प्रवेश द्वार",
    "alt": "Workshop front at Akhari Bypass Chauraha, Chunar Road Varanasi"
  },
  {
    "id": "p65",
    "url": "/images/gallery/photo-65.webp",
    "category": "Railings",
    "title": "Glass Balustrade with Top Slotted Rail",
    "hindiTitle": "ग्लास रेलिंग स्लॉटेड पाइप",
    "alt": "Toughened glass with protective slim stainless steel top slotted handrail"
  },
  {
    "id": "p66",
    "url": "/images/gallery/photo-66.webp",
    "category": "Gates",
    "title": "Laser Cut Floral Motif Metal Gate",
    "hindiTitle": "फ्लोरल लेजर कट मेटल गेट",
    "alt": "Decorative floral motif CNC laser-cut sheet steel entrance gate"
  },
  {
    "id": "p67",
    "url": "/images/gallery/photo-67.webp",
    "category": "Windows",
    "title": "Corridor High-Security Window Grate",
    "hindiTitle": "कॉरिडोर हाई-सिक्योरिटी ग्रिल",
    "alt": "Heavy square tube safety grating for commercial corridors"
  },
  {
    "id": "p68",
    "url": "/images/gallery/photo-68.webp",
    "category": "Fabrication",
    "title": "Commercial Awning Metal Framework",
    "hindiTitle": "कमर्शियल ऑवनिंग फ्रेम",
    "alt": "Durable storefront weather awning frame with baked enamel finish"
  },
  {
    "id": "p69",
    "url": "/images/gallery/photo-69.webp",
    "category": "Workshop",
    "title": "Precision Drill Press Machining Setup",
    "hindiTitle": "प्रिसिजन ड्रिल प्रेस सेटअप",
    "alt": "Drilling exact counter-sunk mounting holes on heavy steel base plates"
  },
  {
    "id": "p70",
    "url": "/images/gallery/photo-70.webp",
    "category": "Railings",
    "title": "Multi-Tier Staircase Railing Setup",
    "hindiTitle": "मल्टी-टियर सीढ़ी रेलिंग",
    "alt": "Complete multi-storey residential staircase handrail installation"
  },
  {
    "id": "p71",
    "url": "/images/gallery/photo-71.webp",
    "category": "Gates",
    "title": "Heavy Square Bar Security Entrance Gate",
    "hindiTitle": "स्क्वायर बार सुरक्षा मेन गेट",
    "alt": "High-gauge solid square bar welded heavy security main gate"
  },
  {
    "id": "p72",
    "url": "/images/gallery/photo-72.webp",
    "category": "Windows",
    "title": "Traditional Diamond Pattern Window Grill",
    "hindiTitle": "पारंपरिक डायमंड ग्रिल",
    "alt": "Classic diamond mesh forged iron window grill with enduring durability"
  },
  {
    "id": "p73",
    "url": "/images/gallery/photo-73.webp",
    "category": "Fabrication",
    "title": "Custom Architectural Metal Screen Frame",
    "hindiTitle": "आर्किटेक्चरल मेटल स्क्रीन फ्रेम",
    "alt": "Precision welded steel frame designed for laser cut decorative facades"
  },
  {
    "id": "p74",
    "url": "/images/gallery/photo-74.webp",
    "category": "Workshop",
    "title": "Customer Dispatch & Secure Loading Area",
    "hindiTitle": "तैयार उत्पाद लोडिंग व डिलीवरी",
    "alt": "Protective wrapped railing sections loaded for delivery across Varanasi"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    author: "Rajesh Kumar Srivastava",
    source: "Google",
    rating: 5,
    text: "Very nice work done on our house staircase SS railing. Finishing is top class, welds are smooth and properly buffed. Reasonable price compared to Lanka market.",
    hindiText: "सीढ़ी की एसएस रेलिंग का काम बहुत बढ़िया किया है। फिनिशिंग बेहतरीन है और रेट भी बहुत वाजिब है।",
    date: "1 month ago",
    verified: true,
  },
  {
    id: "r2",
    author: "Anand Verma",
    source: "Verified Client",
    rating: 5,
    text: "Got our main entrance double gate and window grills fabricated here. They delivered on promised time and the steel thickness is genuinely 16 gauge as agreed.",
    hindiText: "मेन गेट और खिड़की ग्रिल बनवाया था। जो समय दिया उसी पर काम पूरा किया और मेटल गेज भी सही दिया।",
    date: "2 months ago",
    verified: true,
  },
  {
    id: "r3",
    author: "Sunil Patel",
    source: "Verified Client",
    rating: 5,
    text: "Best steel fabrication workshop near Akhari Chauraha and Chunar Road. Very polite owner and honest advice on material choice between 202 and 304.",
    hindiText: "अखरी चौराहा और चुनार रोड के पास सबसे भरोसेमंद फैब्रिकेशन शॉप। बहुत ईमानदार कारीगर हैं।",
    date: "3 months ago",
    verified: true,
  },
  {
    id: "r4",
    author: "Virendra Singh Yadav",
    source: "Verified Client",
    rating: 5,
    text: "Terrace roof shed and balcony glass railing work completed with high precision. Strong welding and professional fitting team. Highly recommended in Varanasi.",
    hindiText: "छत का शेड और बालकनी रेलिंग का काम बहुत मजबूती से किया गया। वाराणसी में सबको सिफारिश करूंगा।",
    date: "4 months ago",
    verified: true,
  },
  {
    id: "r5",
    author: "Pooja Mishra",
    source: "Google",
    rating: 5,
    text: "Prompt home visit for measurements, transparent quotation, and excellent craftsmanship on our modern balcony railing design. 5 stars well deserved!",
    hindiText: "नाप लेने के लिए तुरंत घर आए, सही रेट दिया और बहुत सुंदर डिज़ाइन बनाया। 5 स्टार वर्क!",
    date: "5 months ago",
    verified: true,
  },
];
