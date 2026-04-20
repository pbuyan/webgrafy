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
  };
  footer: {
    blurb: string;
    navigation: string;
    contact: string;
  };
  common: {
    serviceLabel: string;
    startProject: string;
    sendInquiry: string;
    yearLabel: string;
  };
  home: {
    badge: string;
    eyebrow: string;
    title: string;
    intro: string;
    traits: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
    highlightsEyebrow: string;
    highlightsTitle: string;
    highlightsText: string;
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
  services: Array<{
    title: string;
    description: string;
    items: string[];
    index: string;
  }>;
  projects: Array<{
    name: string;
    category: string;
    summary: string;
  }>;
  processSteps: Array<{
    number: string;
    title: string;
    text: string;
  }>;
};
