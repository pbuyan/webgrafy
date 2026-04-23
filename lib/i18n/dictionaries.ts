import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";

const en: SiteDictionary = {
  meta: {
    siteName: "Webgrafy",
    siteDescription:
      "Branding, graphic design, and website design for businesses that want a refined, elevated, and memorable presence.",
  },
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    bookCall: "Book a Call",
    langShort: { en: "EN", fr: "FR" },
  },
  footer: {
    blurb:
      "We help ambitious brands look better, communicate clearly, and grow with confidence.",
    navigation: "Navigation",
    services: "Services",
    resources: "Resources",
    contact: "Let's talk",
    legal: {
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      copyright: "© 2026 Webgrafy. All rights reserved.",
    },
    resourcesList: ["Case Studies", "Process", "FAQs", "Blog"],
  },
  common: {
    serviceLabel: "Service",
    yearLabel: "2026",
    viewAllProjects: "View all projects",
    exploreService: "Explore service",
    sendInquiry: "Send Message",
    replyWindow: "We typically reply within 24 hours.",
    instagram: "Instagram",
    behance: "Behance",
    linkedin: "LinkedIn",
  },
  home: {
    badge: "Branding & Web Design Agency",
    eyebrow: "Creative studio for modern businesses",
    title: "A more refined visual presence for brands that want to feel elevated.",
    intro:
      "We craft thoughtful brand identities, impactful graphics, and modern websites that help ambitious businesses stand out and grow with confidence.",
    traits: ["Elevated", "Curated", "Editorial"],
    ctaPrimary: "Book a Call",
    ctaSecondary: "View our work",
    trustedBy: "Trusted by ambitious brands",
    logoStrip: ["Lunar Wellness", "Voyage Hotels", "Maison Solé", "Caveau", "Nordik Studio", "Sahara Skin"],
    servicesEyebrow: "What we do",
    servicesTitle: "Strategic design. Beautifully executed.",
    workEyebrow: "Selected work",
    workTitle: "Design that drives real results.",
    testimonialsEyebrow: "Kind words from clients",
    testimonialsTitle: "Trusted by brands that value thoughtful design.",
    processEyebrow: "Our process",
    processTitle: "A collaborative process, built around you.",
  },
  pages: {
    services: {
      eyebrow: "Services",
      title: "Creative services that shape a complete and elevated brand presence",
      text:
        "From logo design to full website creation, our services are designed to help businesses look more polished, consistent, and credible across every touchpoint.",
      cta: "Ask About a Project",
    },
    work: {
      eyebrow: "Work",
      title: "Selected projects shaped with a premium editorial point of view",
      text:
        "A curated collection of branding, graphic design, and website projects created to help businesses feel more refined, more consistent, and more memorable.",
    },
    about: {
      eyebrow: "About",
      title: "A creative studio focused on refined branding and modern digital presence",
      text:
        "We help businesses express their value through thoughtful visuals, cohesive brand systems, and websites designed to feel polished, clear, and elevated.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us about your brand, website, or creative project",
      text:
        "Whether you need a logo, a full identity, graphic design support, or a new website, we'd love to hear what you're building.",
    },
  },
  about: {
    approachEyebrow: "Our approach",
    approachTitle: "A premium visual language with a thoughtful process behind it",
    approachText:
      "We combine refined creative direction with practical business thinking so every project feels intentional, contemporary, and aligned with the image our clients want to build.",
    processEyebrow: "Process",
    processTitle: "Clear, collaborative, and curated from start to finish",
    processText:
      "Every project follows a structured path so the result feels polished, cohesive, and aligned with your brand goals.",
    cta: "Let's Work Together",
    whyUs: [
      "Elevated creative direction",
      "Branding and web under one roof",
      "Premium, modern visual language",
      "Thoughtful and collaborative process",
    ],
  },
  contactBlock: {
    eyebrow: "Let's work together",
    title: "Ready to elevate your brand presence?",
    text:
      "Tell us about your project and let's create something exceptional together.",
    phone: "+1 (514) 555-0198",
    email: "hello@webgrafy.co",
    location: "Montreal, QC, Canada",
    form: {
      name: "Full name",
      businessName: "Company name",
      email: "Email address",
      service: "What do you need help with?",
      message: "Tell us about your project",
      success: "Your inquiry has been received.",
      sending: "Sending...",
    },
  },
  services: [
    {
      title: "Brand Identity",
      description:
        "Distinctive logos and complete brand systems that capture your essence and resonate.",
      items: ["Logo systems", "Brand direction", "Guidelines"],
      index: "01",
    },
    {
      title: "Graphic Design",
      description:
        "Print and digital assets that communicate clearly and elevate your brand presence.",
      items: ["Campaign visuals", "Social media", "Presentation design"],
      index: "02",
    },
    {
      title: "Web Design",
      description:
        "Modern, responsive websites built for performance, clarity and conversion.",
      items: ["UX-driven layouts", "Responsive pages", "Conversion focus"],
      index: "03",
    },
    {
      title: "Webflow Development",
      description:
        "Clean, scalable builds that are fast, secure and easy to manage.",
      items: ["CMS setup", "Performance", "Easy updates"],
      index: "04",
    },
  ],
  projects: [
    {
      name: "Nordik Studio",
      category: "Branding, Web Design",
      summary:
        "A complete rebrand and website that positioned Nordik as a premium design studio.",
      result: "68% increase in website inquiries",
      image: "/images/project-nordik.jpg",
    },
    {
      name: "Maison Solé",
      category: "Branding, Packaging",
      summary:
        "Brand identity and packaging that elevated the brand and strengthened shelf presence.",
      result: "45% increase in retail sales",
      image: "/images/project-maison.jpg",
    },
    {
      name: "Lunar Wellness",
      category: "Web Design, Webflow",
      summary:
        "A calming, conversion-focused website that supports growth and builds trust.",
      result: "52% increase in bookings",
      image: "/images/project-lunar.jpg",
    },
  ],
  testimonials: [
    {
      quote:
        "Webgrafy understood our vision from day one. The brand and website they delivered exceeded our expectations and our customers love it.",
      name: "Camille D.",
      role: "Founder, Maison Solé",
      avatar: "/images/avatar-camille.jpg",
    },
    {
      quote:
        "Professional, creative and reliable. They turned our ideas into a brand that truly reflects who we are.",
      name: "Alexandre T.",
      role: "Co-founder, Nordik Studio",
      avatar: "/images/avatar-alexandre.jpg",
    },
    {
      quote:
        "The new website is fast, beautiful and so easy to manage. Our inquiries have grown significantly.",
      name: "Sofia R.",
      role: "Marketing Director, Lunar Wellness",
      avatar: "/images/avatar-sofia.jpg",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Discover",
      text: "We learn about your goals, audience and challenges.",
    },
    {
      number: "02",
      title: "Strategize",
      text: "We define the right direction and create a clear plan.",
    },
    {
      number: "03",
      title: "Design",
      text: "We craft visuals and experiences that communicate and convert.",
    },
    {
      number: "04",
      title: "Deliver",
      text: "We build, test and launch with care and precision.",
    },
  ],
};

