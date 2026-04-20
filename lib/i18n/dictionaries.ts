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
  },
  footer: {
    blurb:
      "Branding, graphic design, and website design for businesses that want a more refined, elevated, and memorable presence.",
    navigation: "Navigation",
    contact: "Contact",
  },
  common: {
    serviceLabel: "Service",
    startProject: "Start Your Project",
    sendInquiry: "Send Inquiry",
    yearLabel: "2026",
  },
  home: {
    badge: "Luxury Editorial · Branding · Websites · Graphic Design",
    eyebrow: "Creative Studio for modern businesses",
    title: "A more refined visual presence for brands that want to feel elevated",
    intro:
      "We create logos, brand identities, graphics, and websites that help businesses look polished, premium, and more memorable across every touchpoint.",
    traits: ["Elevated", "Curated", "Editorial"],
    ctaPrimary: "View Our Work",
    ctaSecondary: "Start Your Project",
    trust: [
      "Logo & Identity Systems",
      "Website Design + Build",
      "Graphic Design Assets",
      "Elevated Brand Direction",
    ],
    highlightsEyebrow: "Highlights",
    highlightsTitle: "Design and digital presence, shaped with intention",
    highlightsText:
      "We help businesses build a complete visual presence — from the logo and brand foundation to the graphics and website that bring it all together.",
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
        "Whether you need a logo, a full identity, graphic design support, or a new website, we’d love to hear what you’re building.",
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
    cta: "Let’s Work Together",
    whyUs: [
      "Elevated creative direction",
      "Branding and web under one roof",
      "Premium, modern visual language",
      "Thoughtful and collaborative process",
    ],
  },
  contactBlock: {
    eyebrow: "Start your project",
    title: "Let’s create a brand presence your business will be proud of",
    text:
      "Tell us what you need — a logo, a full brand identity, graphic design support, or a website — and we’ll help shape the right direction.",
    form: {
      name: "Your name",
      businessName: "Business name",
      email: "Email address",
      service: "Service needed",
      message: "Tell us about your project",
      success: "Your inquiry has been received.",
      sending: "Sending...",
    },
  },
  services: [
    {
      title: "Logo Design",
      description:
        "Distinctive logos created to give your business a memorable first impression and a strong visual foundation.",
      items: ["Custom concepts", "Logo variations", "Final brand files"],
      index: "01",
    },
    {
      title: "Brand Identity",
      description:
        "A cohesive visual system built through typography, color, imagery, and design direction.",
      items: ["Color palette", "Typography", "Brand guidelines"],
      index: "02",
    },
    {
      title: "Graphic Design",
      description:
        "Premium creative assets for presentations, social media, campaigns, packaging, and marketing materials.",
      items: ["Social graphics", "Presentations", "Marketing assets"],
      index: "03",
    },
    {
      title: "Website Design & Build",
      description:
        "Elegant, conversion-focused websites designed to present your brand clearly and professionally online.",
      items: ["Custom design", "Responsive build", "Contact forms"],
      index: "04",
    },
  ],
  projects: [
    {
      name: "Maison Studio",
      category: "Logo Design · Brand Identity",
      summary:
        "A refined identity system created to give the brand a polished, editorial, and premium presence.",
    },
    {
      name: "Northline Interiors",
      category: "Website Design · Development",
      summary:
        "A calm, structured website direction built to present services more elegantly and increase inquiries.",
    },
    {
      name: "Luna Beauty",
      category: "Branding · Graphic Design",
      summary:
        "A soft, elevated visual language for a beauty brand seeking more consistency and a more curated image.",
    },
    {
      name: "Atelier Bloom",
      category: "Brand Identity · Graphic Design",
      summary:
        "A boutique-inspired visual direction for a modern lifestyle brand with a warm, sophisticated tone.",
    },
    {
      name: "Harbor & Co.",
      category: "Website Design · Brand Refresh",
      summary:
        "A more elevated digital presence designed to simplify the user journey and improve visual consistency.",
    },
    {
      name: "Aster Clinic",
      category: "Branding · Website Design",
      summary:
        "A polished identity and website concept built to feel calm, credible, and premium.",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Discover",
      text: "We learn about your business, audience, goals, and aesthetic direction.",
    },
    {
      number: "02",
      title: "Design",
      text: "We develop concepts, visual systems, and layouts aligned with your brand.",
    },
    {
      number: "03",
      title: "Refine",
      text: "We review, improve, and polish the details until the work feels right.",
    },
    {
      number: "04",
      title: "Launch",
      text: "We deliver final assets or publish the website with clarity and confidence.",
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
  },
  footer: {
    blurb:
      "Branding, design graphique et création de sites web pour les entreprises qui souhaitent une présence plus raffinée, élevée et mémorable.",
    navigation: "Navigation",
    contact: "Contact",
  },
  common: {
    serviceLabel: "Service",
    startProject: "Commencer votre projet",
    sendInquiry: "Envoyer la demande",
    yearLabel: "2026",
  },
  home: {
    badge: "Éditorial luxe · Branding · Sites web · Design graphique",
    eyebrow: "Studio créatif pour entreprises modernes",
    title: "Une présence visuelle plus raffinée pour les marques qui veulent paraître haut de gamme",
    intro:
      "Nous créons des logos, identités de marque, visuels et sites web qui aident les entreprises à paraître soignées, premium et plus mémorables à chaque point de contact.",
    traits: ["Élevé", "Soigné", "Éditorial"],
    ctaPrimary: "Voir nos projets",
    ctaSecondary: "Commencer votre projet",
    trust: [
      "Systèmes logo & identité",
      "Design & création de sites",
      "Supports de design graphique",
      "Direction de marque haut de gamme",
    ],
    highlightsEyebrow: "Points forts",
    highlightsTitle: "Design et présence digitale pensés avec intention",
    highlightsText:
      "Nous aidons les entreprises à construire une présence visuelle complète — du logo et des bases de la marque aux visuels et au site web qui unifient l’ensemble.",
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
    eyebrow: "Commencez votre projet",
    title: "Créons une présence de marque dont votre entreprise sera fière",
    text:
      "Dites-nous ce dont vous avez besoin — un logo, une identité complète, un soutien en design graphique ou un site web — et nous vous aiderons à définir la bonne direction.",
    form: {
      name: "Votre nom",
      businessName: "Nom de l’entreprise",
      email: "Adresse courriel",
      service: "Service souhaité",
      message: "Parlez-nous de votre projet",
      success: "Votre demande a bien été reçue.",
      sending: "Envoi...",
    },
  },
  services: [
    {
      title: "Création de logo",
      description:
        "Des logos distinctifs conçus pour offrir à votre entreprise une première impression mémorable et une base visuelle forte.",
      items: ["Concepts sur mesure", "Variations du logo", "Fichiers finaux"],
      index: "01",
    },
    {
      title: "Identité de marque",
      description:
        "Un système visuel cohérent construit à travers la typographie, la couleur, l’image et la direction artistique.",
      items: ["Palette de couleurs", "Typographie", "Guide de marque"],
      index: "02",
    },
    {
      title: "Design graphique",
      description:
        "Des supports créatifs premium pour présentations, médias sociaux, campagnes, packaging et marketing.",
      items: ["Visuels sociaux", "Présentations", "Supports marketing"],
      index: "03",
    },
    {
      title: "Design & création de site web",
      description:
        "Des sites élégants et pensés pour la conversion, conçus pour présenter votre marque de façon claire et professionnelle en ligne.",
      items: ["Design sur mesure", "Développement responsive", "Formulaires de contact"],
      index: "04",
    },
  ],
  projects: [
    {
      name: "Maison Studio",
      category: "Création de logo · Identité de marque",
      summary:
        "Un système d’identité raffiné créé pour donner à la marque une présence soignée, éditoriale et premium.",
    },
    {
      name: "Northline Interiors",
      category: "Design de site · Développement",
      summary:
        "Une direction web calme et structurée conçue pour présenter les services avec plus d’élégance et augmenter les demandes.",
    },
    {
      name: "Luna Beauty",
      category: "Branding · Design graphique",
      summary:
        "Un langage visuel doux et haut de gamme pour une marque beauté cherchant plus de cohérence et une image plus soignée.",
    },
    {
      name: "Atelier Bloom",
      category: "Identité de marque · Design graphique",
      summary:
        "Une direction visuelle inspirée des boutiques lifestyle, avec une tonalité chaleureuse et sophistiquée.",
    },
    {
      name: "Harbor & Co.",
      category: "Design de site · Refonte de marque",
      summary:
        "Une présence digitale plus haut de gamme pensée pour simplifier le parcours utilisateur et renforcer la cohérence visuelle.",
    },
    {
      name: "Aster Clinic",
      category: "Branding · Design de site",
      summary:
        "Une identité soignée et un concept de site conçus pour inspirer calme, crédibilité et qualité.",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Découvrir",
      text: "Nous apprenons à connaître votre entreprise, votre audience, vos objectifs et votre direction esthétique.",
    },
    {
      number: "02",
      title: "Concevoir",
      text: "Nous développons des concepts, systèmes visuels et mises en page alignés avec votre marque.",
    },
    {
      number: "03",
      title: "Affiner",
      text: "Nous révisons, améliorons et peaufinons les détails jusqu’à ce que le résultat soit juste.",
    },
    {
      number: "04",
      title: "Lancer",
      text: "Nous livrons les éléments finaux ou publions le site avec clarté et confiance.",
    },
  ],
};

const dictionaries: Record<Locale, SiteDictionary> = { en, fr };

export async function getDictionary(locale: Locale): Promise<SiteDictionary> {
  return dictionaries[locale];
}
