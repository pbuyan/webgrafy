export type MarqueeLabel = {
  id: string;
  before?: string;
  em?: string;
  after?: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  items: string[];
  index: string;
};

export type ProjectItem = {
  name: string;
  category: string;
  summary: string;
  result: string;
  image: string;
  url?: string;
};

export type ProjectCategoryItem = {
  name: string;
  image: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  featured?: boolean;
};

export type ProcessItem = {
  number: string;
  title: string;
  text: string;
};

export type PackageGuidanceItem = {
  scenario: string;
  packageName: string;
};

export type PackageTierItem = {
  name: string;
  price: string;
  description: string;
  bestFor: string;
  includes: string[];
  cta: string;
  timeline?: string;
  chooseItems?: string[];
  popular?: boolean;
};

export type PackageGuaranteeItem = {
  title: string;
  text: string;
};

export type PackageAddOnItem = {
  title: string;
  price: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type IndustryItem = {
  name: string;
  description: string;
};

export type PillarItem = {
  title: string;
  text: string;
};

export type SiteDictionary = {
  meta: {
    siteName: string;
    siteDescription: string;
  };
  nav: {
    home: string;
    services: string;
    packages: string;
    portfolio: string;
    blog: string;
    about: string;
    contact: string;
    bookCall: string;
    langShort: {
      en: string;
      fr: string;
    };
  };
  footer: {
    blurb: string;
    navigation: string;
    services: string;
    resources: string;
    contact: string;
    legal: {
      privacy: string;
      terms: string;
      copyright: string;
    };
    resourcesList: string[];
  };
  common: {
    serviceLabel: string;
    yearLabel: string;
    viewAllProjects: string;
    readMore: string;
    backToBlog: string;
    exploreService: string;
    sendInquiry: string;
    replyWindow: string;
    instagram: string;
    facebook: string;
  };
  home: {
    badge: string;
    eyebrow: string;
    title: string;
    intro: string;
    traits: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    trustedBy: string;
    logoStrip: string[];
    servicesEyebrow: string;
    servicesTitle: string;
    workEyebrow: string;
    workTitle: string;
    testimonialsEyebrow: string;
    testimonialsTitle: string;
    testimonialsPrev: string;
    testimonialsNext: string;
    testimonialsDotLabel: string;
    processEyebrow: string;
    processTitle: string;
  };
  pages: {
    services: {
      eyebrow: string;
      title: string;
      text: string;
      cta: string;
      industriesEyebrow: string;
      industriesTitle: string;
      industriesText: string;
      industries: IndustryItem[];
      processEyebrow: string;
      processTitle: string;
      whyEyebrow: string;
      whyTitle: string;
      whyText: string;
      pillars: PillarItem[];
    };
    packages: {
      eyebrow: string;
      title: string;
      text: string;
      heroCtaPrimary: string;
      heroCtaSecondary: string;
      tiersHeading: string;
      bestForLabel: string;
      timelineLabel: string;
      chooseItemsLabel: string;
      popularLabel: string;
      tiers: PackageTierItem[];
      guidanceEyebrow: string;
      guidanceTitle: string;
      guidanceText: string;
      guidanceItems: PackageGuidanceItem[];
      includedHeading: string;
      includedTitle: string;
      includedText: string;
      guarantees: PackageGuaranteeItem[];
      addOnsHeading: string;
      addOnsTitle: string;
      addOnsText: string;
      addOns: PackageAddOnItem[];
      processEyebrow: string;
      processTitle: string;
      processSteps: ProcessItem[];
      ctaEyebrow: string;
      ctaTitle: string;
      ctaText: string;
      ctaPrimary: string;
      ctaSecondary: string;
      contactOverride: {
        title: string;
        text: string;
      };
    };
    portfolio: {
      eyebrow: string;
      title: string;
      text: string;
      servicesEyebrow: string;
      servicesTitle: string;
      servicesText: string;
      serviceVisuals: { name: string; caption: string; src: string }[];
    };
    about: { eyebrow: string; title: string; text: string };
    blog: {
      eyebrow: string;
      title: string;
      text: string;
      empty: string;
      ctaEyebrow: string;
      ctaTitle: string;
      ctaText: string;
      ctaButton: string;
    };
    contact: { eyebrow: string; title: string; text: string };
    faq: {
      eyebrow: string;
      title: string;
      text: string;
      faqs: FaqItem[];
    };
    privacy: {
      eyebrow: string;
      title: string;
      lastUpdated: string;
      sections: { heading: string; body: string }[];
    };
    terms: {
      eyebrow: string;
      title: string;
      lastUpdated: string;
      sections: { heading: string; body: string }[];
    };
  };
  about: {
    approachEyebrow: string;
    approachTitle: string;
    approachText: string;
    processEyebrow: string;
    processTitle: string;
    processText: string;
    cta: string;
    whyUs: string[];
  };
  contactBlock: {
    eyebrow: string;
    title: string;
    text: string;
    email: string;
    location: string;
    form: {
      name: string;
      businessName: string;
      email: string;
      service: string;
      message: string;
      success: string;
      sending: string;
    };
  };
  cookieConsent: {
    message: string;
    privacyLinkText: string;
    accept: string;
    decline: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
  errorPage: {
    eyebrow: string;
    title: string;
    text: string;
    retry: string;
    cta: string;
  };
  marqueeItems: MarqueeLabel[];
  services: ServiceItem[];
  projectsCategories: ProjectCategoryItem[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  processSteps: ProcessItem[];
};