const fr: SiteDictionary = {
  meta: {
    siteName: "Webgrafy",
    siteDescription:
      "Branding, design graphique et création de sites web pour les entreprises qui souhaitent une présence raffinée, élevée et mémorable.",
  },
  nav: {
    home: "Accueil",
    services: "Services",
    work: "Projets",
    about: "À propos",
    contact: "Contact",
    bookCall: "Prendre rendez-vous",
    langShort: { en: "EN", fr: "FR" },
  },
  footer: {
    blurb:
      "Nous aidons les marques ambitieuses à mieux paraître, mieux communiquer et à grandir avec confiance.",
    navigation: "Navigation",
    services: "Services",
    resources: "Ressources",
    contact: "Parlons-en",
    legal: {
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
      copyright: "© 2026 Webgrafy. Tous droits réservés.",
    },
    resourcesList: ["Études de cas", "Processus", "FAQ", "Blog"],
  },
  common: {
    serviceLabel: "Service",
    yearLabel: "2026",
    viewAllProjects: "Voir tous les projets",
    exploreService: "Découvrir le service",
    sendInquiry: "Envoyer",
    replyWindow: "Nous répondons généralement sous 24 heures.",
    instagram: "Instagram",
    behance: "Behance",
    linkedin: "LinkedIn",
  },
  home: {
    badge: "Agence de branding & web design",
    eyebrow: "Studio créatif pour entreprises modernes",
    title: "Une présence visuelle plus raffinée pour les marques qui veulent paraître haut de gamme.",
    intro:
      "Nous créons des identités de marque réfléchies, des visuels percutants et des sites modernes qui aident les entreprises ambitieuses à se démarquer et à grandir avec confiance.",
    traits: ["Élevé", "Soigné", "Éditorial"],
    ctaPrimary: "Prendre rendez-vous",
    ctaSecondary: "Voir nos projets",
    trustedBy: "Approuvé par des marques ambitieuses",
    logoStrip: ["Lunar Wellness", "Voyage Hotels", "Maison Solé", "Caveau", "Nordik Studio", "Sahara Skin"],
    servicesEyebrow: "Ce que nous faisons",
    servicesTitle: "Un design stratégique. Une exécution remarquable.",
    workEyebrow: "Projets sélectionnés",
    workTitle: "Un design qui génère de vrais résultats.",
    testimonialsEyebrow: "Mots de nos clients",
    testimonialsTitle: "Choisi par des marques qui valorisent un design réfléchi.",
    processEyebrow: "Notre processus",
    processTitle: "Un processus collaboratif, construit autour de vous.",
  },
  pages: {
    services: {
      eyebrow: "Services",
      title: "Des services créatifs qui façonnent une présence de marque complète et haut de gamme",
      text:
        "Du logo à la création complète du site web, nos services sont conçus pour aider les entreprises à paraître plus soignées, cohérentes et crédibles sur tous les points de contact.",
      cta: "Parler de votre projet",
    },
    work: {
      eyebrow: "Projets",
      title: "Une sélection de projets façonnés avec une direction éditoriale premium",
      text:
        "Une collection soignée de projets de branding, design graphique et sites web créés pour aider les entreprises à paraître plus raffinées, cohérentes et mémorables.",
    },
    about: {
      eyebrow: "À propos",
      title: "Un studio créatif axé sur le branding raffiné et la présence digitale moderne",
      text:
        "Nous aidons les entreprises à exprimer leur valeur grâce à des visuels réfléchis, des systèmes de marque cohérents et des sites web conçus pour être soignés, clairs et haut de gamme.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlez-nous de votre marque, site web ou projet créatif",
      text:
        "Que vous ayez besoin d’un logo, d’une identité complète, d’un soutien en design graphique ou d’un nouveau site web, nous serions ravis de découvrir votre projet.",
    },
  },
  about: {
    approachEyebrow: "Notre approche",
    approachTitle: "Un langage visuel premium soutenu par un processus réfléchi",
    approachText:
      "Nous combinons une direction créative raffinée à une réflexion business concrète pour que chaque projet paraisse intentionnel, contemporain et aligné avec l’image que nos clients souhaitent construire.",
    processEyebrow: "Processus",
    processTitle: "Clair, collaboratif et soigné du début à la fin",
    processText:
      "Chaque projet suit une structure précise afin que le résultat soit soigné, cohérent et aligné avec vos objectifs de marque.",
    cta: "Travaillons ensemble",
    whyUs: [
      "Direction créative haut de gamme",
      "Branding et web réunis",
      "Langage visuel premium et moderne",
      "Processus réfléchi et collaboratif",
    ],
  },
  contactBlock: {
    eyebrow: "Travaillons ensemble",
    title: "Prêt à élever la présence de votre marque ?",
    text:
      "Parlez-nous de votre projet et créons ensemble quelque chose d’exceptionnel.",
    phone: "+1 (514) 555-0198",
    email: "hello@webgrafy.co",
    location: "Montréal, QC, Canada",
    form: {
      name: "Nom complet",
      businessName: "Nom de l’entreprise",
      email: "Adresse courriel",
      service: "De quoi avez-vous besoin ?",
      message: "Parlez-nous de votre projet",
      success: "Votre demande a bien été reçue.",
      sending: "Envoi...",
    },
  },
  services: [
    {
      title: "Identité de marque",
      description:
        "Des logos distinctifs et des systèmes de marque complets qui captent votre essence et la rendent mémorable.",
      items: ["Systèmes de logo", "Direction de marque", "Guide de marque"],
      index: "01",
    },
    {
      title: "Design graphique",
      description:
        "Des supports imprimés et digitaux qui communiquent clairement et valorisent votre marque.",
      items: ["Visuels de campagne", "Réseaux sociaux", "Présentations"],
      index: "02",
    },
    {
      title: "Web design",
      description:
        "Des sites modernes et responsives pensés pour la performance, la clarté et la conversion.",
      items: ["Mises en page UX", "Pages responsives", "Focus conversion"],
      index: "03",
    },
    {
      title: "Développement Webflow",
      description:
        "Des sites propres et évolutifs, rapides, sécurisés et faciles à gérer.",
      items: ["CMS", "Performance", "Mises à jour faciles"],
      index: "04",
    },
  ],
  projects: [
    {
      name: "Nordik Studio",
      category: "Branding, Web design",
      summary:
        "Une refonte complète de la marque et du site qui a positionné Nordik comme un studio de design premium.",
      result: "68 % d’augmentation des demandes via le site",
      image: "/images/project-nordik.jpg",
    },
    {
      name: "Maison Solé",
      category: "Branding, Packaging",
      summary:
        "Une identité et un packaging qui ont élevé la marque et renforcé sa présence en rayon.",
      result: "45 % d’augmentation des ventes en retail",
      image: "/images/project-maison.jpg",
    },
    {
      name: "Lunar Wellness",
      category: "Web design, Webflow",
      summary:
        "Un site apaisant et pensé pour la conversion, qui soutient la croissance et inspire confiance.",
      result: "52 % d’augmentation des réservations",
      image: "/images/project-lunar.jpg",
    },
  ],
  testimonials: [
    {
      quote:
        "Webgrafy a compris notre vision dès le premier jour. La marque et le site livrés ont dépassé nos attentes et nos clients les adorent.",
      name: "Camille D.",
      role: "Fondatrice, Maison Solé",
      avatar: "/images/avatar-camille.jpg",
    },
    {
      quote:
        "Professionnels, créatifs et fiables. Ils ont transformé nos idées en une marque qui reflète vraiment qui nous sommes.",
      name: "Alexandre T.",
      role: "Co-fondateur, Nordik Studio",
      avatar: "/images/avatar-alexandre.jpg",
    },
    {
      quote:
        "Le nouveau site est rapide, magnifique et si facile à gérer. Nos demandes ont nettement augmenté.",
      name: "Sofia R.",
      role: "Directrice marketing, Lunar Wellness",
      avatar: "/images/avatar-sofia.jpg",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Découverte",
      text: "Nous apprenons à connaître vos objectifs, votre audience et vos enjeux.",
    },
    {
      number: "02",
      title: "Stratégie",
      text: "Nous définissons la bonne direction et construisons un plan clair.",
    },
    {
      number: "03",
      title: "Design",
      text: "Nous créons des visuels et expériences qui communiquent et convertissent.",
    },
    {
      number: "04",
      title: "Livraison",
      text: "Nous développons, testons et lançons avec soin et précision.",
    },
  ],
};

const dictionaries: Record<Locale, SiteDictionary> = { en, fr };

export async function getDictionary(locale: Locale): Promise<SiteDictionary> {
  return dictionaries[locale];
}
