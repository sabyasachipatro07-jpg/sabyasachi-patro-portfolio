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
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl text-paper md:text-6xl">
          Let&apos;s build something meaningful.
        </h1>

        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
          I&apos;m open to Associate Product Manager opportunities, product
          collaborations, and conversations around AI-powered products.
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
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 border border-hairline px-6 py-3 text-sm text-paper transition-colors duration-200 hover:border-signalink hover:text-signalink"
          >
            <Phone size={15} />
            {siteConfig.phone}
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

        <div className="mt-8 space-y-2 text-sm text-muted">
          <p>
            <span className="text-paper">Email:</span>{" "}
            {siteConfig.email}
          </p>

          <p>
            <span className="text-paper">Mobile:</span>{" "}
            {siteConfig.phone}
          </p>
        </div>
      </div>
    </div>
  );
}