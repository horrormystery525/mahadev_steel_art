export type Language = "en" | "hi";

export interface Translations {
  nav: {
    capabilities: string;
    lookbook: string;
    atelier: string;
    reviews: string;
    contact: string;
    workshopStatus: string;
    callFabricator: string;
    whatsapp: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    tagline: string;
    description: string;
    callNow: string;
    whatsappQuote: string;
    statRating: string;
    statRatingDesc: string;
    statMaterial: string;
    statMaterialDesc: string;
    statLocation: string;
    statLocationDesc: string;
    statMeasure: string;
    statMeasureDesc: string;
    tabRailings: string;
    tabGates: string;
    tabWindows: string;
    tabFabrication: string;
    liveBadge: string;
    specimenBadge: string;
    requestRate: string;
    guarantee1: string;
    guarantee2: string;
    guarantee3: string;
    guarantee4: string;
    hoursPill: string;
  };
  marquee: {
    eyebrow: string;
    items: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    titleSub: string;
    desc: string;
    configLabel: string;
    alloyLabel: string;
    inquireBtn: string;
    certifiedGrade: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    titleSub: string;
    desc: string;
    filterAll: string;
    filterRailings: string;
    filterGates: string;
    filterWindows: string;
    filterFabrication: string;
    filterWorkshop: string;
    loadMore: string;
    allLoaded: string;
    inquireBtn: string;
    archiveBadge: string;
    modalLocation: string;
    modalQuoteBtn: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleSub: string;
    quoteNote: string;
    narrative: string;
    workshopTag: string;
    facilityTitle: string;
    facilityDesc: string;
    visitDirections: string;
    hours: string;
    pillars: Array<{ num: string; title: string; desc: string }>;
  };
  reviews: {
    eyebrow: string;
    title: string;
    titleSub: string;
    aggregateScore: string;
    aggregateText: string;
    verifiedClient: string;
    verifiedReviewsBtn: string;
    whatsappInquiryBtn: string;
    googleMapsBtn: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    titleSub: string;
    desc: string;
    channelsTitle: string;
    addressTitle: string;
    landmark: string;
    phoneTitle: string;
    whatsappTitle: string;
    hoursTitle: string;
    hoursValue: string;
    openMapsBtn: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    reqLabel: string;
    locationLabel: string;
    locationPlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    submitAnother: string;
  };
  footer: {
    tagline: string;
    capabilitiesTitle: string;
    portfolioLink: string;
    atelierTitle: string;
    directTitle: string;
    areasTitle: string;
    areasList: string;
    copyright: string;
    subCopyright: string;
  };
  mobileCta: {
    call: string;
    whatsapp: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      capabilities: "Capabilities",
      lookbook: "Lookbook",
      atelier: "The Atelier",
      reviews: "Reviews",
      contact: "Contact & Location",
      workshopStatus: "Workshop Open 9AM–8PM",
      callFabricator: "Call Fabricator",
      whatsapp: "WhatsApp",
    },
    hero: {
      eyebrow: "Akhari Bypass Atelier • Varanasi, UP",
      titleLine1: "Handcrafted Steel.",
      titleLine2: "Built for Architectural Permanence.",
      tagline: "The Strength of Steel, The Beauty of Handcrafted Art",
      description:
        "Mahadev Steel Art is Varanasi's trusted stainless steel and metal fabrication workshop at Akhari Bypass. Specializing in high-grade SS 304 railings, sculptural entrance gates, safety window grills, and custom structural steel engineered with millimeter precision.",
      callNow: "Call Fabricator: +91 9619360717",
      whatsappQuote: "WhatsApp Direct Quote",
      statRating: "5.0 Star Rated",
      statRatingDesc: "395+ verified client reviews",
      statMaterial: "Grade 304 Certified",
      statMaterialDesc: "Guaranteed rust-proof metal",
      statLocation: "Akhari Bypass Studio",
      statLocationDesc: "Chunar Road, Varanasi",
      statMeasure: "Free Measurement",
      statMeasureDesc: "On-site visit across Varanasi",
      tabRailings: "SS 304 Railings",
      tabGates: "Designer Gates & Grills",
      tabWindows: "Windows & Aluminium",
      tabFabrication: "Custom Fabrication",
      liveBadge: "Active Atelier Fabrication",
      specimenBadge: "Akhari Workshop Specimen",
      requestRate: "Request Rate on WhatsApp",
      guarantee1: "SS 304 Rust-Proof Guarantee",
      guarantee2: "Seamless Multi-Stage Buffing",
      guarantee3: "16-Gauge Wall Thickness Verifiable",
      guarantee4: "Free On-Site Measurement",
      hoursPill: "Open 7 Days • 9:00 AM – 8:00 PM",
    },
    marquee: {
      eyebrow: "Trusted by Homeowners, Builders & Architects Across Varanasi",
      items: [
        "SS 304 Rust-Proof Certified",
        "5.0 ★ Rated (395+ Reviews)",
        "CNC Laser-Cut Steel Gates",
        "Toughened Architectural Glass",
        "Seamless TIG Buffed Finishes",
        "Akhari Bypass Workshop, Varanasi",
        "Heavy 16-Gauge Wall Tolerances",
        "Free On-Site Site Measurement",
      ],
    },
    services: {
      eyebrow: "01 / Architectural Capabilities",
      title: "Curated Metalwork &",
      titleSub: "Structural Craftsmanship.",
      desc: "Every piece is custom fabricated with precision seam welding, multi-stage rotary buffing, and certified rust-proof stainless steel for Varanasi's luxury homes and commercial spaces.",
      configLabel: "Fabrication Configurations:",
      alloyLabel: "Alloy & Material Standard:",
      inquireBtn: "Inquire Specifications & Pricing",
      certifiedGrade: "Certified Grade",
    },
    gallery: {
      eyebrow: "02 / Lookbook & Workshop Archive",
      title: "Selected Works &",
      titleSub: "Architectural Installations.",
      desc: "Explore authentic photographs of stainless steel balustrades, CNC laser gates, and structural fabrications completed at our Akhari Bypass atelier.",
      filterAll: "All",
      filterRailings: "Railings",
      filterGates: "Gates",
      filterWindows: "Windows",
      filterFabrication: "Fabrication",
      filterWorkshop: "Workshop",
      loadMore: "Load More Projects",
      allLoaded: "All 75+ Workshop Projects Displayed",
      inquireBtn: "Request WhatsApp Quote for this Design",
      archiveBadge: "Workshop Archive",
      modalLocation: "Akhari Bypass Workshop, Varanasi",
      modalQuoteBtn: "Request Rate on WhatsApp",
    },
    about: {
      eyebrow: "03 / The Atelier Philosophy",
      title: "Material Honesty &",
      titleSub: "Handcrafted Precision.",
      quoteNote:
        "— For us, steel is not merely industrial raw material. It is an architectural commitment to strength, proportion, and generational durability.",
      narrative:
        "Located conveniently off the Akhari Bypass on Chunar Road, Varanasi, Mahadev Steel Art combines traditional metalworking discipline with modern architectural geometry. We work closely with homeowners, architects, and civil contractors across Eastern UP to deliver handrails, gates, and bespoke steel fabrications that age gracefully.",
      workshopTag: "Akhari Bypass Studio • Varanasi",
      facilityTitle: "Mahadev Steel Art Atelier",
      facilityDesc: "Verified Local Manufacturing & Architectural Fabrication Facility",
      visitDirections: "Visit Akhari Workshop Directions",
      hours: "Open 7 Days • 9:00 AM – 8:00 PM",
      pillars: [
        {
          num: "01",
          title: "Austenitic Grade 304 & 202 Alloys",
          desc: "We exclusively source certified stainless steel with verifiable nickel-chromium composition for rust-free outdoor longevity.",
        },
        {
          num: "02",
          title: "Strict Gauge Transparency",
          desc: "Zero compromises on pipe wall thickness. What is specified in your estimate (16 or 18 gauge) is precisely what is fabricated in the workshop.",
        },
        {
          num: "03",
          title: "Seamless Weld Buffing",
          desc: "Every joint undergoes multi-stage abrasives and rotary buffing to achieve an immaculate mirror or satin hairline finish with no visible weld bead.",
        },
        {
          num: "04",
          title: "Direct Workshop Consultation",
          desc: "Inspect raw pipe samples, glass brackets, and finish swatches in person at our Akhari Bypass facility.",
        },
      ],
    },
    reviews: {
      eyebrow: "04 / Reputation & Verified Client Trust",
      title: "Validated by",
      titleSub: "Discerning Homeowners.",
      aggregateScore: "5.0",
      aggregateText: "395+ verified client reviews across Varanasi",
      verifiedClient: "Verified Client • Varanasi",
      verifiedReviewsBtn: "395+ Verified Client Reviews (5.0★)",
      whatsappInquiryBtn: "Direct WhatsApp Architectural Desk",
      googleMapsBtn: "Google Maps Verified Studio",
    },
    contact: {
      eyebrow: "05 / Consultation & Location",
      title: "Initiate a Project or",
      titleSub: "Schedule a Workshop Visit.",
      desc: "Our fabrication atelier is situated on the Akhari Bypass on Chunar Road. We welcome clients, contractors, and architects for material inspections, pipe gauge verification, and on-site measurements across Varanasi.",
      channelsTitle: "Atelier Location & Direct Channels",
      addressTitle: "Workshop & Atelier Address",
      landmark: "Landmark: Near Akhari Bypass Chauraha, Chunar Road",
      phoneTitle: "Direct Line with Fabricator",
      whatsappTitle: "WhatsApp Architectural Desk",
      hoursTitle: "Operating Schedule",
      hoursValue: "Monday to Sunday: 9:00 AM – 8:00 PM (Open All 7 Days)",
      openMapsBtn: "Open in Google Maps",
      formTitle: "Request Free Measurement",
      formSubtitle: "Receive site consultation and per-square-foot estimate via WhatsApp",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. Alok Upadhyay",
      phoneLabel: "Phone Number *",
      phonePlaceholder: "e.g. +91 9839XXXXXX",
      reqLabel: "Project Requirement *",
      locationLabel: "Project Location in Varanasi",
      locationPlaceholder: "e.g. Susuwahi, Lanka, Akhari, Cantt",
      notesLabel: "Architectural Notes / Approximate Dimensions",
      notesPlaceholder: "e.g. 40 running feet balcony railing in SS 304 with toughened glass",
      submitBtn: "Send Estimate Request on WhatsApp",
      successTitle: "Inquiry Dispatched",
      successDesc: "WhatsApp opened with your specifications. The fabrication engineer will respond with drawings and estimate.",
      submitAnother: "Submit another inquiry",
    },
    footer: {
      tagline: "Bespoke stainless steel railings, sculptural entrance gates, and structural steel fabrications engineered at Akhari Bypass, Varanasi.",
      capabilitiesTitle: "Capabilities",
      portfolioLink: "Portfolio & Installations (76+ Photos)",
      atelierTitle: "Atelier & Hours",
      directTitle: "Direct Contact",
      areasTitle: "Areas Served Across Greater Varanasi:",
      areasList: "Akhari Bypass • Chunar Road • Bhikharipur Kala • Lanka • Susuwahi • BHU Varanasi • DLW / BLW • Dafi Bypass • Ramnagar • Rohania • Mohan Serai • Sigra • Cantt Varanasi • Mirzapur Highway",
      copyright: "© 2026 Mahadev Steel Art. Engineered with precision in Varanasi.",
      subCopyright: "SS Railings • Gates • Grills • Structural Fabrication",
    },
    mobileCta: {
      call: "Call Fabricator",
      whatsapp: "WhatsApp",
    },
  },
  hi: {
    nav: {
      capabilities: "क्षमताएं व कार्य",
      lookbook: "फोटो गैलरी",
      atelier: "वर्कशॉप परिचय",
      reviews: "समीक्षाएं",
      contact: "संपर्क व लोकेशन",
      workshopStatus: "वर्कशॉप खुला है 9AM–8PM",
      callFabricator: "कारीगर से बात करें",
      whatsapp: "व्हाट्सएप",
    },
    hero: {
      eyebrow: "अखरी बाईपास वर्कशॉप • वाराणसी, उ.प्र.",
      titleLine1: "हस्तनिर्मित स्टील शिल्पकारी।",
      titleLine2: "पीढ़ियों तक चलने वाली बेमिसाल मजबूती।",
      tagline: "स्टील की मजबूती, कला की खूबसूरती",
      description:
        "महादेव स्टील आर्ट वाराणसी के अखरी बाईपास पर स्थित एक भरोसेमंद स्टील एवं मेटल फैब्रिकेशन कार्यशाला है। हम उच्च गुणवत्ता वाले एसएस 304 रेलिंग, आधुनिक डिजाइनर गेट, सुरक्षा ग्रिल और मजबूत स्ट्रक्चरल फैब्रिकेशन तैयार करते हैं।",
      callNow: "फोन करें: +91 9619360717",
      whatsappQuote: "व्हाट्सएप पर तुरंत रेट पूछें",
      statRating: "5.0 स्टार रेटिंग",
      statRatingDesc: "395+ संतुष्ट ग्राहकों की रेटिंग",
      statMaterial: "ग्रेड 304 प्रमाणित",
      statMaterialDesc: "जंग-मुक्त स्टील की गारंटी",
      statLocation: "अखरी बाईपास वर्कशॉप",
      statLocationDesc: "चुनार रोड, वाराणसी",
      statMeasure: "मुफ्त नाप व विज़िट",
      statMeasureDesc: "वाराणसी में घर पर नाप की सुविधा",
      tabRailings: "एसएस 304 रेलिंग",
      tabGates: "डिज़ाइनर गेट व ग्रिल",
      tabWindows: "खिड़की व एल्युमिनियम",
      tabFabrication: "कस्टम फैब्रिकेशन",
      liveBadge: "वर्कशॉप में काम चालू है",
      specimenBadge: "अखरी वर्कशॉप का नमूना",
      requestRate: "व्हाट्सएप पर रेट प्राप्त करें",
      guarantee1: "एसएस 304 जंग-मुक्त गारंटी",
      guarantee2: "स्मूथ एवं चमकदार वेल्ड बफिंग",
      guarantee3: "16 गेज भारी मेटल की गारंटी",
      guarantee4: "घर पर मुफ्त साइट मेज़रमेंट",
      hoursPill: "सातों दिन खुला • सुबह 9:00 से रात 8:00 तक",
    },
    marquee: {
      eyebrow: "वाराणसी के गृह स्वामियों, ठेकेदारों और वास्तुकारों का भरोसेमंद नाम",
      items: [
        "एसएस 304 जंग-मुक्त प्रमाणित स्टील",
        "5.0 ★ रेटिंग (395+ समीक्षाएं)",
        "सीएनसी लेज़र कटिंग स्टील गेट",
        "टफन्ड ग्लास रेलिंग फिटिंग",
        "सीमलेस टीआईजी वेल्डिंग व बफिंग",
        "अखरी बाईपास वर्कशॉप, वाराणसी",
        "सच्चा 16-गेज भारी मेटल पाइप",
        "घर पर मुफ्त नाप एवं एस्टीमेट",
      ],
    },
    services: {
      eyebrow: "01 / हमारी प्रमुख सेवाएं",
      title: "सटीक मेटलवर्क एवं",
      titleSub: "मजबूत स्ट्रक्चरल फैब्रिकेशन।",
      desc: "हर रेलिंग, गेट और ग्रिल को उच्च ग्रेड के प्रमाणित स्टेनलेस स्टील, सटीक वेल्डिंग और मिरर फिनिश बफिंग के साथ तैयार किया जाता है।",
      configLabel: "उपलब्ध डिज़ाइन्स:",
      alloyLabel: "मेटल एवं सामग्री:",
      inquireBtn: "विस्तार व रेट की जानकारी लें",
      certifiedGrade: "प्रमाणित ग्रेड",
    },
    gallery: {
      eyebrow: "02 / हमारे द्वारा किए गए कार्य",
      title: "वास्तविक तस्वीरें एवं",
      titleSub: "साइट पर फिटिंग के नमूने।",
      desc: "अखरी बाईपास वर्कशॉप में तैयार की गई एसएस रेलिंग, मेन गेट और ग्रिल की वास्तविक तस्वीरें देखें।",
      filterAll: "सभी",
      filterRailings: "रेलिंग",
      filterGates: "गेट",
      filterWindows: "खिड़कियां",
      filterFabrication: "फैब्रिकेशन",
      filterWorkshop: "वर्कशॉप",
      loadMore: "और प्रोजेक्ट्स लोड करें",
      allLoaded: "सभी 75+ वर्कशॉप प्रोजेक्ट्स प्रदर्शित हैं",
      inquireBtn: "इस डिज़ाइन के लिए व्हाट्सएप पर कोटेशन मांगें",
      archiveBadge: "वर्कशॉप आर्काइव",
      modalLocation: "अखरी बाईपास वर्कशॉप, वाराणसी",
      modalQuoteBtn: "व्हाट्सएप पर इस डिज़ाइन का रेट पूछें",
    },
    about: {
      eyebrow: "03 / हमारी कार्यशैली व ईमानदारी",
      title: "सामग्री की शुद्धता एवं",
      titleSub: "कारीगरी का बेजोड़ हुनर।",
      quoteNote:
        "— हमारे लिए स्टील सिर्फ धातु नहीं, शिल्पकारी और भरोसे की पहचान है। हर काम मजबूती और सुंदरता के साथ बनाया जाता है।",
      narrative:
        "अखरी बाईपास, चुनार रोड पर स्थित महादेव स्टील आर्ट आधुनिक डिज़ाइन और पारंपरिक मजबूती का संगम है। हम वाराणसी, लंका, बीएचयू, रोहनिया और आसपास के क्षेत्रों में हर ग्राहक को उनकी पसंद के अनुसार मजबूत और सुंदर स्टील कार्य प्रदान करते हैं।",
      workshopTag: "अखरी बाईपास वर्कशॉप • वाराणसी",
      facilityTitle: "महादेव स्टील आर्ट वर्कशॉप",
      facilityDesc: "वाराणसी का प्रमाणित स्टील एवं एल्युमिनियम फैब्रिकेशन केंद्र",
      visitDirections: "वर्कशॉप का गूगल मैप रास्ता देखें",
      hours: "सातों दिन खुला • सुबह 9:00 से रात 8:00 बजे तक",
      pillars: [
        {
          num: "01",
          title: "असली एसएस 304 एवं 202 ग्रेड",
          desc: "हम केवल प्रमाणित स्टेनलेस स्टील का उपयोग करते हैं जो धूप और बारिश में भी कभी जंग नहीं खाता।",
        },
        {
          num: "02",
          title: "गेज व मोटाई में 100% पारदर्शिता",
          desc: "पाइप की दीवार की मोटाई (16 या 18 गेज) में कोई समझौता नहीं। जो तय होगा, वही लगाया जाएगा।",
        },
        {
          num: "03",
          title: "स्मूथ एवं सीमलेस वेल्डिंग बफिंग",
          desc: "हर जोड़ पर बहुस्तरीय बफिंग की जाती है जिससे शीशे जैसी चमक (मिरर पॉलिश) मिलती है।",
        },
        {
          num: "04",
          title: "सीधे वर्कशॉप पर आकर परखें",
          desc: "आप अखरी बाईपास स्थित हमारी दुकान पर आकर पाइप की मोटाई और सैंपल खुद जांच सकते हैं।",
        },
      ],
    },
    reviews: {
      eyebrow: "04 / ग्राहकों का अटूट भरोसा",
      title: "सैकड़ों संतुष्ट ग्राहकों द्वारा",
      titleSub: "सत्यापित 5-स्टार रेटिंग।",
      aggregateScore: "5.0",
      aggregateText: "वाराणसी में 395+ संतुष्ट ग्राहकों द्वारा 5-स्टार प्रमाणित",
      verifiedClient: "सत्यापित ग्राहक • वाराणसी",
      verifiedReviewsBtn: "395+ सत्यापित ग्राहक रेटिंग्स (5.0★)",
      whatsappInquiryBtn: "सीधा व्हाट्सएप आर्किटेक्चरल परामर्श",
      googleMapsBtn: "गूगल मैप्स प्रमाणित वर्कशॉप",
    },
    contact: {
      eyebrow: "05 / संपर्क एवं विज़िट",
      title: "नया काम शुरू करवाएं या",
      titleSub: "वर्कशॉप पर मिलने पधारें।",
      desc: "हमारी वर्कशॉप चुनार रोड पर अखरी बाईपास के पास स्थित है। आप कभी भी आकर मेटल सैंपल देख सकते हैं या घर पर नाप के लिए बुला सकते हैं।",
      channelsTitle: "दुकान का पता व संपर्क सूत्र",
      addressTitle: "वर्कशॉप का पूरा पता",
      landmark: "लैंडमार्क: अखरी बाईपास चौराहा, चुनार रोड",
      phoneTitle: "कारीगर का सीधा मोबाइल नंबर",
      whatsappTitle: "व्हाट्सएप इंक्वायरी डेस्क",
      hoursTitle: "दुकान खुलने का समय",
      hoursValue: "सोमवार से रविवार: सुबह 9:00 से रात 8:00 बजे तक (सातों दिन खुला)",
      openMapsBtn: "गूगल मैप्स पर खोलें",
      formTitle: "घर पर मुफ्त नाप का अनुरोध भेजें",
      formSubtitle: "व्हाट्सएप पर तुरंत प्रति वर्ग फुट का एस्टीमेट और नाप का समय तय करें",
      nameLabel: "आपका नाम *",
      namePlaceholder: "जैसे: आलोक उपाध्याय",
      phoneLabel: "मोबाइल नंबर *",
      phonePlaceholder: "जैसे: +91 9839XXXXXX",
      reqLabel: "काम का प्रकार *",
      locationLabel: "वाराणसी में आपका इलाका",
      locationPlaceholder: "जैसे: सुसुवाही, लंका, अखरी, कैंट, रोहनिया",
      notesLabel: "अनुमानित साइज या कोई विशेष डिज़ाइन",
      notesPlaceholder: "जैसे: 40 रनिंग फीट बालकनी रेलिंग एसएस 304 टफन्ड ग्लास के साथ",
      submitBtn: "व्हाट्सएप पर एस्टीमेट अनुरोध भेजें",
      successTitle: "अनुरोध भेज दिया गया है",
      successDesc: "व्हाट्सएप खुल गया है। हमारे फैब्रिकेशन कारीगर तुरंत आपको डिज़ाइन और रेट भेजेंगे।",
      submitAnother: "एक और अनुरोध भेजें",
    },
    footer: {
      tagline: "स्टेनलेस स्टील रेलिंग, आधुनिक प्रवेश द्वार, खिड़की ग्रिल और शेड निर्माण। अखरी बाईपास, वाराणसी।",
      capabilitiesTitle: "हमारी सेवाएं",
      portfolioLink: "कार्य के फोटो (76+ तस्वीरें)",
      atelierTitle: "वर्कशॉप एवं समय",
      directTitle: "सीधा संपर्क",
      areasTitle: "वाराणसी के सभी क्षेत्रों में सेवाएं उपलब्ध:",
      areasList: "अखरी बाईपास • चुनार रोड • भिखारीपुर कला • लंका • सुसुवाही • बीएचयू वाराणसी • डीएलडब्ल्यू / बीएलडब्ल्यू • डाफी बाईपास • रामनगर • रोहनिया • मोहन सराय • सिगरा • कैंट वाराणसी • मिर्जापुर हाईवे",
      copyright: "© 2026 महादेव स्टील आर्ट। वाराणसी में गुणवत्ता और मजबूती की पहचान।",
      subCopyright: "एसएस रेलिंग • गेट • ग्रिल • शेड व फैब्रिकेशन कार्य",
    },
    mobileCta: {
      call: "फोन करें",
      whatsapp: "व्हाट्सएप",
    },
  },
};
