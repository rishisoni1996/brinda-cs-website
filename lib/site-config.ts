/**
 * Edit this file to change site-wide content.
 * Components do not hardcode these values — every section reads from `siteConfig`.
 *
 * Search for `// TODO:` to find content that needs to be replaced before launch.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type ServiceIconKey =
  | "Building2"
  | "FileCheck2"
  | "Globe2"
  | "BadgeCheck"
  | "Shield"
  | "Briefcase";

export type Service = {
  id: string;
  title: string;
  icon: ServiceIconKey;
  description: string;
  items: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type SiteConfig = {
  url: string;
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    descriptionShort: string;
    descriptionLong: string;
  };
  contact: {
    email: string;
    location: string;
    linkedin: string;
  };
  founder: {
    name: string;
    title: string;
    bio: string[];
    credentials: string[];
    image: string;
    imageAlt: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    primaryCta: { label: string; subject: string };
    secondaryCta: { label: string; href: string };
  };
  international: {
    heading: string;
    body: string;
    list: string[];
  };
  nav: NavLink[];
  services: Service[];
  whyChooseUs: string[];
  industries: string[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  footer: {
    disclaimer: string;
  };
  seo: {
    defaultMetaTitle: string;
    defaultMetaDescription: string;
    keywords: string[];
  };
};

export const siteConfig: SiteConfig = {
  url: "https://bsaadvisors.in",

  brand: {
    name: "Brinda Soni & Associates",
    shortName: "BSA",
    tagline: "Corporate compliance, made clear.",
    descriptionShort:
      "Practicing Company Secretaries supporting startups, SMEs, and growing businesses across India.",
    descriptionLong:
      "Brinda Soni & Associates helps startups, SMEs, and growing businesses navigate Indian corporate law with practical, timely, and professional support — from incorporation to ROC, FEMA, and beyond.",
  },

  contact: {
    email: "brinda@bsaadvisors.in",
    location: "Ahmedabad, Gujarat, India",
    linkedin: "https://www.linkedin.com/in/cs-brinda-soni-330993157/",
  },

  founder: {
    name: "Brinda Soni",
    title: "Practicing Company Secretary · Member, ICSI",
    bio: [
      "Ms. Brinda Soni is a Practicing Company Secretary and Member of the Institute of Company Secretaries of India, with three years of focused experience in corporate compliance and business consulting.",
      "She works closely with founders, directors, and finance teams to maintain compliance under the Companies Act, FEMA, SEBI regulations, and intellectual property law — translating regulatory complexity into clear, actionable steps.",
      "Brinda Soni & Associates is built on professional integrity, timely delivery, transparent communication, and long-term client relationships.",
    ],
    credentials: [
      "Member, Institute of Company Secretaries of India",
      "Bachelor of Commerce",
      "7+ years of corporate compliance experience",
      "Practice areas: Companies Act, FEMA, SEBI, IP",
    ],
    image: "/brinda-soni.jpg",
    imageAlt:
      "Brinda Soni, Company Secretary, Brinda Soni & Associates",
  },

  hero: {
    eyebrow: "Practicing Company Secretaries · Ahmedabad",
    headline: "Corporate compliance, made clear.",
    subhead:
      "Brinda Soni & Associates helps startups, SMEs, and growing businesses navigate Indian corporate law with practical, timely, and professional support — from incorporation to ROC, FEMA, and beyond.",
    primaryCta: {
      label: "Schedule a Consultation",
      subject: "Consultation Inquiry",
    },
    secondaryCta: {
      label: "Explore Services",
      href: "#services",
    },
  },

  international: {
    heading: "India entry and compliance, coordinated end-to-end.",
    body: "We support overseas consultants, agencies, and companies who need a reliable Indian compliance partner. From entity setup to ongoing ROC and FEMA reporting, we coordinate documentation and filings so you can operate in India with confidence.",
    list: [
      "India business setup",
      "Corporate compliance coordination",
      "Documentation assistance",
      "FEMA / RBI compliance support",
      "Ongoing ROC management",
    ],
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],

  services: [
    {
      id: "incorporation",
      title: "Company Incorporation",
      icon: "Building2",
      description:
        "End-to-end entity setup with the right structure for your business.",
      items: [
        "Private Limited Company",
        "LLP and One Person Company",
        "Public Limited Company",
        "Conversions between entity types",
        "Startup advisory",
      ],
    },
    {
      id: "roc",
      title: "ROC & Annual Compliance",
      icon: "FileCheck2",
      description:
        "Statutory filings and recordkeeping under the Companies Act, on time, every cycle.",
      items: [
        "Annual filings (AOC-4, MGT-7)",
        "Board resolutions & minutes",
        "Statutory registers",
        "Director KYC and compliance",
        "Event-based filings",
        "Compliance calendar management",
      ],
    },
    {
      id: "fema",
      title: "FEMA & RBI Compliance",
      icon: "Globe2",
      description:
        "Cross-border compliance for inbound investment and overseas remittance.",
      items: [
        "FDI reporting (FC-GPR, FC-TRS)",
        "FLA returns",
        "Overseas investment compliance",
        "Foreign shareholding advisory",
      ],
    },
    {
      id: "registrations",
      title: "Business Registrations",
      icon: "BadgeCheck",
      description:
        "All the licences and registrations a growing business needs.",
      items: [
        "MSME / Udyam",
        "Startup India recognition",
        "IEC (Importer Exporter Code)",
        "PAN / TAN",
        "Professional Tax",
        "Shops & Establishment",
      ],
    },
    {
      id: "trademark",
      title: "Trademark & IP Support",
      icon: "Shield",
      description:
        "Protect your brand with practical, end-to-end trademark services.",
      items: [
        "Trademark search & filing",
        "Objection replies",
        "Renewals",
        "Brand protection advisory",
      ],
    },
    {
      id: "advisory",
      title: "Advisory & Business Support",
      icon: "Briefcase",
      description:
        "Strategic compliance and secretarial support beyond filings.",
      items: [
        "Due diligence",
        "Agreement drafting coordination",
        "Compliance health checks",
        "Valuation coordination",
        "Virtual secretarial assistance",
      ],
    },
  ],

  whyChooseUs: [
    "Personalized professional support",
    "Timely and responsive communication",
    "Practical compliance solutions",
    "Startup-friendly approach",
    "End-to-end documentation assistance",
    "Reliable support for growing businesses",
    "Dedicated focus on accuracy and timelines",
  ],

  industries: [
    "Startups",
    "Trading Businesses",
    "E-commerce",
    "Consultants & Agencies",
    "Manufacturers",
    "Import-Export",
    "Professionals & Service Providers",
    "Family-Owned Businesses",
  ],

  // TODO: Replace with real testimonials before launch.
  testimonials: [
    {
      quote:
        "Brinda made our Pvt Ltd incorporation effortless — every filing was on time and explained in plain English. She felt like part of our team from day one.",
      author: "Founder",
      role: "Founder & CEO",
      company: "D2C Beauty Startup",
    },
    {
      quote:
        "We rely on Brinda for our annual ROC compliance and FC-GPR filings. The communication is proactive and the documentation is always tidy — no surprises at audit time.",
      author: "Finance Lead",
      role: "Head of Finance",
      company: "Cross-border SaaS Company",
    },
    {
      quote:
        "As a UK-based agency setting up an Indian subsidiary, we needed a partner who could handle the local complexity. Brinda Soni & Associates coordinated everything end-to-end.",
      author: "Director",
      role: "Director",
      company: "London-based Consultancy",
    },
  ],

  faqs: [
    {
      question: "What does a Practicing Company Secretary do?",
      answer:
        "A Practicing Company Secretary (CS) is a professional licensed by the Institute of Company Secretaries of India (ICSI) to advise on and certify corporate compliance under the Companies Act and allied laws. We file statutory returns, maintain board records, advise on FEMA / SEBI / IP matters, and act as a trusted compliance partner for the company's directors and shareholders.",
    },
    {
      question: "Can you help register my private limited company in India?",
      answer:
        "Yes. We handle the full incorporation process — name reservation (RUN / SPICe+), DSC and DIN for directors, MOA / AOA drafting, PAN / TAN, and bank account documentation. Typical timelines are 10–15 working days end-to-end, subject to MCA processing. We also advise on the right entity type for your business.",
    },
    {
      question:
        "What are the ROC annual compliance requirements for a Pvt Ltd company?",
      answer:
        "Every private limited company must file AOC-4 (financial statements) and MGT-7 (annual return) with the Registrar of Companies, hold board meetings (minimum four per year), maintain statutory registers, complete director KYC, and file event-based forms when applicable. Due dates are tied to the AGM and financial year close — we manage this with a compliance calendar so nothing slips.",
    },
    {
      question: "What is FC-GPR filing and when do I need it?",
      answer:
        "FC-GPR is a Foreign Direct Investment (FDI) reporting form filed with the Reserve Bank of India after an Indian company allots shares to a foreign investor. It must be filed within 30 days of allotment, with valuation reports and KYC. We coordinate the full filing including form preparation, AD bank routing, and follow-up.",
    },
    {
      question: "Do you work with overseas clients or only Indian businesses?",
      answer:
        "Both. We regularly support overseas founders, agencies, and companies setting up or operating in India. Engagements typically include entity incorporation, FEMA / RBI compliance, ongoing ROC filings, and documentation coordination — all handled remotely with clear communication across time zones.",
    },
    {
      question: "How are your fees structured?",
      answer:
        "Most engagements are priced per matter (e.g. incorporation, FC-GPR filing) or as an annual compliance retainer for ongoing ROC and secretarial work. We offer a free initial consultation to scope the work and provide a clear, fixed quote before starting.",
    },
  ],

  footer: {
    disclaimer:
      "This website provides general information about the services offered by Brinda Soni & Associates and does not constitute legal or professional advice. For specific compliance matters, please contact us directly.",
  },

  seo: {
    defaultMetaTitle:
      "Brinda Soni & Associates — Practicing Company Secretaries, Ahmedabad",
    defaultMetaDescription:
      "Corporate compliance, ROC filings, FEMA / RBI advisory, company incorporation, and trademark support for startups and SMEs across India.",
    keywords: [
      "company secretary ahmedabad",
      "practicing company secretary",
      "ROC compliance",
      "ROC annual filing",
      "FEMA RBI advisory",
      "FC-GPR filing",
      "FDI compliance india",
      "company incorporation india",
      "private limited company registration",
      "LLP registration ahmedabad",
      "trademark registration",
      "MSME registration",
      "Startup India registration",
      "compliance consultant india",
      "secretarial audit",
    ],
  },
};

/**
 * Build a `mailto:` URL for the firm's contact address.
 * Pass an optional subject line; otherwise the default "Consultation Inquiry" is used.
 */
export function mailtoConsult(subject = "Consultation Inquiry"): string {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}`;
}
