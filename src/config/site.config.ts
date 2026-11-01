export type StandardIcon =
  | "cooling"
  | "heating"
  | "plumbing"
  | "air-quality"
  | "electrical"
  | "maintenance";

export type ThemeStyle = "clean" | "technical" | "industrial" | "warm";

export type ThemeColors = {
  brandPrimary: string;
  brandSecondary: string;
  brandAccent: string;
  page: string;
  surfaceDark: string;
  surfaceDarkAlt: string;
  surfaceElevated: string;
  surfaceSoft: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textOnBrand: string;
  borderSubtle: string;
  borderStrong: string;
  glowPrimary: string;
  glowSecondary: string;
  networkLine: string;
  success: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  service5: string;
};

export type CoverageLocation = {
  name: string;
  kind: "city" | "county" | "community";
  lat?: number;
  lng?: number;
  hub?: boolean;
  note?: string;
  href?: string;
};

export type ContactSubmissionMode = "demo" | "endpoint";

export type SiteConfig = {

  brand: {
    name: string;
    shortName: string;
    logo: string;
    logoLight: string;
    region: string;
  };

  theme: {
    style: ThemeStyle;
    colors: ThemeColors;
  };

  header: {
    navServices: string;
    navAreas: string;
    navContact: string;
    helpLabel: string;
    ctaLabel: string;
    mobileEyebrow: string;
    mobileCallLabel: string;
  };

  opening: {
    enabled: boolean;
    /** Total screen time including the final one-sheet lift reveal. */
    durationMs: number;
    eyebrow: string;
    line1: string;
    line2: string;
    detail: string;
    location: string;
    skipLabel: string;
  };

  hero: {
    /** The Climate Chamber is the new signature, with photo-based legacy layouts retained. */
    layout: "service-craft" | "climate-chamber" | "open-door" | "picture-window" | "keepsake";
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    locationLabel: string;
    locationValue: string;
    edgeLabel: string;
    bottomStatement: string;
    sillLabel: string;
    serviceLabels: [string, string, string];
    discoverLabel: string;
    motion: {
      /** Turn off when capturing zero-animation QA screenshots or when desired for a prospect. */
      enabled: boolean;
      /** Balanced is more cinematic; gentle has the same choreography at a slower pace. */
      pace: "balanced" | "gentle";
      /** Very slight hovering of the inset media after the one-time entrance. */
      ambient: boolean;
      /** Small image-depth shift on scroll, disabled automatically for reduced motion. */
    };
    system?: {
      eyebrow: string;
      modes: [
        { id: "cool"; label: string; detail: string },
        { id: "warm"; label: string; detail: string },
        { id: "pure"; label: string; detail: string },
      ];
    };
    media: {
      primarySrc: string;
      primaryAlt: string;
      primaryPosition: string;
      /** For picture-window/keepsake only. Open-door always displays the entire image without cropping. */
      fit: "contain" | "cover";
      /** Backdrop for the alternate fixed-window layouts only. */
      backdrop: "matte" | "blur";
      aspectRatio?: string;
    };
  };

  seo: {
    title: string;
    description: string;
  };

  contact: {
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    address: string;
    contactUrl: string;
    servicesUrl: string;
  };

  brandStandard: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    bodyTitle: string;
    body: string;
    callLabel: string;
    availabilityLabel: string;
    panelEyebrow: string;
    panelTitle: string;
    panelFooter: string;
    handoff: string;
    items: Array<{
      icon: StandardIcon;
      label: string;
      detail: string;
    }>;
  };

  services: {
    eyebrow: string;
    introLine1: string;
    introLine2: string;
    summaryEyebrow: string;
    summaryTitle: string;
    summaryBody: string;
    summaryCta: string;
    items: [
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
      ServiceConfig,
    ];
  };

  coverage: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    featuredLocation: string;
    locationDetail: string;
    ctaLabel: string;
    networkLabel: string;
    regionLabel: string;
    metrics: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    locations: CoverageLocation[];
  };

  contactSection: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    submissionMode: ContactSubmissionMode;
    formEndpoint: string;
    successMessage: string;
  };
};

export type ServiceConfig = {
  name: string;
  shortName: string;
  image: string;
  description?: string;
};

