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
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export type ProcessItem = {
  number: string;
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
    work: string;
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
    exploreService: string;
    sendInquiry: string;
    replyWindow: string;
    instagram: string;
    behance: string;
    linkedin: string;
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
    processEyebrow: string;
    processTitle: string;
  };
  pages: {
    services: { eyebrow: string; title: string; text: string; cta: string };
    work: { eyebrow: string; title: string; text: string };
    about: { eyebrow: string; title: string; text: string };
    contact: { eyebrow: string; title: string; text: string };
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
    phone: string;
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
  services: ServiceItem[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  processSteps: ProcessItem[];
};
