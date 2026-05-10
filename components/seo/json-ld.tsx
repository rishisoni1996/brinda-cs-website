import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.brand.name,
    description: siteConfig.brand.descriptionLong,
    url: siteConfig.url,
    email: `mailto:${siteConfig.contact.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Company Incorporation",
      "ROC Compliance",
      "Companies Act",
      "FEMA Compliance",
      "RBI Reporting",
      "FDI Compliance",
      "FC-GPR Filing",
      "SEBI Regulations",
      "Trademark Registration",
      "MSME Registration",
      "Corporate Secretarial Services",
    ],
    sameAs: [siteConfig.contact.linkedin],
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.founder.name,
    jobTitle: "Practicing Company Secretary",
    worksFor: {
      "@type": "LegalService",
      name: siteConfig.brand.name,
      url: siteConfig.url,
    },
    memberOf: {
      "@type": "Organization",
      name: "Institute of Company Secretaries of India",
      url: "https://www.icsi.edu/",
    },
    sameAs: [siteConfig.contact.linkedin],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