export const siteConfig: SiteConfig = {

  brand: {
    name: "Smith Heating & Air Conditioning",
    shortName: "Smith",
    logo: "/brand/smith-original-logo.png",
    logoLight: "/brand/smith-original-logo.png",
    region: "Prattville · River Region",

  },

  theme: {
    style: "clean",
    colors: {"brandPrimary": "#2365A1", "brandSecondary": "#E54937", "brandAccent": "#78B5D6", "page": "#101A26", "surfaceDark": "#07131F", "surfaceDarkAlt": "#132538", "surfaceElevated": "#1C3449", "surfaceSoft": "#F4F7F8", "textPrimary": "#F7FAFC", "textSecondary": "#D8E1E7", "textMuted": "#95A5AF", "textOnBrand": "#FFFFFF", "borderSubtle": "#2B4150", "borderStrong": "#657B86", "glowPrimary": "#2365A1", "glowSecondary": "#E54937", "networkLine": "#78B5D6", "success": "#70A982", "service1": "#2365A1", "service2": "#78B5D6", "service3": "#E54937", "service4": "#F1A83B", "service5": "#6983BB"},

  },

  header: {
    navServices: "Services",
    navAreas: "Service areas",
    navContact: "Contact",
    helpLabel: "Call 334-365-9226",
    ctaLabel: "Request service",
    mobileEyebrow: "PRATTVILLE · MILLBROOK · DEATSVILLE",
    mobileCallLabel: "Call now"
  },

  opening: {
    enabled: false,
    durationMs: 1400,
    eyebrow: "PRATTVILLE · MILLBROOK · DEATSVILLE",
    line1: "Smith",
    line2: "Local comfort.",
    detail: "Family-owned HVAC service in Prattville, Millbrook, and Deatsville, with heating, cooling, maintenance, heat pumps, mini-splits, ductwork, and gas furnaces.",
    location: "Family owned · founded in 1993",
    skipLabel: "Skip intro"
  },

  hero: {
    layout: "service-craft",
    eyebrow: "PRATTVILLE · MILLBROOK · DEATSVILLE · LOCAL HVAC",
    headlineLine1: "Treat you like",
    headlineLine2: "we’d want to be.",
    description: "Heating, cooling, and maintenance from a Prattville family business founded in 1993.",
    primaryCta: "Request service",
    secondaryCta: "Call Smith",
    locationLabel: "PRATTVILLE · MILLBROOK · DEATSVILLE",
    locationValue: "Prattville · River Region",
    edgeLabel: "PRATTVILLE · MILLBROOK · DEATSVILLE",
    bottomStatement: "HEATING · COOLING · MAINTENANCE · DUCTWORK",
    sillLabel: "Family owned · founded in 1993",
    serviceLabels: ["Cooling", "Heating", "Maintenance"],
    discoverLabel: "Explore services",
    motion: {
      enabled: true,
      pace: "gentle",
      ambient: false
    },
    system: {
      eyebrow: "LOCAL COMFORT / IN MOTION",
      modes: [
        {
          id: "cool",
          label: "Cooling",
          detail: "A considered path from warm intake to balanced, conditioned air."
        },
        {
          id: "warm",
          label: "Heating",
          detail: "Steady circulation, carefully controlled for colder days."
        },
        {
          id: "pure",
          label: "Air quality",
          detail: "A focus on filtration and the air moving through every room."
        }
      ]
    },
    media: {"primarySrc": "/hero/smith-family-hero.png", "primaryAlt": "Family enjoying time together at home in the image supplied for Smith Heating & Air’s hero", "primaryPosition": "center 40%", "fit": "cover", "backdrop": "matte", "aspectRatio": "1600 / 1067"},

  },

  seo: {
    title: "Smith Heating & Air Conditioning | HVAC Service in Prattville",
    description: "Family-owned HVAC service in Prattville, Millbrook, and Deatsville, with heating, cooling, maintenance, heat pumps, mini-splits, ductwork, and gas furnaces.",

  },

  contact: {
    phoneDisplay: "334-365-9226",
    phoneHref: "tel:+13343659226",
    email: "",
    address: "2059 Co Rd 57, Prattville, AL 36067",
    contactUrl: "#contact",
    servicesUrl: "#services",

  },

  brandStandard: {
    eyebrow: "Family owned · founded in 1993",
    titleLine1: "Comfort, handled locally.",
    titleLine2: "Service built around your home.",
    bodyTitle: "Family owned · founded in 1993",
    body: "Smith Heating & Air Conditioning is a family-owned HVAC business founded in 1993. The company offers heating and cooling, maintenance, heat pumps, mini-splits, duct installation, and gas furnace service.",
    callLabel: "Call now",
    availabilityLabel: "Prattville · River Region",
    panelEyebrow: "SMITH HEATING & AIR CONDITIONING",
    panelTitle: "Smith Heating & Air Conditioning is a family-owned HVAC business founded in 1993. The company offers heating and cooling, maintenance, heat pumps, mini-splits, duct installation, and gas furnace service.",
    panelFooter: "Prattville · River Region",
    handoff: "Explore Smith Heating & Air Conditioning services.",
    items: [{"icon": "cooling", "label": "Air conditioning", "detail": "Cooling system installation, repair, and maintenance."}, {"icon": "heating", "label": "Heating", "detail": "Heating installation and repair for homes and businesses."}, {"icon": "maintenance", "label": "Maintenance programs", "detail": "Planned maintenance to support efficient equipment operation."}],

  },

  services: {
    eyebrow: "SMITH HEATING & AIR CONDITIONING · SERVICES",
    introLine1: "Comfort,",
    introLine2: "done right.",
    summaryEyebrow: "PRATTVILLE · MILLBROOK · DEATSVILLE",
    summaryTitle: "Smith Heating & Air Conditioning is a family-owned HVAC business founded in 1993. The company offers heating and cooling, maintenance, heat pumps, mini-splits, duct installation, and gas furnace service.",
    summaryBody: "Smith Heating & Air Conditioning is a family-owned HVAC business founded in 1993. The company offers heating and cooling, maintenance, heat pumps, mini-splits, duct installation, and gas furnace service.",
    summaryCta: "Talk to the team",
    items: [{"name": "Air conditioning", "shortName": "Cooling", "image": "/services/01.svg", "description": "Cooling system installation, repair, and maintenance."}, {"name": "Heating", "shortName": "Heating", "image": "/services/02.svg", "description": "Heating installation and repair for homes and businesses."}, {"name": "Maintenance programs", "shortName": "Maintenance", "image": "/services/03.svg", "description": "Planned maintenance to support efficient equipment operation."}, {"name": "Heat pumps & mini-splits", "shortName": "Heat pumps", "image": "/services/04.svg", "description": "Heat pump and ductless mini-split options."}, {"name": "Ducts & gas furnaces", "shortName": "Ductwork", "image": "/services/05.svg", "description": "Duct installation and gas furnace support."}],

  },

  coverage: {
    eyebrow: "LOCAL SERVICE AREA",
    titleLine1: "Comfort close",
    titleLine2: "to home.",
    description: "Prattville · River Region",
    featuredLocation: "Prattville, AL",
    locationDetail: "Serving Prattville · River Region.",
    ctaLabel: "Contact the team",
    networkLabel: "LOCAL SERVICE NETWORK",
    regionLabel: "Prattville · River Region",
    metrics: [{"value": "3 communities", "label": "Coverage shown"}, {"value": "Family-owned · since 1993", "label": "Service commitment"}, {"value": "Local team", "label": "Prattville · River Region"}],
    locations: [{"name": "Prattville, AL", "kind": "city", "lat": 32.464, "lng": -86.4597, "hub": true}, {"name": "Millbrook, AL", "kind": "city", "lat": 32.4799, "lng": -86.3619, "hub": false}, {"name": "Deatsville, AL", "kind": "city", "lat": 32.6085, "lng": -86.3958, "hub": false}],

  },

  contactSection: {
    eyebrow: "LET’S TALK COMFORT",
    titleLine1: "Tell us what",
    titleLine2: "you need.",
    body: "Contact Smith Heating & Air Conditioning about heating, cooling, or service for your home or business.",
    primaryCta: "Request service",
    secondaryCta: "Call Smith",
    submissionMode: "demo",
    formEndpoint: "",
    successMessage: "Thanks for reaching out. This concept form is a preview and is not connected yet; call 334-365-9226 to contact Smith Heating & Air Conditioning.",

  }
};
