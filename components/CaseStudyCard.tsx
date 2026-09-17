import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

const logoBySlug: Record<string, string> = {
  "apollo-medicine-companion": "/case-studies/apollo-logo.png",
  "google-maps-refueling": "/case-studies/google-maps-logo.png",
  travelsouls: "/case-studies/travelsouls-logo.png",
  "meta-storyteller": "/case-studies/meta-storyteller-logo.png",
  "geo-product-discovery": "/case-studies/geo-logo.png",
};

const imageBySlug: Record<string, string> = {
  "apollo-medicine-companion": "/case-studies/apollo-medicine.png",
  "google-maps-refueling": "/case-studies/google-maps-refueling.png",
  travelsouls: "/case-studies/travelsouls.png",
  "meta-storyteller": "/case-studies/meta-storyteller.png",
  "geo-product-discovery": "/case-studies/geo-product-discovery.png",
};

export default function CaseStudyCard({
  study,
  large = false,
}: {
  study: CaseStudy;
  large?: boolean;
}) {
  const logoPath = logoBySlug[study.slug];
  const imagePath = imageBySlug[study.slug];

  return (
    <article
      className={`group grid overflow-hidden border border-hairline transition-colors duration-200 hover:border-signalink ${
        large ? "md:col-span-2" : ""
      } md:grid-cols-[1fr_0.85fr]`}
    >
      <div className="flex min-w-0 flex-col justify-between p-6 md:p-8">
        <div>
          {logoPath ? (
            <div className="mb-6 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-hairline bg-white p-2">
              <Image
                src={logoPath}
                alt={`${study.title} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>
          ) : null}

          <div className="mb-4 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="border border-hairline px-2.5 py-1 text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            className={`font-display text-paper ${
              large ? "text-3xl md:text-4xl" : "text-2xl"
            }`}
          >
            {study.title}
          </h3>

          <p className="mt-4 max-w-prose text-muted">{study.oneLiner}</p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link
            href={`/case-studies/${study.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-paper hover:text-signalink"
          >
            Read case study
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </Link>

          {study.prototypeUrl ? (
            <a
              href={study.prototypeUrl}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-muted hover:text-signalink"
            >
              View prototype
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          ) : (
            <span className="text-muted/60">Prototype in progress</span>
          )}
        </div>
      </div>

      <div className="relative min-h-[240px] border-t border-hairline bg-surface md:min-h-full md:border-l md:border-t-0">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={`${study.title} product preview`}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full min-h-[240px] items-center justify-center p-8 text-center text-sm text-muted">
            Product preview coming soon
          </div>
        )}
      </div>
    </article>
  );
}