import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — Sabyasachi Patro`,
    description: study.oneLiner,
  };
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-hairline py-10 first:border-none first:pt-0">
      <h2 className="font-display text-2xl text-paper">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function CaseStudyDetail({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-paper"
      >
        <ArrowLeft size={14} />
        All case studies
      </Link>

      <div className="mt-8 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="border border-hairline px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="font-display mt-5 text-4xl text-paper md:text-5xl">
        {study.title}
      </h1>
      <p className="mt-5 max-w-prose text-lg text-muted">
        {study.description}
      </p>

      {study.prototypeUrl ? (
        <a
          href={study.prototypeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-1.5 bg-signal px-6 py-3 text-sm font-medium text-onsignal transition-opacity duration-200 hover:opacity-90"
        >
          View Prototype
          <ArrowUpRight size={15} />
        </a>
      ) : (
        <p className="mt-8 inline-flex items-center gap-1.5 border border-hairline px-6 py-3 text-sm text-muted">
          Prototype in progress
        </p>
      )}

      <div className="mt-4">
        {(study.primaryUsers || study.secondaryUsers) && (
          <Block title="Who this is for">
            {study.primaryUsers && (
              <p className="text-paper">
                <span className="text-muted">Primary users — </span>
                {study.primaryUsers}
              </p>
            )}
            {study.secondaryUsers && (
              <p className="mt-2 text-paper">
                <span className="text-muted">Secondary users — </span>
                {study.secondaryUsers}
              </p>
            )}
          </Block>
        )}

        {study.problem && (
          <Block title="Problem">
            <p className="max-w-prose leading-relaxed text-paper">
              {study.problem}
            </p>
          </Block>
        )}

        {study.research && study.research.length > 0 && (
          <Block title="Research & insight">
            <ul className="space-y-3">
              {study.research.map((item) => (
                <li key={item} className="max-w-prose leading-relaxed text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {study.journey && study.journey.length > 0 && (
          <Block title="User journey">
            <ol className="space-y-4">
              {study.journey.map((step, i) => (
                <li key={step.stage} className="flex gap-4">
                  <span className="font-display w-8 shrink-0 text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-paper">{step.stage}</p>
                    <p className="mt-1 text-sm text-muted">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>
        )}

        {study.opportunities && study.opportunities.length > 0 && (
          <Block title="Opportunities">
            <ul className="space-y-3">
              {study.opportunities.map((item) => (
                <li key={item} className="max-w-prose leading-relaxed text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {study.solution && study.solution.length > 0 && (
          <Block title="Solution">
            <ul className="space-y-3">
              {study.solution.map((item) => (
                <li key={item} className="max-w-prose leading-relaxed text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {study.highlights && study.highlights.length > 0 && (
          <Block title="What it includes">
            <ul className="space-y-3">
              {study.highlights.map((item) => (
                <li key={item} className="max-w-prose leading-relaxed text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {study.mvp && study.mvp.length > 0 && (
          <Block title="MVP">
            <ul className="space-y-3">
              {study.mvp.map((item) => (
                <li key={item} className="max-w-prose leading-relaxed text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {study.metrics && study.metrics.length > 0 && (
          <Block title="Metrics">
            <ul className="space-y-3">
              {study.metrics.map((m) => (
                <li key={m.metric} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 border border-hairline px-2 py-0.5 text-xs text-muted">
                    {m.type === "north star" ? "North star" : "Supporting"}
                  </span>
                  <span className="max-w-prose text-paper">{m.metric}</span>
                </li>
              ))}
            </ul>
          </Block>
        )}

        {study.rollout && study.rollout.length > 0 && (
          <Block title="Rollout">
            <ul className="space-y-3">
              {study.rollout.map((item) => (
                <li key={item} className="max-w-prose leading-relaxed text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {study.risks && study.risks.length > 0 && (
          <Block title="Risks & open questions">
            <ul className="space-y-3">
              {study.risks.map((item) => (
                <li key={item} className="max-w-prose leading-relaxed text-paper">
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {study.assumptionsNote && (
          <div className="mt-10 border-l border-signalink pl-6">
            <p className="max-w-prose text-sm text-muted">
              {study.assumptionsNote}
            </p>
          </div>
        )}
      </div>

      <div className="mt-16 border-t border-hairline pt-10">
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm text-paper hover:text-signalink"
        >
          <ArrowLeft size={14} />
          Back to all case studies
        </Link>
      </div>
    </div>
  );
}
