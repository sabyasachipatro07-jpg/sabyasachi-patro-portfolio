import type { Metadata } from "next";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact — Sabyasachi Patro",
  description:
    "Contact Sabyasachi Patro for Associate Product Manager opportunities, product collaborations, and AI-powered product discussions.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-14 md:grid-cols-[1.2fr_0.8fr] md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-signalink">
            Get in touch
          </p>

          <h1 className="mt-6 max-w-2xl font-display text-4xl leading-tight text-paper md:text-6xl">
            Let&apos;s build something meaningful.
          </h1>

          <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
            I&apos;m open to Associate Product Manager opportunities,
            product collaborations, and conversations around AI-powered
            products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 bg-signal px-6 py-3 text-sm font-medium text-onsignal transition-opacity duration-200 hover:opacity-90"
            >
              <Mail size={15} />
              Email me
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-hairline px-6 py-3 text-sm text-paper transition-colors duration-200 hover:border-signalink hover:text-signalink"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-hairline px-6 py-3 text-sm text-paper transition-colors duration-200 hover:border-signalink hover:text-signalink"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <aside className="self-end border-l border-hairline pl-6 md:pl-8">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Contact details
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Email
              </p>

              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block break-all text-sm text-paper transition-colors hover:text-signalink"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Mobile
              </p>

              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-2 inline-flex items-center gap-2 text-sm text-paper transition-colors hover:text-signalink"
              >
                <Phone size={14} />
                {siteConfig.phone}
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Availability
              </p>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                Open to entry-level product opportunities, collaborative
                projects, and conversations with product teams.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}