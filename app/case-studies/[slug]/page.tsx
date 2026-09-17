import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

const imageBySlug: Record<string, string> = {
  "apollo-medicine-companion": "/case-studies/apollo-medicine.png",
  "google-maps-refueling": "/case-studies/google-maps-refueling.png",
  travelsouls: "/case-studies/travelsouls.png",
  "meta-storyteller": "/case-studies/meta-storyteller.png",
  "geo-product-discovery": "/case-studies/geo-product-discovery.png",
};

const logoBySlug: Record<string, string> = {
  "apollo-medicine-companion": "/case-studies/apollo-logo.png",
  "google-maps-refueling": "/case-studies/google-maps-logo.png",
  travelsouls: "/case-studies/travelsouls-logo.png",
  "meta-storyteller": "/case-studies/meta-storyteller-logo.png",
  "geo-product-discovery": "/case-studies/geo-logo.png",
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = getCaseStudy(params.slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} — Sabyasachi Patro`,
    description: study.oneLiner,
  };
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-hairline py-10 first:border-t-0 first:pt-0 md:py-12">
      <h2 className="font-display text-2xl text-paper md:text-3xl">
        {title}
      </h2>

      <div className="mt-5">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="relative max-w-prose pl-6 leading-relaxed text-paper"
        >
          <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-signalink" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudy(params.slug);

  if (!study) {
    notFound();
  }

  const imagePath = imageBySlug[study.slug];
  const logoPath = logoBySlug[study.slug];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-paper"
      >
        <ArrowLeft size={14} />
        All case studies
      </Link>

      <header className="mt-10">
        <div className="grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div>
            {logoPath ? (
              <div className="mb-6 flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-hairline bg-white p-2">
                <Image
                  src={logoPath}
                  alt={`${study.title} logo`}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                />
              </div>
            ) : null}

            <div className="mb-6 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-hairline px-2.5 py-1 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-4xl leading-tight text-paper md:text-6xl">
              {study.title}
            </h1>

            <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
              {study.description}
            </p>

            {study.prototypeUrl ? (
              <a
                href={study.prototypeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-signal px-6 py-3 text-sm font-medium text-onsignal transition-opacity hover:opacity-90"
              >
                View prototype
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <span className="mt-8 inline-flex border border-hairline px-6 py-3 text-sm text-muted">
                Prototype in progress
              </span>
            )}
          </div>

          <div className="flex items-center justify-center overflow-hidden border border-hairline bg-surface p-3">
            {imagePath ? (
              <Image
                src={imagePath}
                alt={`${study.title} project preview`}
                width={1200}
                height={900}
                sizes="(max-width: 768px) 100vw, 42vw"
                className="h-auto w-full object-contain object-center"
                priority
              />
            ) : (
              <div className="flex min-h-[280px] w-full items-center justify-center p-8 text-center text-sm text-muted md:min-h-[360px]">
                Project preview coming soon
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="mt-16 md:mt-24">
        {(study.primaryUsers || study.secondaryUsers) && (
          <Section title="Who this is for">
            <div className="grid gap-6 md:grid-cols-2">
              {study.primaryUsers && (
                <div className="border border-hairline p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Primary users
                  </p>

                  <p className="mt-3 leading-relaxed text-paper">
                    {study.primaryUsers}
                  </p>
                </div>
              )}

              {study.secondaryUsers && (
                <div className="border border-hairline p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">
                    Secondary users
                  </p>

                  <p className="mt-3 leading-relaxed text-paper">
                    {study.secondaryUsers}
                  </p>
                </div>
              )}
            </div>
          </Section>
        )}

        {study.problem && (
          <Section title="Problem">
            <p className="max-w-prose leading-relaxed text-paper">
              {study.problem}
            </p>
          </Section>
        )}

        {study.research && study.research.length > 0 && (
          <Section title="Research & insight">
            <BulletList items={study.research} />
          </Section>
        )}

        {study.journey && study.journey.length > 0 && (
          <Section title="User journey">
            <ol className="space-y-6">
              {study.journey.map((step, index) => (
                <li key={step.stage} className="flex gap-5">
                  <span className="font-display text-lg text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="max-w-prose">
                    <h3 className="text-paper">{step.stage}</h3>

                    <p className="mt-2 leading-relaxed text-muted">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {study.opportunities && study.opportunities.length > 0 && (
          <Section title="Opportunities">
            <BulletList items={study.opportunities} />
          </Section>
        )}

        {study.solution && study.solution.length > 0 && (
          <Section title="Solution">
            <BulletList items={study.solution} />
          </Section>
        )}

        {study.highlights && study.highlights.length > 0 && (
          <Section title="What it includes">
            <BulletList items={study.highlights} />
          </Section>
        )}

        {study.mvp && study.mvp.length > 0 && (
          <Section title="MVP">
            <BulletList items={study.mvp} />
          </Section>
        )}

        {study.metrics && study.metrics.length > 0 && (
          <Section title="Metrics">
            <div className="space-y-4">
              {study.metrics.map((metric) => (
                <div
                  key={metric.metric}
                  className="border border-hairline p-5"
                >
                  <span className="inline-flex border border-hairline px-2 py-1 text-xs text-muted">
                    {metric.type === "north star"
                      ? "North star"
                      : "Supporting"}
                  </span>

                  <p className="mt-3 max-w-prose leading-relaxed text-paper">
                    {metric.metric}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {study.rollout && study.rollout.length > 0 && (
          <Section title="Rollout">
            <BulletList items={study.rollout} />
          </Section>
        )}

        {study.risks && study.risks.length > 0 && (
          <Section title="Risks & open questions">
            <BulletList items={study.risks} />
          </Section>
        )}

        {study.assumptionsNote && (
          <div className="mt-4 border-l border-signalink pl-6">
            <p className="max-w-prose text-sm leading-relaxed text-muted">
              {study.assumptionsNote}
            </p>
          </div>
        )}
      </div>

      <div className="mt-16 border-t border-hairline pt-10">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm text-paper transition-colors hover:text-signalink"
        >
          <ArrowLeft size={14} />
          Back to all case studies
        </Link>
      </div>
    </main>
  );
}