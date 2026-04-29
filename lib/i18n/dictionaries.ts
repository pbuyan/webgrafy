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
    packages: "Packages",
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
    packages: {
      eyebrow: "Packages",
      title: "Startup-friendly bundles for logo, branding, and full identity",
      text:
        "Choose a clear starting point for your business identity. Each package is structured to deliver professional files and revisions so you know exactly what you're getting.",
      tiersHeading: "Create your business startup packages",
      getStarted: "Get started",
      popularLabel: "Most popular",
      tiers: [
        {
          name: "Logo",
          price: "$200",
          description: "A polished mark to launch your brand with confidence.",
          includes: [
            "4 logo concepts",
            "3 revisions",
            "Professional logo artwork files",
            "Full colour, grayscale, and black & white versions",
          ],
        },
        {
          name: "Branding",
          price: "$500",
          description: "A cohesive identity system across logo, print and stationery.",
          popular: true,
          includes: [
            "Logo",
            "Business card, letterhead, and envelope",
            "2 initial stationery concepts",
            "3 stationery revisions",
            "Professional print-ready artwork files",
          ],
        },
        {
          name: "Corporate identity",
          price: "From $1500",
          description: "A complete identity, social presence and website — start to finish.",
          includes: ["Logo", "Branding", "Social media design", "Website design"],
        },
      ],
      includedHeading: "Every package",
      includedTitle: "What's always included",
      includedText:
        "Every Webgrafy package is delivered with the same standard of care, the same hands-on direction, and the same commitment to a final result you'll be proud to share.",
      guarantees: [
        {
          title: "Hands-on creative direction",
          text: "You work directly with the designers leading your project — no account managers, no hand-offs.",
        },
        {
          title: "Print and digital-ready files",
          text: "All deliverables are exported in the formats you need for web, print and partners.",
        },
        {
          title: "Full ownership of the work",
          text: "Once delivered, every asset is yours to use, evolve and license without restriction.",
        },
        {
          title: "A clear, structured timeline",
          text: "Each project follows a defined schedule with checkpoints so you always know what's next.",
        },
      ],
      addOnsHeading: "Add-ons",
      addOnsTitle: "Tailor your package to your needs",
      addOnsText:
        "Need something more specific? Layer in extra deliverables to extend any package and shape it around your business.",
      addOns: [
        {
          title: "Extra revision round",
          price: "+$120",
          description: "An additional cycle of refinements on logo or stationery deliverables.",
        },
        {
          title: "Social media templates",
          price: "+$280",
          description: "A set of editable templates for posts, stories and reels in your brand system.",
        },
        {
          title: "Brand guidelines document",
          price: "+$450",
          description: "A polished PDF guide covering logo usage, typography, colour and tone.",
        },
        {
          title: "Additional website page",
          price: "+$300",
          description: "A custom-designed page added to your website scope, on-brand and responsive.",
        },
      ],
      faqHeading: "FAQ",
      faqTitle: "Common questions about our packages",
      faqs: [
        {
          question: "How long does each package take?",
          answer:
            "Logo packages are delivered in around 2 weeks, Branding in 3 to 4 weeks, and Corporate identity in 6 to 8 weeks depending on scope.",
        },
        {
          question: "What happens after I choose a package?",
          answer:
            "We start with a short discovery call to align on goals, then send a written proposal, a project schedule and an initial invoice (50%) before kickoff.",
        },
        {
          question: "Can I customise a package?",
          answer:
            "Yes — packages are a starting point. We regularly tailor scope and deliverables to fit your business, and add-ons can be combined with any tier.",
        },
        {
          question: "Do I own the final files?",
          answer:
            "Absolutely. Once the project is paid in full, you own every final asset and source file we deliver.",
        },
        {
          question: "How do payments work?",
          answer:
            "We invoice 50% to begin and 50% at delivery. For larger scopes we can break payments into project milestones.",
        },
      ],
      customHeading: "Custom scope",
      customTitle: "Need something larger or more bespoke?",
      customText:
        "If your project doesn't fit a standard package — multi-brand systems, ongoing design partnerships, complex websites — we'd love to design a custom proposal with you.",
      customCta: "Request a custom quote",
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
        "Webgrafy is a Montréal-based design practice working at the intersection of identity, print and the web. We were founded in 2018 to do one thing well — help small and mid-sized businesses look like the companies they intend to become — and we've kept the team small so we can keep doing it.",
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
  marqueeItems: [
    { id: "logos", before: "Logos ", em: "& marks" },
    { id: "brand-systems", before: "Brand systems" },
    { id: "packaging", em: "Packaging" },
    { id: "websites", before: "Websites" },
    { id: "editorial", em: "Editorial", after: " print" },
    { id: "signage", before: "Signage" },
    { id: "book-covers", before: "Book covers" },
  ],
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
    packages: "Forfaits",
    work: "Projets",
    about: "À propos",
    contact: "Contactez-nous",
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
    packages: {
      eyebrow: "Forfaits",
      title: "Des ensembles pensés pour le logo, l’image de marque et l’identité complète",
      text:
        "Choisissez un point de départ clair pour l’identité de votre entreprise. Chaque forfait est structuré pour livrer des fichiers professionnels et des révisions, avec des livrables clairement définis.",
      tiersHeading: "Créez vos forfaits de démarrage pour entreprise",
      getStarted: "Commencer",
      popularLabel: "Le plus populaire",
      tiers: [
        {
          name: "Logo",
          price: "200 $",
          description: "Une marque soignée pour lancer votre entreprise avec confiance.",
          includes: [
            "4 concepts de logo",
            "3 révisions",
            "Fichiers de logo professionnels",
            "Versions couleur complète, niveaux de gris et noir et blanc",
          ],
        },
        {
          name: "Image de marque",
          price: "500 $",
          description: "Un système d’identité cohérent — logo, papeterie et impression.",
          popular: true,
          includes: [
            "Logo",
            "Carte d’affaires, en-tête de lettre et enveloppe",
            "2 concepts initiaux de papeterie",
            "3 révisions de papeterie",
            "Fichiers prêts à imprimer",
          ],
        },
        {
          name: "Identité corporative",
          price: "À partir de 1500 $",
          description: "Une identité complète, présence sociale et site web — de A à Z.",
          includes: ["Logo", "Image de marque", "Design pour médias sociaux", "Design de site web"],
        },
      ],
      includedHeading: "Tous les forfaits",
      includedTitle: "Ce qui est toujours inclus",
      includedText:
        "Chaque forfait Webgrafy bénéficie du même soin, de la même direction créative impliquée et du même engagement envers un résultat dont vous serez fier.",
      guarantees: [
        {
          title: "Direction créative impliquée",
          text: "Vous échangez directement avec les designers qui pilotent votre projet — sans intermédiaire.",
        },
        {
          title: "Fichiers prêts pour le print et le digital",
          text: "Tous les livrables sont exportés dans les formats nécessaires pour le web, l’impression et vos partenaires.",
        },
        {
          title: "Pleine propriété des livrables",
          text: "Une fois livrés, tous les fichiers vous appartiennent et peuvent être utilisés sans restriction.",
        },
        {
          title: "Un calendrier clair et structuré",
          text: "Chaque projet suit un calendrier défini avec des points de validation à chaque étape.",
        },
      ],
      addOnsHeading: "Options",
      addOnsTitle: "Adaptez votre forfait à vos besoins",
      addOnsText:
        "Besoin de quelque chose de plus précis ? Ajoutez des livrables complémentaires pour étendre n’importe quel forfait selon votre activité.",
      addOns: [
        {
          title: "Tour de révisions supplémentaire",
          price: "+120 $",
          description: "Un cycle additionnel d’ajustements sur les livrables logo ou papeterie.",
        },
        {
          title: "Modèles pour réseaux sociaux",
          price: "+280 $",
          description: "Un ensemble de modèles éditables pour publications, stories et reels, dans votre identité.",
        },
        {
          title: "Guide de marque",
          price: "+450 $",
          description: "Un PDF complet couvrant l’usage du logo, la typographie, les couleurs et le ton.",
        },
        {
          title: "Page de site additionnelle",
          price: "+300 $",
          description: "Une page personnalisée ajoutée à votre projet web, fidèle à votre marque et responsive.",
        },
      ],
      faqHeading: "FAQ",
      faqTitle: "Questions fréquentes sur nos forfaits",
      faqs: [
        {
          question: "Combien de temps prend chaque forfait ?",
          answer:
            "Le forfait Logo est livré en environ 2 semaines, Image de marque en 3 à 4 semaines, et Identité corporative en 6 à 8 semaines selon le périmètre.",
        },
        {
          question: "Que se passe-t-il après avoir choisi un forfait ?",
          answer:
            "Nous commençons par un appel de découverte, puis nous envoyons une proposition écrite, un calendrier et une première facture (50 %) avant le démarrage.",
        },
        {
          question: "Puis-je personnaliser un forfait ?",
          answer:
            "Oui — les forfaits sont un point de départ. Nous adaptons régulièrement le périmètre et les options peuvent être ajoutées à tout niveau.",
        },
        {
          question: "Suis-je propriétaire des fichiers finaux ?",
          answer:
            "Absolument. Une fois le projet réglé en totalité, vous êtes propriétaire de tous les livrables et fichiers sources.",
        },
        {
          question: "Comment fonctionnent les paiements ?",
          answer:
            "Nous facturons 50 % au démarrage et 50 % à la livraison. Pour les projets plus larges, nous pouvons échelonner par jalons.",
        },
      ],
      customHeading: "Sur mesure",
      customTitle: "Besoin de quelque chose de plus large ou sur mesure ?",
      customText:
        "Si votre projet ne correspond pas à un forfait standard — systèmes multi-marques, partenariats design continus, sites complexes — nous serions ravis de bâtir une proposition sur mesure avec vous.",
      customCta: "Demander un devis sur mesure",
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
        "Webgrafy est un studio de design basé à Montréal travaillant à l'intersection de l'identité, du print et du web. Nous avons été fondés en 2018 pour faire une chose bien — aider les petites et moyennes entreprises à paraître comme les entreprises qu'elles souhaitent devenir — et nous avons gardé l'équipe petite pour pouvoir continuer à le faire.",
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
  marqueeItems: [
    { id: "logos", before: "Logos ", em: "& marques" },
    { id: "brand-systems", before: "Systèmes de marque" },
    { id: "packaging", em: "Emballage" },
    { id: "websites", before: "Sites web" },
    { id: "editorial", em: "Éditorial", after: " print" },
    { id: "signage", before: "Signalétique" },
    { id: "book-covers", before: "Couvertures de livres" },
  ],
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
