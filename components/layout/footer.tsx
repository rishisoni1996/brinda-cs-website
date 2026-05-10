import { siteConfig } from "@/lib/site-config";
import { Wordmark } from "@/components/shared/wordmark";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-warm-200 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <Wordmark size="md" />
            <p className="mt-4 max-w-md text-sm text-warm-600">
              {siteConfig.brand.descriptionShort}
            </p>
          </div>

          <div className="md:flex md:justify-end">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-warm-700">
                {siteConfig.nav.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-brand-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Brinda Soni on LinkedIn"
                    className="inline-flex items-center gap-1 hover:text-brand-500"
                  >
                    <LinkedinIcon size={16} />
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <hr className="my-8 border-warm-200" />

        <div className="flex flex-col gap-4 text-xs text-warm-600 md:flex-row md:items-start md:justify-between">
          <p className="max-w-3xl leading-relaxed">
            {siteConfig.footer.disclaimer}
          </p>
          <p className="md:whitespace-nowrap">
            © {year} {siteConfig.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
