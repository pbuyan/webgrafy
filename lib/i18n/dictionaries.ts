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
    title:
      "A more refined visual presence for brands that want to feel elevated.",
    intro:
      "We help businesses look professional and get more customers through design, websites, and branding.",
    traits: ["Elevated", "Curated", "Editorial"],
    ctaPrimary: "Start your project",
    ctaSecondary: "View our work",
    trustedBy: "Trusted by ambitious brands",
    logoStrip: [
      "Lunar Wellness",
      "Voyage Hotels",
      "Maison Solé",
      "Caveau",
      "Nordik Studio",
      "Sahara Skin",
    ],
    servicesEyebrow: "What we do",
    servicesTitle: "Strategic design. Beautifully executed.",
    workEyebrow: "Selected work",
    workTitle: "Design that drives real results.",
    testimonialsEyebrow: "Kind words from clients",
    testimonialsTitle: "Trusted by brands that value thoughtful design.",
    testimonialsPrev: "Previous testimonials",
    testimonialsNext: "Next testimonials",
    testimonialsDotLabel: "Go to slide {n}",
    processEyebrow: "Our process",
    processTitle: "A collaborative process, built around you.",
  },
  pages: {
    services: {
      eyebrow: "Services",
      title: "Everything your business needs to look professional and grow",
      text: "At Webgrafy, we help small and medium businesses look professional, attract more customers, and grow both online and offline. From websites and branding to social media graphics, printed marketing materials, packaging, and local SEO, we create everything your business needs to build a strong and consistent presence.",
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
      processEyebrow: "Our process",
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
          question:
            "Do I have to commit to a full project, or can I start small?",
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
            "Brand Starter begins at $450, Business Identity from $950, and websites typically start at $2,500 depending on scope. We send a detailed estimate after our discovery call.",
        },
      ],
    },
    packages: {
      eyebrow: "Packages",
      title: "Packages Built for Small Businesses That Need to Look Professional Fast",
      text: "Choose the right starting point for your business — whether you need a logo, a full brand identity, a website, print materials, or ongoing creative support. Webgrafy helps small and medium businesses build a professional presence online and offline, without the confusion of working with multiple providers.",
      heroCtaPrimary: "Book a Free Consultation",
      heroCtaSecondary: "Compare Packages",
      tiersHeading: "Choose your starting point",
      bestForLabel: "Best for",
      timelineLabel: "Timeline",
      chooseItemsLabel: "Choose 3 items",
      popularLabel: "Most popular",
      tiers: [
        {
          name: "Brand Starter",
          price: "Starting at $450",
          description: "For new businesses that need a professional first impression.",
          bestFor:
            "Startups, solo businesses, service providers, beauty studios, cafés, home services, consultants.",
          includes: [
            "Logo design",
            "2–3 logo concepts",
            "2 revision rounds",
            "Colour palette",
            "Font recommendations",
            "Final logo files for web and print",
            "Social media profile image",
            "Basic brand direction sheet",
          ],
          timeline: "1–2 weeks",
          cta: "Start My Brand",
        },
        {
          name: "Business Identity",
          price: "Starting at $950",
          description: "For businesses that need a complete and consistent visual identity.",
          bestFor:
            "Businesses preparing to launch, refresh, print, promote, or open a physical location.",
          includes: [
            "Everything in Brand Starter",
            "Business card design",
            "Letterhead or invoice template",
            "Email signature",
            "Social media cover/banner",
            "3 branded social post templates",
            "Mini brand guidelines PDF",
            "Print-ready and digital-ready files",
          ],
          timeline: "2–3 weeks",
          cta: "Build My Identity",
        },
        {
          name: "Website Launch",
          price: "Starting at $2,500",
          description:
            "For businesses that need a modern website that explains what they do and helps customers take action.",
          bestFor:
            "Local service businesses, trades, wellness, beauty, real estate, restaurants, consultants, small retailers.",
          includes: [
            "1–5 page responsive website",
            "Homepage, About, Services, Contact, and one extra page",
            "Mobile-friendly design",
            "Basic website copy support",
            "Contact form setup",
            "Basic SEO setup",
            "Google Analytics / tracking setup",
            "Basic speed optimization",
            "Launch support",
            "1 training session or handoff guide",
          ],
          timeline: "3–5 weeks",
          popular: true,
          cta: "Launch My Website",
        },
        {
          name: "Online Growth",
          price: "Starting at $650/month",
          description:
            "For businesses that already have a website but need better visibility, content, and consistency.",
          bestFor:
            "Businesses that need regular design, Google Business support, social media graphics, website updates, and local visibility.",
          includes: [
            "Website updates",
            "Google Business Profile support",
            "4 social media graphics",
            "1 promotional banner or ad graphic",
            "Basic SEO improvements",
            "Monthly content suggestions",
            "Light performance review",
            "Priority design support",
          ],
          cta: "Grow My Business",
        },
        {
          name: "Print & Promo Kit",
          price: "Starting at $550",
          description:
            "For businesses that need professional printed materials for sales, events, packaging, or local marketing.",
          bestFor:
            "Cafés, restaurants, retail shops, beauty studios, real estate agents, home services, product brands.",
          chooseItems: [
            "Business card",
            "Flyer",
            "Menu",
            "Brochure",
            "Gift certificate",
            "Product insert",
            "Poster",
            "Label or sticker",
            "Rack card",
            "Event invitation",
          ],
          includes: [
            "Custom layout design",
            "Print-ready files",
            "Digital version for sharing online",
            "2 revision rounds",
          ],
          cta: "Create My Print Materials",
        },
        {
          name: "Complete Business Launch",
          price: "Starting at $4,500",
          description:
            "For businesses that want everything done together — brand, website, Google setup, and launch materials.",
          bestFor:
            "New businesses, rebrands, local service companies, studios, clinics, cafés, boutiques, and growing small businesses.",
          includes: [
            "Brand identity",
            "Logo system",
            "Mini brand guidelines",
            "1–5 page website",
            "Website copy support",
            "Basic SEO setup",
            "Google Business Profile setup or optimization",
            "5 social media templates",
            "Business card design",
            "Flyer or brochure design",
            "Launch checklist",
            "30 days post-launch support",
          ],
          timeline: "5–8 weeks",
          cta: "Launch My Business",
        },
      ],
      guidanceEyebrow: "Need help choosing?",
      guidanceTitle: "Not sure what you need?",
      guidanceText:
        "Most small businesses know they need to look professional — but aren't sure where to start. Use this quick guide to find the right package.",
      guidanceItems: [
        {
          scenario: "Starting from zero and only need a logo",
          packageName: "Brand Starter",
        },
        {
          scenario: "Launching with a consistent identity across print and digital",
          packageName: "Business Identity",
        },
        {
          scenario: "Need a customer-facing website that drives action",
          packageName: "Website Launch",
        },
        {
          scenario: "Already have a site but need ongoing updates and visibility",
          packageName: "Online Growth",
        },
        {
          scenario: "Need menus, flyers, or other print materials",
          packageName: "Print & Promo Kit",
        },
        {
          scenario: "Want brand, website, and launch materials done together",
          packageName: "Complete Business Launch",
        },
      ],
      includedHeading: "Every package",
      includedTitle: "What's always included",
      includedText:
        "Every Webgrafy package includes the same practical standards — clear direction, files you can actually use, and a smooth handoff when the work is done.",
      guarantees: [
        {
          title: "Clear creative direction",
          text: "We help you make decisions, not just send you design files.",
        },
        {
          title: "Design for real business use",
          text: "Your files are prepared for web, print, social media, and everyday marketing.",
        },
        {
          title: "Mobile-first thinking",
          text: "Your website and digital visuals are designed to look professional on phones, tablets, and desktops.",
        },
        {
          title: "Ownership of final files",
          text: "Once the project is complete and paid, the final approved files are yours.",
        },
        {
          title: "Bilingual-friendly approach",
          text: "We can prepare materials for English, French, or both depending on your business needs.",
        },
        {
          title: "Practical handoff",
          text: "You receive files, instructions, and guidance so you know how to use everything properly.",
        },
      ],
      addOnsHeading: "Add-ons",
      addOnsTitle: "Need more? Add only what makes sense.",
      addOnsText:
        "Extend any package with extra deliverables — add pages, revisions, print pieces, or ongoing support as your business grows.",
      addOns: [
        {
          title: "Extra website page",
          price: "from $300",
          description: "A custom-designed page added to your website scope, on-brand and responsive.",
        },
        {
          title: "Extra revision round",
          price: "from $120",
          description: "An additional cycle of refinements on logo, print, or web deliverables.",
        },
        {
          title: "Brand guidelines PDF",
          price: "from $450",
          description: "A polished PDF guide covering logo usage, typography, colour, and tone.",
        },
        {
          title: "Social media template pack",
          price: "from $280",
          description: "Editable templates for posts, stories, and reels in your brand system.",
        },
        {
          title: "Google Business Profile setup",
          price: "from $250",
          description: "Profile setup or optimization so your business looks complete when people search locally.",
        },
        {
          title: "Menu or brochure design",
          price: "from $250",
          description: "A custom-designed menu or brochure with print-ready and digital files.",
        },
        {
          title: "Product label or packaging design",
          price: "from $350",
          description: "Label or packaging layout designed for your product and ready for print.",
        },
        {
          title: "Website maintenance",
          price: "from $150/month",
          description: "Regular updates, fixes, and light content changes to keep your site current.",
        },
        {
          title: "Monthly creative support",
          price: "from $350/month",
          description: "Ongoing design help for social graphics, ads, print, and marketing visuals.",
        },
        {
          title: "Website copywriting",
          price: "from $400",
          description: "Professional copy for key website pages written to explain your business clearly.",
        },
      ],
      processEyebrow: "Our process",
      processTitle: "A simple process from idea to launch",
      processSteps: [
        {
          number: "01",
          title: "Understand",
          text: "We listen first. We learn about your business, your goals, your audience, and the challenges you want to solve.",
        },
        {
          number: "02",
          title: "Plan",
          text: "We create a clear direction, so you know what we are building, why it matters, and what the next steps look like.",
        },
        {
          number: "03",
          title: "Create",
          text: "We design websites, branding, graphics, and marketing materials that look professional and help your business communicate clearly.",
        },
        {
          number: "04",
          title: "Launch",
          text: "We finalize, test, and prepare everything so your project is ready to be shared with your customers.",
        },
      ],
      faqHeading: "FAQ",
      faqTitle: "Common questions about our packages",
      faqs: [
        {
          question: "Which package should I choose if I'm just starting?",
          answer:
            "If you are starting from zero, choose Brand Starter if you only need a logo and basic identity. Choose Complete Business Launch if you need your logo, website, Google profile, and marketing materials created together.",
        },
        {
          question: "Do you only design websites?",
          answer:
            "No. Webgrafy combines website design, branding, social media visuals, print materials, Google Business setup, and ongoing creative support.",
        },
        {
          question: "Can I start small and add more later?",
          answer:
            "Yes. Many clients start with a logo or website and add print materials, social templates, Google setup, or monthly support later.",
        },
        {
          question: "Do you work with small local businesses?",
          answer:
            "Yes. Webgrafy is built for small and medium businesses that need professional design without a large agency process.",
        },
        {
          question: "Can you redesign my existing website or brand?",
          answer:
            "Yes. We can refresh your logo, improve your website, update your visuals, and make your business look more consistent.",
        },
        {
          question: "Are printing costs included?",
          answer:
            "Design packages include print-ready files. Printing can be quoted separately depending on quantity, size, paper, and finish.",
        },
        {
          question: "Do you offer monthly support?",
          answer:
            "Yes. The Online Growth package is designed for businesses that need regular updates, graphics, Google Business support, and ongoing creative help.",
        },
      ],
      ctaEyebrow: "Get started",
      ctaTitle: "Tell us what you need — we'll recommend the right package.",
      ctaText:
        "Need a logo, website, print materials, or all of it? Share your goals and we'll help you choose the best starting point.",
      ctaPrimary: "Get My Package Recommendation",
      ctaSecondary: "Book a Free Consultation",
      contactOverride: {
        title: "Ready to make your business look professional online and offline?",
        text: "Tell us about your business and we'll recommend the package that fits your goals, timeline, and budget.",
      },
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Selected projects shaped with a premium editorial point of view",
      text: "A curated collection of branding, graphic design, and website projects created to help businesses feel more refined, more consistent, and more memorable.",
      servicesEyebrow: "What we craft",
      servicesTitle:
        "Creative work designed to help small businesses look professional, consistent, and ready to grow.",
      servicesText:
        "Explore a selection of visual concepts across branding, websites, packaging, print, and digital marketing — created to show how a strong identity can work across every customer touchpoint.",
      serviceVisuals: [
        {
          name: "Logo Design",
          caption:
            "Distinctive logo concepts built to give each business a clear and memorable first impression.",
          src: "/images/portfolio/projects/logo.png",
        },
        {
          name: "Stationery & Brand Identity",
          caption:
            "Complete visual identity systems that bring the brand together across everyday business materials.",
          src: "/images/portfolio/projects/stationary.png",
        },
        {
          name: "Website Design",
          caption:
            "Website concepts created to make businesses look credible, modern, and easy to understand online.",
          src: "/images/portfolio/projects/website.png",
        },
        {
          name: "Packaging & Labels",
          caption:
            "Product packaging and label concepts designed to make brands feel premium, recognizable, and shelf-ready.",
          src: "/images/portfolio/projects/packaging.png",
        },
        {
          name: "Brochures, Lookbooks & Printed Pieces",
          caption:
            "Printed marketing materials designed to present products, services, and brand stories in a clear and attractive way.",
          src: "/images/portfolio/projects/brochures.png",
        },
        {
          name: "Social Media & Digital Presentations",
          caption:
            "Branded social media visuals created to help businesses show up consistently online.",
          src: "/images/portfolio/projects/social-media.png",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title:
        "A creative studio focused on refined branding and modern digital presence",
      text: "Webgrafy is a Montréal-based design practice working at the intersection of identity, print and the web. We were founded in 2018 to do one thing well — help small and mid-sized businesses look like the companies they intend to become — and we've kept the team small so we can keep doing it.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us about your brand, website, or creative project",
      text: "Whether you need a logo, a full identity, graphic design support, or a new website, we'd love to hear what you're building.",
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
    approachTitle:
      "A premium visual language with a thoughtful process behind it",
    approachText:
      "We combine refined creative direction with practical business thinking so every project feels intentional, contemporary, and aligned with the image our clients want to build.",
    processEyebrow: "Our process",
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
    text: "Tell us about your project and let's create something exceptional together.",
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
  cookieConsent: {
    message:
      "We use essential cookies to make this site work. No tracking or advertising cookies are used.",
    privacyLinkText: "Privacy Policy",
    accept: "Accept",
    decline: "Decline",
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
        "Website Design & Development",
        "Website Redesign",
        "E - commerce Websites",
        "SEO & Google Business Profile",
        "Social Media Design",
        "Digital Advertising Graphics",
        "Email Marketing Design",
        "Website Copywriting",
        "Product Listing Content",
      ],
      index: "01",
    },
    {
      title: "Print Services",
      description:
        "High-quality printed materials that give your business a professional presence in person, on the shelf, and in your community.",
      items: [
        "Business Cards & Stationery",
        "Flyers & Posters",
        "Brochures & Menus",
        "Packaging & Labels",
        "Gift Certificates",
        "Event Invitations",
        "Banners & Signage",
        "Product Inserts",
      ],
      index: "02",
    },
    {
      title: "Branding Services",
      description:
        "Build a strong, consistent identity with a logo, brand system, and templates that grow with your business.",
      items: [
        "Logo Design",
        "Brand Identity",
        "Brand Refresh",
        "Brand Guidelines",
        "Canva Templates",
      ],
      index: "03",
    },
    {
      title: "Ongoing Support",
      description:
        "Ongoing support to keep your brand looking fresh and your website performing at its best.",
      items: [
        "Website Maintenance",
        "Monthly Design Support",
        "Social Media Content Packages",
        "SEO Support",
        "Seasonal Campaign Design",
      ],
      index: "04",
    },
  ],
  projectsCategories: [
    {
      name: "Beauty",
      image: "/images/portfolio/projects/categories/beauty.png",
    },
    {
      name: "Health & Wellness",
      image: "/images/portfolio/projects/categories/gym.png",
    },
    {
      name: "Real Estate & Construction",
      image: "/images/portfolio/projects/categories/real-estate.png",
    },
    {
      name: "Restaurants & Cafés",
      image: "/images/portfolio/projects/categories/restaurants-cafes.png",
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
      result:
        "A warm, accessible platform serving the Montreal community in English and French",
      image: "/images/project-papillon.jpg",
      url: "https://papillondelespoir.ca/en",
    },
  ],
  testimonials: [
    {
      quote:
        "Webgrafy transformed our outdated website into a polished, modern online presence. The new design feels premium, professional, and much easier for clients to navigate.",
      name: "Daniel Carter",
      role: "Carter Home Services",
      featured: true,
    },
    {
      quote:
        "We needed a website that clearly explained our services and encouraged people to contact us. Webgrafy delivered exactly that — clean, elegant, and conversion-focused.",
      name: "Dr. Emily Laurent",
      role: "Laurent Wellness Clinic",
    },
    {
      quote:
        "The website looks beautiful on desktop and mobile. Everything feels intentional, from the layout to the contact form. It gave our business a much stronger first impression.",
      name: "Maya L.",
      role: "Willow & Ash Aesthetics",
    },
    {
      quote:
        "Webgrafy understood our brand quickly and created a website that finally feels aligned with the quality of our work.",
      name: "Elena R.",
      role: "North & Pine Interiors",
    },
    {
      quote:
        "Our logo and brand identity now feel refined, consistent, and memorable. Webgrafy helped us look like a real established brand.",
      name: "Clara Bennett",
      role: "Maison Belle Boutique",
      featured: true,
    },
    {
      quote:
        "The brand direction, colors, typography, and logo variations gave us a complete visual system we can use everywhere.",
      name: "Sophie Martin",
      role: "Oak & Linen Home",
    },
    {
      quote:
        "We came with only a basic idea, and Webgrafy turned it into a clean, elegant identity that fits our audience perfectly.",
      name: "Adam Pierce",
      role: "BrightPath Studio",
    },
    {
      quote:
        "The branding process was smooth and thoughtful. The final result feels elevated without being overcomplicated.",
      name: "Isabelle Roy",
      role: "Roy & Co. Market",
    },
    {
      quote:
        "Webgrafy created beautiful marketing materials that made our business look more professional across social media, email, and print.",
      name: "Marcus Lee",
      role: "Everly Events",
      featured: true,
    },
    {
      quote:
        "The social media templates saved us so much time. Now our posts look consistent, branded, and much more polished.",
      name: "Noémie P.",
      role: "Studio Verve Hair",
    },
    {
      quote:
        "Our presentation went from basic to premium. Webgrafy organized the information clearly and made the design look high-end.",
      name: "Laura Singh",
      role: "Summit Sales Group",
    },
    {
      quote:
        "We needed graphics for a campaign launch, and everything came together beautifully — banners, social posts, and promotional visuals.",
      name: "Olivier Tremblay",
      role: "Local Harvest Café",
    },
    {
      quote:
        "Webgrafy designed our flyers and business cards with a clean, professional look. The printed materials now match the quality of our services.",
      name: "Sofia Martinez",
      role: "Harbor House Wellness",
    },
    {
      quote:
        "Our brochures look elegant and easy to read. Customers immediately understood what we offer.",
      name: "Rachel Nguyen",
      role: "Bloom Health Studio",
    },
    {
      quote:
        "The packaging and label design gave our product a much stronger shelf presence. It looks more premium and trustworthy.",
      name: "Camille D.",
      role: "Serein Botanica",
      featured: true,
    },
    {
      quote:
        "Webgrafy helped us set up and improve our Google Business Profile. Our business looks more complete and professional when people search for us.",
      name: "Dr. Noah Bell",
      role: "Bell Family Clinic",
      featured: true,
    },
    {
      quote:
        "The Google profile updates, photos, service descriptions, and visual consistency made a big difference in how our business appears online.",
      name: "Chloé Dubois",
      role: "Atelier Chloé Salon",
    },
    {
      quote:
        "Having Webgrafy as ongoing design support has been a huge help. We can request updates, graphics, and small website changes without stress.",
      name: "Peter Wallace",
      role: "Wallace Repair Co.",
      featured: true,
    },
    {
      quote:
        "Webgrafy feels like an extension of our team. They understand our style and keep everything consistent across website, print, and social media.",
      name: "Amelia Brooks",
      role: "Brooks & Bloom Boutique",
    },
    {
      quote:
        "Every project feels thoughtful, elegant, and well organized. Webgrafy helped us build a visual presence we are proud to share.",
      name: "Sarah Mitchell",
      role: "Mitchell Legal Studio",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Understand",
      text: "We listen first. We learn about your business, your goals, your audience, and the challenges you want to solve.",
    },
    {
      number: "02",
      title: "Plan",
      text: "We create a clear direction, so you know what we are building, why it matters, and what the next steps look like.",
    },
    {
      number: "03",
      title: "Create",
      text: "We design websites, branding, graphics, and marketing materials that look professional and help your business communicate clearly.",
    },
    {
      number: "04",
      title: "Launch",
      text: "We finalize, test, and prepare everything so your project is ready to be shared with your customers.",
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
    title:
      "Une présence visuelle plus raffinée pour les marques qui veulent paraître haut de gamme.",
    intro:
      "Nous aidons les petites entreprises à paraître professionnelles et à attirer plus de clients grâce au design, aux sites web et au branding.",
    traits: ["Élevé", "Soigné", "Éditorial"],
    ctaPrimary: "Commencer votre projet",
    ctaSecondary: "Voir nos projets",
    trustedBy: "Approuvé par des marques ambitieuses",
    logoStrip: [
      "Lunar Wellness",
      "Voyage Hotels",
      "Maison Solé",
      "Caveau",
      "Nordik Studio",
      "Sahara Skin",
    ],
    servicesEyebrow: "Ce que nous faisons",
    servicesTitle: "Un design stratégique. Une exécution remarquable.",
    workEyebrow: "Projets sélectionnés",
    workTitle: "Un design qui génère de vrais résultats.",
    testimonialsEyebrow: "Mots de nos clients",
    testimonialsTitle:
      "Choisi par des marques qui valorisent un design réfléchi.",
    testimonialsPrev: "Témoignages précédents",
    testimonialsNext: "Témoignages suivants",
    testimonialsDotLabel: "Aller à la diapositive {n}",
    processEyebrow: "Notre processus",
    processTitle: "Un processus collaboratif, construit autour de vous.",
  },
  pages: {
    services: {
      eyebrow: "Services",
      title:
        "Tout ce dont votre entreprise a besoin pour paraître professionnelle et croître",
      text: "Chez Webgrafy, nous aidons les petites et moyennes entreprises à paraître professionnelles, à attirer plus de clients et à croître en ligne comme hors ligne. Des sites web et de l’image de marque aux visuels pour les médias sociaux, aux supports imprimés, à l’emballage et au référencement local, nous créons tout ce dont votre entreprise a besoin pour bâtir une présence forte et cohérente.",
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
      processEyebrow: "Notre processus",
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
          question:
            "Faut-il s’engager sur un projet complet ou peut-on commencer petit ?",
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
            "Le forfait Brand Starter débute à 450 $, Business Identity à partir de 950 $, et les sites web commencent généralement à 2 500 $ selon la portée. Nous envoyons une estimation détaillée après notre appel de découverte.",
        },
      ],
    },
    packages: {
      eyebrow: "Forfaits",
      title:
        "Des forfaits conçus pour les PME qui veulent paraître professionnelles rapidement",
      text: "Choisissez le bon point de départ pour votre entreprise — que vous ayez besoin d’un logo, d’une identité de marque complète, d’un site web, de supports imprimés ou d’un accompagnement créatif continu. Webgrafy aide les petites et moyennes entreprises à bâtir une présence professionnelle en ligne et hors ligne, sans la confusion de travailler avec plusieurs fournisseurs.",
      heroCtaPrimary: "Réserver une consultation gratuite",
      heroCtaSecondary: "Comparer les forfaits",
      tiersHeading: "Choisissez votre point de départ",
      bestForLabel: "Idéal pour",
      timelineLabel: "Délai",
      chooseItemsLabel: "Choisissez 3 éléments",
      popularLabel: "Le plus populaire",
      tiers: [
        {
          name: "Brand Starter",
          price: "À partir de 450 $",
          description:
            "Pour les nouvelles entreprises qui ont besoin d’une première impression professionnelle.",
          bestFor:
            "Startups, entreprises solo, prestataires de services, studios de beauté, cafés, services à domicile, consultants.",
          includes: [
            "Conception de logo",
            "2 à 3 concepts de logo",
            "2 tours de révisions",
            "Palette de couleurs",
            "Recommandations typographiques",
            "Fichiers finaux pour le web et l’impression",
            "Image de profil pour les médias sociaux",
            "Fiche de direction de marque de base",
          ],
          timeline: "1 à 2 semaines",
          cta: "Lancer ma marque",
        },
        {
          name: "Business Identity",
          price: "À partir de 950 $",
          description:
            "Pour les entreprises qui ont besoin d’une identité visuelle complète et cohérente.",
          bestFor:
            "Entreprises qui se préparent à lancer, à rafraîchir, à imprimer, à promouvoir ou à ouvrir un emplacement physique.",
          includes: [
            "Tout ce qui est inclus dans Brand Starter",
            "Conception de carte d’affaires",
            "Modèle de lettre ou de facture",
            "Signature courriel",
            "Couverture ou bannière pour médias sociaux",
            "3 modèles de publications sociales",
            "Mini guide de marque PDF",
            "Fichiers prêts pour l’impression et le digital",
          ],
          timeline: "2 à 3 semaines",
          cta: "Bâtir mon identité",
        },
        {
          name: "Website Launch",
          price: "À partir de 2 500 $",
          description:
            "Pour les entreprises qui ont besoin d’un site web moderne qui explique ce qu’elles font et incite les clients à agir.",
          bestFor:
            "Entreprises de services locaux, métiers, bien-être, beauté, immobilier, restaurants, consultants, petits commerces.",
          includes: [
            "Site web responsive de 1 à 5 pages",
            "Accueil, À propos, Services, Contact et une page supplémentaire",
            "Design adapté aux mobiles",
            "Soutien rédactionnel de base pour le site",
            "Configuration du formulaire de contact",
            "Configuration SEO de base",
            "Configuration Google Analytics / suivi",
            "Optimisation de vitesse de base",
            "Soutien au lancement",
            "1 session de formation ou guide de passation",
          ],
          timeline: "3 à 5 semaines",
          popular: true,
          cta: "Lancer mon site web",
        },
        {
          name: "Online Growth",
          price: "À partir de 650 $/mois",
          description:
            "Pour les entreprises qui ont déjà un site web mais ont besoin de plus de visibilité, de contenu et de cohérence.",
          bestFor:
            "Entreprises qui ont besoin de design régulier, de soutien Google Business, de visuels pour les médias sociaux, de mises à jour web et de visibilité locale.",
          includes: [
            "Mises à jour du site web",
            "Soutien Google Business Profile",
            "4 visuels pour médias sociaux",
            "1 bannière promotionnelle ou visuel publicitaire",
            "Améliorations SEO de base",
            "Suggestions de contenu mensuelles",
            "Revue légère des performances",
            "Soutien design prioritaire",
          ],
          cta: "Faire croître mon entreprise",
        },
        {
          name: "Print & Promo Kit",
          price: "À partir de 550 $",
          description:
            "Pour les entreprises qui ont besoin de supports imprimés professionnels pour les ventes, événements, emballages ou marketing local.",
          bestFor:
            "Cafés, restaurants, commerces, studios de beauté, agents immobiliers, services à domicile, marques de produits.",
          chooseItems: [
            "Carte d’affaires",
            "Dépliant",
            "Menu",
            "Brochure",
            "Certificat-cadeau",
            "Encart produit",
            "Affiche",
            "Étiquette ou autocollant",
            "Carte présentoir",
            "Invitation événement",
          ],
          includes: [
            "Mise en page sur mesure",
            "Fichiers prêts à imprimer",
            "Version numérique pour partage en ligne",
            "2 tours de révisions",
          ],
          cta: "Créer mes supports imprimés",
        },
        {
          name: "Complete Business Launch",
          price: "À partir de 4 500 $",
          description:
            "Pour les entreprises qui veulent tout faire ensemble — marque, site web, configuration Google et supports de lancement.",
          bestFor:
            "Nouvelles entreprises, refontes, entreprises de services locaux, studios, cliniques, cafés, boutiques et PME en croissance.",
          includes: [
            "Identité de marque",
            "Système de logo",
            "Mini guide de marque",
            "Site web de 1 à 5 pages",
            "Soutien rédactionnel pour le site",
            "Configuration SEO de base",
            "Configuration ou optimisation Google Business Profile",
            "5 modèles pour médias sociaux",
            "Conception de carte d’affaires",
            "Conception de dépliant ou brochure",
            "Liste de vérification de lancement",
            "30 jours de soutien post-lancement",
          ],
          timeline: "5 à 8 semaines",
          cta: "Lancer mon entreprise",
        },
      ],
      guidanceEyebrow: "Besoin d’aide pour choisir ?",
      guidanceTitle: "Vous ne savez pas par où commencer ?",
      guidanceText:
        "La plupart des PME savent qu’elles doivent paraître professionnelles — mais ne savent pas toujours par où commencer. Utilisez ce guide rapide pour trouver le bon forfait.",
      guidanceItems: [
        {
          scenario: "Vous partez de zéro et n’avez besoin que d’un logo",
          packageName: "Brand Starter",
        },
        {
          scenario: "Vous lancez avec une identité cohérente sur print et digital",
          packageName: "Business Identity",
        },
        {
          scenario: "Vous avez besoin d’un site web qui incite à l’action",
          packageName: "Website Launch",
        },
        {
          scenario: "Vous avez déjà un site mais avez besoin de soutien continu",
          packageName: "Online Growth",
        },
        {
          scenario: "Vous avez besoin de menus, dépliants ou autres supports imprimés",
          packageName: "Print & Promo Kit",
        },
        {
          scenario: "Vous voulez marque, site web et supports de lancement ensemble",
          packageName: "Complete Business Launch",
        },
      ],
      includedHeading: "Tous les forfaits",
      includedTitle: "Ce qui est toujours inclus",
      includedText:
        "Chaque forfait Webgrafy inclut les mêmes standards pratiques — direction claire, fichiers utilisables et passation fluide une fois le travail terminé.",
      guarantees: [
        {
          title: "Direction créative claire",
          text: "Nous vous aidons à prendre des décisions, pas seulement à recevoir des fichiers.",
        },
        {
          title: "Design pour un usage réel",
          text: "Vos fichiers sont préparés pour le web, l’impression, les médias sociaux et le marketing quotidien.",
        },
        {
          title: "Approche mobile d’abord",
          text: "Votre site et vos visuels numériques sont conçus pour paraître professionnels sur téléphones, tablettes et ordinateurs.",
        },
        {
          title: "Propriété des fichiers finaux",
          text: "Une fois le projet terminé et payé, les fichiers finaux approuvés vous appartiennent.",
        },
        {
          title: "Approche bilingue",
          text: "Nous pouvons préparer les supports en français, en anglais ou les deux selon vos besoins.",
        },
        {
          title: "Passation pratique",
          text: "Vous recevez les fichiers, les instructions et les conseils pour bien utiliser chaque livrable.",
        },
      ],
      addOnsHeading: "Options",
      addOnsTitle: "Besoin de plus ? Ajoutez seulement ce qui a du sens.",
      addOnsText:
        "Étendez n’importe quel forfait avec des livrables supplémentaires — pages, révisions, supports imprimés ou soutien continu au fil de votre croissance.",
      addOns: [
        {
          title: "Page de site additionnelle",
          price: "à partir de 300 $",
          description:
            "Une page personnalisée ajoutée à votre projet web, fidèle à votre marque et responsive.",
        },
        {
          title: "Tour de révisions supplémentaire",
          price: "à partir de 120 $",
          description:
            "Un cycle additionnel d’ajustements sur les livrables logo, print ou web.",
        },
        {
          title: "Guide de marque PDF",
          price: "à partir de 450 $",
          description:
            "Un PDF complet couvrant l’usage du logo, la typographie, les couleurs et le ton.",
        },
        {
          title: "Pack de modèles pour médias sociaux",
          price: "à partir de 280 $",
          description:
            "Modèles éditables pour publications, stories et reels dans votre identité.",
        },
        {
          title: "Configuration Google Business Profile",
          price: "à partir de 250 $",
          description:
            "Configuration ou optimisation pour que votre entreprise paraisse complète dans les recherches locales.",
        },
        {
          title: "Conception de menu ou brochure",
          price: "à partir de 250 $",
          description:
            "Menu ou brochure sur mesure avec fichiers prêts pour l’impression et le digital.",
        },
        {
          title: "Conception d’étiquette ou emballage",
          price: "à partir de 350 $",
          description:
            "Mise en page d’étiquette ou d’emballage conçue pour votre produit et prête à imprimer.",
        },
        {
          title: "Maintenance de site web",
          price: "à partir de 150 $/mois",
          description:
            "Mises à jour régulières, corrections et petits changements de contenu pour garder votre site à jour.",
        },
        {
          title: "Soutien créatif mensuel",
          price: "à partir de 350 $/mois",
          description:
            "Aide design continue pour visuels sociaux, publicités, print et marketing.",
        },
        {
          title: "Rédaction web",
          price: "à partir de 400 $",
          description:
            "Textes professionnels pour les pages clés de votre site, rédigés pour expliquer clairement votre activité.",
        },
      ],
      processEyebrow: "Notre processus",
      processTitle: "Un processus simple, de l’idée au lancement",
      processSteps: [
        {
          number: "01",
          title: "Comprendre",
          text: "Nous écoutons d'abord. Nous apprenons à connaître votre entreprise, vos objectifs, votre audience et les défis que vous souhaitez résoudre.",
        },
        {
          number: "02",
          title: "Planifier",
          text: "Nous créons une direction claire, pour que vous sachiez ce que nous construisons, pourquoi c'est important et à quoi ressemblent les prochaines étapes.",
        },
        {
          number: "03",
          title: "Créer",
          text: "Nous concevons des sites web, du branding, des graphiques et des supports marketing qui paraissent professionnels et aident votre entreprise à communiquer clairement.",
        },
        {
          number: "04",
          title: "Lancer",
          text: "Nous finalisons, testons et préparons tout pour que votre projet soit prêt à être partagé avec vos clients.",
        },
      ],
      faqHeading: "FAQ",
      faqTitle: "Questions fréquentes sur nos forfaits",
      faqs: [
        {
          question: "Quel forfait choisir si je débute ?",
          answer:
            "Si vous partez de zéro, choisissez Brand Starter si vous n’avez besoin que d’un logo et d’une identité de base. Choisissez Complete Business Launch si vous avez besoin de votre logo, site web, profil Google et supports marketing créés ensemble.",
        },
        {
          question: "Concevez-vous seulement des sites web ?",
          answer:
            "Non. Webgrafy combine design web, branding, visuels pour médias sociaux, supports imprimés, configuration Google Business et soutien créatif continu.",
        },
        {
          question: "Puis-je commencer petit et ajouter plus tard ?",
          answer:
            "Oui. Beaucoup de clients commencent par un logo ou un site web et ajoutent ensuite des supports imprimés, des modèles sociaux, la configuration Google ou un soutien mensuel.",
        },
        {
          question: "Travaillez-vous avec des PME locales ?",
          answer:
            "Oui. Webgrafy est conçu pour les petites et moyennes entreprises qui ont besoin d’un design professionnel sans le processus d’une grande agence.",
        },
        {
          question: "Pouvez-vous refaire mon site web ou ma marque existante ?",
          answer:
            "Oui. Nous pouvons rafraîchir votre logo, améliorer votre site, mettre à jour vos visuels et rendre votre entreprise plus cohérente.",
        },
        {
          question: "Les coûts d’impression sont-ils inclus ?",
          answer:
            "Les forfaits design incluent des fichiers prêts à imprimer. L’impression peut être chiffrée séparément selon la quantité, le format, le papier et la finition.",
        },
        {
          question: "Offrez-vous un soutien mensuel ?",
          answer:
            "Oui. Le forfait Online Growth est conçu pour les entreprises qui ont besoin de mises à jour régulières, de visuels, de soutien Google Business et d’aide créative continue.",
        },
      ],
      ctaEyebrow: "Commencer",
      ctaTitle: "Dites-nous ce dont vous avez besoin — nous recommanderons le bon forfait.",
      ctaText:
        "Besoin d’un logo, d’un site web, de supports imprimés ou de tout à la fois ? Partagez vos objectifs et nous vous aiderons à choisir le meilleur point de départ.",
      ctaPrimary: "Obtenir ma recommandation de forfait",
      ctaSecondary: "Réserver une consultation gratuite",
      contactOverride: {
        title: "Prêt à donner à votre entreprise une image professionnelle en ligne et hors ligne ?",
        text: "Parlez-nous de votre entreprise et nous recommanderons le forfait adapté à vos objectifs, délais et budget.",
      },
    },
    portfolio: {
      eyebrow: "Portfolio",
      title:
        "Une sélection de projets façonnés avec une direction éditoriale premium",
      text: "Une collection soignée de projets de branding, design graphique et sites web créés pour aider les entreprises à paraître plus raffinées, cohérentes et mémorables.",
      servicesEyebrow: "Ce que nous concevons",
      servicesTitle:
        "Un travail créatif conçu pour aider les petites entreprises à paraître professionnelles, cohérentes et prêtes à croître.",
      servicesText:
        "Explorez une sélection de concepts visuels en branding, sites web, emballage, impression et marketing digital — créés pour montrer comment une identité forte peut fonctionner à chaque point de contact client.",
      serviceVisuals: [
        {
          name: "Conception de logo",
          caption:
            "Des concepts de logo distinctifs conçus pour donner à chaque entreprise une première impression claire et mémorable.",
          src: "/images/portfolio/projects/logo.png",
        },
        {
          name: "Papeterie et identité de marque",
          caption:
            "Des systèmes d’identité visuelle complets qui unifient la marque sur les supports professionnels du quotidien.",
          src: "/images/portfolio/projects/stationary.png",
        },
        {
          name: "Conception de site web",
          caption:
            "Des concepts de site web créés pour rendre les entreprises crédibles, modernes et faciles à comprendre en ligne.",
          src: "/images/portfolio/projects/website.png",
        },
        {
          name: "Emballage et étiquettes",
          caption:
            "Des concepts d’emballage et d’étiquettes conçus pour donner aux marques un aspect premium, reconnaissable et prêt pour le rayon.",
          src: "/images/portfolio/projects/packaging.png",
        },
        {
          name: "Brochures, lookbooks et imprimés",
          caption:
            "Des supports marketing imprimés conçus pour présenter produits, services et histoires de marque de façon claire et attrayante.",
          src: "/images/portfolio/projects/brochures.png",
        },
        {
          name: "Réseaux sociaux et présentations digitales",
          caption:
            "Des visuels de réseaux sociaux cohérents avec la marque, créés pour aider les entreprises à se présenter uniformément en ligne.",
          src: "/images/portfolio/projects/social-media.png",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title:
        "Un studio créatif axé sur le branding raffiné et la présence digitale moderne",
      text: "Webgrafy est un studio de design basé à Montréal travaillant à l'intersection de l'identité, du print et du web. Nous avons été fondés en 2018 pour faire une chose bien — aider les petites et moyennes entreprises à paraître comme les entreprises qu'elles souhaitent devenir — et nous avons gardé l'équipe petite pour pouvoir continuer à le faire.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlez-nous de votre marque, site web ou projet créatif",
      text: "Que vous ayez besoin d’un logo, d’une identité complète, d’un soutien en design graphique ou d’un nouveau site web, nous serions ravis de découvrir votre projet.",
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
    approachTitle:
      "Un langage visuel premium soutenu par un processus réfléchi",
    approachText:
      "Nous combinons une direction créative raffinée à une réflexion business concrète pour que chaque projet paraisse intentionnel, contemporain et aligné avec l’image que nos clients souhaitent construire.",
    processEyebrow: "Notre processus",
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
    text: "Parlez-nous de votre projet et créons ensemble quelque chose d’exceptionnel.",
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
  cookieConsent: {
    message:
      "Nous utilisons des cookies essentiels au bon fonctionnement de ce site. Aucun cookie de suivi ou publicitaire n'est utilisé.",
    privacyLinkText: "Politique de confidentialité",
    accept: "Accepter",
    decline: "Refuser",
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
        "Conception et développement de sites web",
        "Refonte de site web",
        "Sites web e-commerce",
        "Référencement (SEO) et profil Google Business",
        "Visuels pour médias sociaux",
        "Visuels pour publicité numérique",
        "Design pour marketing par courriel",
        "Rédaction web",
        "Contenu pour fiches produits",
      ],
      index: "01",
    },
    {
      title: "Services d’impression",
      description:
        "Des supports imprimés de haute qualité qui donnent à votre entreprise une présence professionnelle en personne, en magasin et dans votre communauté.",
      items: [
        "Cartes d’affaires et papeterie",
        "Dépliants et affiches",
        "Brochures et menus",
        "Emballages et étiquettes",
        "Certificats-cadeaux",
        "Invitations événementielles",
        "Bannières et signalétique",
        "Encarts produits",
      ],
      index: "02",
    },
    {
      title: "Services de branding",
      description:
        "Construisez une identité forte et cohérente avec un logo, un système de marque et des modèles qui évoluent avec votre entreprise.",
      items: [
        "Conception de logo",
        "Identité de marque",
        "Rafraîchissement de marque",
        "Charte graphique",
        "Modèles Canva",
      ],
      index: "03",
    },
    {
      title: "Soutien continu",
      description:
        "Un accompagnement continu pour que votre marque reste actuelle et que votre site web performe à son meilleur.",
      items: [
        "Maintenance de site web",
        "Soutien design mensuel",
        "Forfaits de contenu pour médias sociaux",
        "Soutien SEO",
        "Design de campagnes saisonnières",
      ],
      index: "04",
    },
  ],
  projectsCategories: [
    {
      name: "Beauté",
      image: "/images/portfolio/projects/categories/beauty.png",
    },
    {
      name: "Santé et bien-être",
      image: "/images/portfolio/projects/categories/gym.png",
    },
    {
      name: "Immobilier et construction",
      image: "/images/portfolio/projects/categories/real-estate.png",
    },
    {
      name: "Restaurants et cafés",
      image: "/images/portfolio/projects/categories/restaurants-cafes.png",
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
      result:
        "Une plateforme chaleureuse et accessible servant la communauté montréalaise en français et en anglais",
      image: "/images/project-papillon.jpg",
      url: "https://papillondelespoir.ca/fr",
    },
  ],
  testimonials: [
    {
      quote:
        "Webgrafy a transformé notre site web désuet en une présence en ligne soignée et moderne. Le nouveau design paraît premium, professionnel et beaucoup plus facile à parcourir pour nos clients.",
      name: "Daniel Carter",
      role: "Carter Home Services",
      featured: true,
    },
    {
      quote:
        "Nous avions besoin d'un site qui explique clairement nos services et encourage les gens à nous contacter. Webgrafy a livré exactement cela — propre, élégant et axé sur la conversion.",
      name: "Dr. Emily Laurent",
      role: "Laurent Wellness Clinic",
    },
    {
      quote:
        "Le site est magnifique sur ordinateur et mobile. Tout paraît intentionnel, de la mise en page au formulaire de contact. Il a donné à notre entreprise une première impression bien plus forte.",
      name: "Maya L.",
      role: "Willow & Ash Aesthetics",
    },
    {
      quote:
        "Webgrafy a compris notre marque rapidement et a créé un site qui correspond enfin à la qualité de notre travail.",
      name: "Elena R.",
      role: "North & Pine Interiors",
    },
    {
      quote:
        "Notre logo et notre identité de marque paraissent maintenant raffinés, cohérents et mémorables. Webgrafy nous a aidés à ressembler à une vraie marque établie.",
      name: "Clara Bennett",
      role: "Maison Belle Boutique",
      featured: true,
    },
    {
      quote:
        "La direction de marque, les couleurs, la typographie et les déclinaisons du logo nous ont donné un système visuel complet utilisable partout.",
      name: "Sophie Martin",
      role: "Oak & Linen Home",
    },
    {
      quote:
        "Nous sommes arrivés avec seulement une idée de base, et Webgrafy l'a transformée en une identité propre et élégante qui correspond parfaitement à notre public.",
      name: "Adam Pierce",
      role: "BrightPath Studio",
    },
    {
      quote:
        "Le processus de branding s'est déroulé sans accroc et de façon réfléchie. Le résultat final paraît élevé sans être trop compliqué.",
      name: "Isabelle Roy",
      role: "Roy & Co. Market",
    },
    {
      quote:
        "Webgrafy a créé de beaux supports marketing qui ont rendu notre entreprise plus professionnelle sur les réseaux sociaux, par courriel et en impression.",
      name: "Marcus Lee",
      role: "Everly Events",
      featured: true,
    },
    {
      quote:
        "Les modèles pour les réseaux sociaux nous ont fait gagner tellement de temps. Nos publications sont maintenant cohérentes, alignées sur la marque et bien plus soignées.",
      name: "Noémie P.",
      role: "Studio Verve Hair",
    },
    {
      quote:
        "Notre présentation est passée de basique à premium. Webgrafy a organisé l'information clairement et a donné un look haut de gamme au design.",
      name: "Laura Singh",
      role: "Summit Sales Group",
    },
    {
      quote:
        "Nous avions besoin de visuels pour un lancement de campagne, et tout s'est harmonieusement assemblé — bannières, publications sociales et visuels promotionnels.",
      name: "Olivier Tremblay",
      role: "Local Harvest Café",
    },
    {
      quote:
        "Webgrafy a conçu nos dépliants et cartes d'affaires avec un look propre et professionnel. Les imprimés correspondent maintenant à la qualité de nos services.",
      name: "Sofia Martinez",
      role: "Harbor House Wellness",
    },
    {
      quote:
        "Nos brochures paraissent élégantes et faciles à lire. Les clients ont immédiatement compris ce que nous offrons.",
      name: "Rachel Nguyen",
      role: "Bloom Health Studio",
    },
    {
      quote:
        "Le design d'emballage et d'étiquette a donné à notre produit une présence en rayon bien plus forte. Il paraît plus premium et digne de confiance.",
      name: "Camille D.",
      role: "Serein Botanica",
      featured: true,
    },
    {
      quote:
        "Webgrafy nous a aidés à configurer et améliorer notre profil Google Business. Notre entreprise paraît plus complète et professionnelle quand les gens nous recherchent.",
      name: "Dr. Noah Bell",
      role: "Bell Family Clinic",
      featured: true,
    },
    {
      quote:
        "Les mises à jour du profil Google, les photos, les descriptions de services et la cohérence visuelle ont fait une grande différence dans la façon dont notre entreprise apparaît en ligne.",
      name: "Chloé Dubois",
      role: "Atelier Chloé Salon",
    },
    {
      quote:
        "Avoir Webgrafy comme soutien design continu a été d'une grande aide. Nous pouvons demander des mises à jour, des visuels et de petits changements sur le site sans stress.",
      name: "Peter Wallace",
      role: "Wallace Repair Co.",
      featured: true,
    },
    {
      quote:
        "Webgrafy fait partie de notre équipe. Ils comprennent notre style et gardent tout cohérent sur le site, l'impression et les réseaux sociaux.",
      name: "Amelia Brooks",
      role: "Brooks & Bloom Boutique",
    },
    {
      quote:
        "Chaque projet paraît réfléchi, élégant et bien organisé. Webgrafy nous a aidés à bâtir une présence visuelle dont nous sommes fiers de partager.",
      name: "Sarah Mitchell",
      role: "Mitchell Legal Studio",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Comprendre",
      text: "Nous écoutons d'abord. Nous apprenons à connaître votre entreprise, vos objectifs, votre audience et les défis que vous souhaitez résoudre.",
    },
    {
      number: "02",
      title: "Planifier",
      text: "Nous créons une direction claire, pour que vous sachiez ce que nous construisons, pourquoi c'est important et à quoi ressemblent les prochaines étapes.",
    },
    {
      number: "03",
      title: "Créer",
      text: "Nous concevons des sites web, du branding, des graphiques et des supports marketing qui paraissent professionnels et aident votre entreprise à communiquer clairement.",
    },
    {
      number: "04",
      title: "Lancer",
      text: "Nous finalisons, testons et préparons tout pour que votre projet soit prêt à être partagé avec vos clients.",
    },
  ],
};

const dictionaries: Record<Locale, SiteDictionary> = { en, fr };

export async function getDictionary(locale: Locale): Promise<SiteDictionary> {
  return dictionaries[locale];
}
