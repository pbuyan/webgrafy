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
    portfolio: "Portfolio",
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
    resourcesList: ["Case Studies", "Process", "FAQs"],
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
      title: "Everything your business needs to look professional and grow",
      text:
        "At Webgrafy, we help small and medium businesses look professional, attract more customers, and grow both online and offline. From websites and branding to social media graphics, printed marketing materials, packaging, and local SEO, we create everything your business needs to build a strong and consistent presence.",
      cta: "Ask About a Project",
      industriesEyebrow: "Who we work with",
      industriesTitle: "Trusted by ambitious small and medium businesses",
      industriesText:
        "We partner with founders and marketing teams across Montréal and beyond — from main-street businesses building their first identity to established companies refreshing how they show up online.",
      industries: [
        {
          name: "Restaurants & cafés",
          description:
            "Menus, signage, and digital presence that match the experience guests have at the table.",
        },
        {
          name: "Retail & boutiques",
          description:
            "Packaging, in-store materials, and websites that turn first-time visitors into loyal customers.",
        },
        {
          name: "Wellness & beauty",
          description:
            "Calm, premium identities and booking-ready websites for studios, spas, and clinics.",
        },
        {
          name: "Professional services",
          description:
            "Refined branding and clear websites for accountants, lawyers, consultants, and agencies.",
        },
        {
          name: "Real estate & hospitality",
          description:
            "Editorial-quality identities, brochures, and listings that elevate every touchpoint.",
        },
        {
          name: "Nonprofits & associations",
          description:
            "Approachable, accessible communication that strengthens trust with members and donors.",
        },
      ],
      processEyebrow: "How we work",
      processTitle: "A clear path from first conversation to launch",
      whyEyebrow: "Why Webgrafy",
      whyTitle: "Design partners, not just suppliers",
      whyText:
        "We've kept our team small on purpose so every project gets senior attention. You work directly with the people creating your brand — no layers, no surprises.",
      pillars: [
        {
          title: "Bilingual by default",
          text: "We design and build in English and French — natural for Québec audiences and ready for growth across Canada.",
        },
        {
          title: "Strategy before pixels",
          text: "Every engagement starts with understanding your customers, your market, and the outcomes that actually move your business.",
        },
        {
          title: "Print and digital under one roof",
          text: "From a business card to a multi-page website, your visual system stays cohesive across every channel.",
        },
        {
          title: "Built to grow with you",
          text: "We hand off organized files, templates, and guidelines so your team can keep producing on-brand without us.",
        },
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Common questions about our services",
      faqs: [
        {
          question: "Do I have to commit to a full project, or can I start small?",
          answer:
            "You can start with a single deliverable — a logo, a one-page site, a flyer — and add scope later. Many clients begin with one piece and expand once they see how we work.",
        },
        {
          question: "Can you work with my existing brand?",
          answer:
            "Yes. We regularly extend or refresh existing brands, design new collateral within established guidelines, or build a website on top of an identity you already love.",
        },
        {
          question: "Do you offer ongoing design support?",
          answer:
            "We do. After a launch, many clients keep us on a monthly retainer for new campaigns, social content, additional pages, and print runs as they grow.",
        },
        {
          question: "Are your websites bilingual?",
          answer:
            "Yes — we design and build in English, French, or both, with proper locale routing, SEO, and editable content for each language.",
        },
        {
          question: "Will my website be easy to update myself?",
          answer:
            "We build on platforms you can manage day-to-day — Webflow, WordPress, or a headless CMS — and we always include a short training session so your team is comfortable from launch day.",
        },
        {
          question: "How much does a project cost?",
          answer:
            "Logos start at $200, complete branding from $500, and websites typically range from $2,500 to $12,000 depending on scope. We send a detailed estimate after our discovery call.",
        },
      ],
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
    portfolio: {
      eyebrow: "Portfolio",
      title: "Selected projects shaped with a premium editorial point of view",
      text:
        "A curated collection of branding, graphic design, and website projects created to help businesses feel more refined, more consistent, and more memorable.",
      servicesEyebrow: "What we craft",
      servicesTitle: "Visual systems built across every surface your business shows up on",
      servicesText:
        "From a refined logo to packaging that earns shelf space, every deliverable is designed to feel cohesive — and to look at home wherever your customers find you.",
      serviceVisuals: [
        {
          name: "Logos & marks",
          caption:
            "Distinctive monograms, wordmarks, and lockups crafted around how you sound, not just how you look.",
        },
        {
          name: "Stationery & branding",
          caption:
            "Cards, letterheads, and brand collateral that turn an identity into a daily, repeatable experience.",
        },
        {
          name: "Websites",
          caption:
            "Editorial, conversion-minded sites built bilingually and ready to grow with your business.",
        },
        {
          name: "Packaging & labels",
          caption:
            "Considered packaging, labels, and product systems engineered to perform on the shelf.",
        },
        {
          name: "Editorial & print",
          caption:
            "Brochures, lookbooks, and printed pieces that carry the tone of your brand into the physical world.",
        },
        {
          name: "Social & digital",
          caption:
            "Templates and content systems that keep every post on-brand without slowing your team down.",
        },
      ],
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
    privacy: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 1, 2026",
      sections: [
        {
          heading: "Information We Collect",
          body: "We collect information you provide directly to us through our contact form, including your name, company name, email address, and project details. We do not collect any information automatically beyond standard server logs.",
        },
        {
          heading: "How We Use Your Information",
          body: "We use the information you submit solely to respond to your inquiry and to provide the design services you request. We do not sell, rent, or share your personal information with third parties for marketing purposes.",
        },
        {
          heading: "Data Retention",
          body: "We retain your contact information for as long as necessary to fulfill your project and for a reasonable period thereafter for record-keeping purposes. You may request deletion of your data at any time by contacting us.",
        },
        {
          heading: "Cookies",
          body: "This website does not use tracking cookies or third-party analytics. No personally identifiable information is collected through cookies.",
        },
        {
          heading: "Your Rights",
          body: "Under applicable Canadian privacy law (PIPEDA), you have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us at hello@webgrafy.co.",
        },
        {
          heading: "Contact",
          body: "If you have questions about this policy, please reach out to us at hello@webgrafy.co or by mail at Webgrafy, Montréal, QC, Canada.",
        },
      ],
    },
    terms: {
      eyebrow: "Legal",
      title: "Terms & Conditions",
      lastUpdated: "Last updated: January 1, 2026",
      sections: [
        {
          heading: "Services",
          body: "Webgrafy provides branding, graphic design, and web design services to clients on a project basis. The specific scope, deliverables, timeline, and fees for each project are defined in a written proposal or agreement signed by both parties.",
        },
        {
          heading: "Payment",
          body: "Projects require a deposit before work begins, with the remaining balance due upon completion or as outlined in the project agreement. Late payments may incur a monthly service charge.",
        },
        {
          heading: "Intellectual Property",
          body: "Upon receipt of full payment, Webgrafy transfers ownership of final approved deliverables to the client. Webgrafy retains the right to display the work in its portfolio. All working files, source assets, and design systems remain the property of Webgrafy unless explicitly included in the project agreement.",
        },
        {
          heading: "Revisions",
          body: "Each project includes a defined number of revision rounds as outlined in the proposal. Requests beyond the included revisions will be quoted separately and require written approval.",
        },
        {
          heading: "Limitation of Liability",
          body: "Webgrafy's liability is limited to the amount paid for the specific project. We are not liable for any indirect, incidental, or consequential damages arising from the use of our deliverables.",
        },
        {
          heading: "Governing Law",
          body: "These terms are governed by the laws of the Province of Québec and the federal laws of Canada applicable therein.",
        },
      ],
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
      title: "Digital Services",
      description:
        "Build your online presence and reach more customers with websites and digital marketing tailored to your business.",
      items: [
        "Websites",
        "E-commerce",
        "SEO",
        "Google Business Profile",
        "Social media design",
        "Digital ads",
        "Email marketing",
        "Content",
      ],
      index: "01",
    },
    {
      title: "Print Services",
      description:
        "High-quality printed materials that give your business a professional presence in person, on the shelf, and in your community.",
      items: [
        "Business cards",
        "Flyers & brochures",
        "Menus",
        "Packaging",
        "Labels",
        "Gift certificates",
        "Event materials",
        "Banners & signage",
      ],
      index: "02",
    },
    {
      title: "Branding Services",
      description:
        "Build a strong, consistent identity with a logo, brand system, and templates that grow with your business.",
      items: [
        "Logos",
        "Brand identity",
        "Brand refresh",
        "Visual guidelines",
        "Ready-to-use templates",
      ],
      index: "03",
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
    {
      name: "Papillon de l'Espoir",
      category: "Web Design, Next.js",
      summary:
        "A bilingual website for a Montreal nonprofit providing emotional support to people navigating illness, caregiving, and recovery.",
      result: "A warm, accessible platform serving the Montreal community in English and French",
      image: "/images/project-papillon.jpg",
      url: "https://papillondelespoir.ca/en",
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
    portfolio: "Portfolio",
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
    resourcesList: ["Études de cas", "Processus", "FAQ"],
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
      title: "Tout ce dont votre entreprise a besoin pour paraître professionnelle et croître",
      text:
        "Chez Webgrafy, nous aidons les petites et moyennes entreprises à paraître professionnelles, à attirer plus de clients et à croître en ligne comme hors ligne. Des sites web et de l’image de marque aux visuels pour les médias sociaux, aux supports imprimés, à l’emballage et au référencement local, nous créons tout ce dont votre entreprise a besoin pour bâtir une présence forte et cohérente.",
      cta: "Parler de votre projet",
      industriesEyebrow: "Avec qui nous travaillons",
      industriesTitle: "Choisi par des PME ambitieuses",
      industriesText:
        "Nous accompagnons des fondateurs et des équipes marketing à Montréal et ailleurs — des commerces de quartier qui bâtissent leur première identité aux entreprises établies qui modernisent leur présence en ligne.",
      industries: [
        {
          name: "Restaurants et cafés",
          description:
            "Menus, signalétique et présence numérique à la hauteur de l’expérience vécue à table.",
        },
        {
          name: "Boutiques et commerces",
          description:
            "Emballages, supports en magasin et sites qui transforment les visiteurs en clients fidèles.",
        },
        {
          name: "Bien-être et beauté",
          description:
            "Identités calmes et haut de gamme et sites prêts à recevoir des réservations pour studios, spas et cliniques.",
        },
        {
          name: "Services professionnels",
          description:
            "Branding raffiné et sites clairs pour comptables, avocats, consultants et agences.",
        },
        {
          name: "Immobilier et hôtellerie",
          description:
            "Identités, brochures et fiches de qualité éditoriale qui valorisent chaque point de contact.",
        },
        {
          name: "OBNL et associations",
          description:
            "Une communication accessible et chaleureuse qui renforce la confiance des membres et donateurs.",
        },
      ],
      processEyebrow: "Comment nous travaillons",
      processTitle: "Un parcours clair de la première discussion au lancement",
      whyEyebrow: "Pourquoi Webgrafy",
      whyTitle: "Des partenaires de design, pas de simples fournisseurs",
      whyText:
        "Nous avons gardé une petite équipe par choix afin que chaque projet bénéficie d’une attention sénior. Vous échangez directement avec les personnes qui créent votre marque — sans intermédiaire, sans surprise.",
      pillars: [
        {
          title: "Bilingues par défaut",
          text: "Nous concevons en français et en anglais — naturel pour le public québécois et prêt pour la croissance partout au Canada.",
        },
        {
          title: "La stratégie avant les pixels",
          text: "Chaque projet commence par comprendre vos clients, votre marché et les résultats qui font réellement avancer votre entreprise.",
        },
        {
          title: "Print et digital sous un même toit",
          text: "D’une carte d’affaires à un site multi-pages, votre système visuel reste cohérent sur tous les canaux.",
        },
        {
          title: "Pensé pour évoluer avec vous",
          text: "Nous livrons des fichiers organisés, des modèles et des guides afin que votre équipe puisse continuer à produire sans nous.",
        },
      ],
      faqEyebrow: "FAQ",
      faqTitle: "Questions fréquentes sur nos services",
      faqs: [
        {
          question: "Faut-il s’engager sur un projet complet ou peut-on commencer petit ?",
          answer:
            "Vous pouvez démarrer avec un seul livrable — un logo, une page de site, un dépliant — et étendre la portée plus tard. Beaucoup de clients commencent par un élément et élargissent une fois qu’ils ont vu notre façon de travailler.",
        },
        {
          question: "Pouvez-vous travailler avec ma marque actuelle ?",
          answer:
            "Oui. Nous prolongeons ou rafraîchissons régulièrement des marques existantes, créons de nouveaux supports dans une charte établie ou bâtissons un site à partir d’une identité que vous appréciez déjà.",
        },
        {
          question: "Offrez-vous un soutien design en continu ?",
          answer:
            "Oui. Après un lancement, beaucoup de clients nous gardent en forfait mensuel pour les nouvelles campagnes, le contenu social, des pages additionnelles et leurs impressions au fil de leur croissance.",
        },
        {
          question: "Vos sites sont-ils bilingues ?",
          answer:
            "Oui — nous concevons en français, en anglais ou les deux, avec un routage par langue, un SEO adapté et un contenu éditable dans chaque langue.",
        },
        {
          question: "Pourrai-je mettre à jour mon site facilement ?",
          answer:
            "Nous construisons sur des plateformes que vous pouvez gérer au quotidien — Webflow, WordPress ou un CMS headless — et nous incluons toujours une courte formation pour que votre équipe soit autonome dès le lancement.",
        },
        {
          question: "Combien coûte un projet ?",
          answer:
            "Les logos débutent à 200 $, l’image de marque complète à partir de 500 $, et les sites web vont généralement de 2 500 $ à 12 000 $ selon la portée. Nous envoyons une estimation détaillée après notre appel de découverte.",
        },
      ],
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
    portfolio: {
      eyebrow: "Portfolio",
      title: "Une sélection de projets façonnés avec une direction éditoriale premium",
      text:
        "Une collection soignée de projets de branding, design graphique et sites web créés pour aider les entreprises à paraître plus raffinées, cohérentes et mémorables.",
      servicesEyebrow: "Ce que nous concevons",
      servicesTitle: "Des systèmes visuels pensés pour toutes les surfaces où votre entreprise apparaît",
      servicesText:
        "D’un logo raffiné à un emballage qui se distingue en rayon, chaque livrable est conçu pour rester cohérent — et avoir l’air à sa place partout où vos clients vous croisent.",
      serviceVisuals: [
        {
          name: "Logos et marques",
          caption:
            "Monogrammes, signatures et déclinaisons pensés autour de votre ton, pas seulement de votre apparence.",
        },
        {
          name: "Papeterie et image de marque",
          caption:
            "Cartes, en-têtes et supports qui transforment une identité en expérience quotidienne.",
        },
        {
          name: "Sites web",
          caption:
            "Des sites éditoriaux et orientés conversion, bilingues et prêts à grandir avec votre entreprise.",
        },
        {
          name: "Emballage et étiquettes",
          caption:
            "Emballages, étiquettes et systèmes produit conçus pour performer sur le rayon.",
        },
        {
          name: "Éditorial et impression",
          caption:
            "Brochures, lookbooks et imprimés qui prolongent le ton de votre marque dans le monde physique.",
        },
        {
          name: "Réseaux sociaux et digital",
          caption:
            "Modèles et systèmes de contenu qui gardent chaque publication fidèle à la marque sans ralentir votre équipe.",
        },
      ],
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
    privacy: {
      eyebrow: "Légal",
      title: "Politique de confidentialité",
      lastUpdated: "Dernière mise à jour : 1er janvier 2026",
      sections: [
        {
          heading: "Informations que nous collectons",
          body: "Nous collectons les informations que vous nous fournissez directement via notre formulaire de contact, notamment votre nom, le nom de votre entreprise, votre adresse courriel et les détails de votre projet. Nous ne collectons aucune information automatiquement au-delà des journaux serveur standard.",
        },
        {
          heading: "Utilisation de vos informations",
          body: "Nous utilisons les informations soumises uniquement pour répondre à votre demande et fournir les services de design que vous sollicitez. Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers à des fins commerciales.",
        },
        {
          heading: "Conservation des données",
          body: "Nous conservons vos coordonnées aussi longtemps que nécessaire pour mener à bien votre projet, puis pendant une période raisonnable à des fins d’archivage. Vous pouvez demander la suppression de vos données à tout moment en nous contactant.",
        },
        {
          heading: "Témoins (cookies)",
          body: "Ce site web n’utilise pas de témoins de suivi ni d’outils d’analyse tiers. Aucune information personnelle identifiable n’est collectée via des témoins.",
        },
        {
          heading: "Vos droits",
          body: "En vertu de la loi canadienne applicable en matière de protection de la vie privée (LPRPDE), vous avez le droit d’accéder à vos informations personnelles, de les corriger ou d’en demander la suppression. Pour exercer ces droits, veuillez nous contacter à hello@webgrafy.co.",
        },
        {
          heading: "Contact",
          body: "Pour toute question relative à cette politique, contactez-nous à hello@webgrafy.co ou par courrier à Webgrafy, Montréal, QC, Canada.",
        },
      ],
    },
    terms: {
      eyebrow: "Légal",
      title: "Conditions générales",
      lastUpdated: "Dernière mise à jour : 1er janvier 2026",
      sections: [
        {
          heading: "Services",
          body: "Webgrafy fournit des services de branding, de design graphique et de conception web à ses clients sur une base de projet. La portée, les livrables, le calendrier et les honoraires de chaque projet sont définis dans une proposition ou un contrat écrit signé par les deux parties.",
        },
        {
          heading: "Paiement",
          body: "Les projets requièrent un dépôt avant le début des travaux, le solde restant étant dû à la livraison ou selon les modalités définies dans l’accord de projet. Les paiements en retard peuvent entraîner des frais de service mensuels.",
        },
        {
          heading: "Propriété intellectuelle",
          body: "À réception du paiement intégral, Webgrafy transfère la propriété des livrables finaux approuvés au client. Webgrafy conserve le droit de présenter le travail dans son portfolio. Tous les fichiers de travail, ressources sources et systèmes de design demeurent la propriété de Webgrafy, sauf mention explicite dans l’accord de projet.",
        },
        {
          heading: "Révisions",
          body: "Chaque projet inclut un nombre défini de rondes de révision tel que précisé dans la proposition. Les demandes dépassant les révisions incluses feront l’objet d’un devis séparé et devront être approuvées par écrit.",
        },
        {
          heading: "Limitation de responsabilité",
          body: "La responsabilité de Webgrafy est limitée au montant payé pour le projet concerné. Nous ne sommes pas responsables des dommages indirects, accessoires ou consécutifs découlant de l’utilisation de nos livrables.",
        },
        {
          heading: "Droit applicable",
          body: "Ces conditions sont régies par les lois de la province de Québec et les lois fédérales du Canada qui s’y appliquent.",
        },
      ],
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
      title: "Services numériques",
      description:
        "Bâtissez votre présence en ligne et rejoignez plus de clients grâce à des sites web et un marketing numérique adaptés à votre entreprise.",
      items: [
        "Sites web",
        "Commerce en ligne",
        "Référencement (SEO)",
        "Fiche Google Business",
        "Visuels pour médias sociaux",
        "Publicités numériques",
        "Marketing par courriel",
        "Contenu",
      ],
      index: "01",
    },
    {
      title: "Services d’impression",
      description:
        "Des supports imprimés de haute qualité qui donnent à votre entreprise une présence professionnelle en personne, en magasin et dans votre communauté.",
      items: [
        "Cartes d’affaires",
        "Dépliants et brochures",
        "Menus",
        "Emballage",
        "Étiquettes",
        "Cartes-cadeaux",
        "Matériel d’événement",
        "Bannières et signalétique",
      ],
      index: "02",
    },
    {
      title: "Services de branding",
      description:
        "Construisez une identité forte et cohérente avec un logo, un système de marque et des modèles qui évoluent avec votre entreprise.",
      items: [
        "Logos",
        "Identité de marque",
        "Rafraîchissement de marque",
        "Charte graphique",
        "Modèles prêts à l’emploi",
      ],
      index: "03",
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
    {
      name: "Papillon de l’Espoir",
      category: "Web design, Next.js",
      summary:
        "Un site bilingue pour un organisme à but non lucratif montréalais offrant un soutien émotionnel aux personnes touchées par la maladie, les proches aidants et ceux en rétablissement.",
      result: "Une plateforme chaleureuse et accessible servant la communauté montréalaise en français et en anglais",
      image: "/images/project-papillon.jpg",
      url: "https://papillondelespoir.ca/fr",
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
