import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudyCard({
  study,
  large = false,
}: {
  study: CaseStudy;
  large?: boolean;
}) {
  return (
    <div
      className={`flex flex-col justify-between border border-hairline p-6 transition-colors duration-200 hover:border-signalink md:p-8 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div>
        <div className="flex flex-wrap gap-2">
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
          className={`mt-5 font-display text-paper ${
            large ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {study.title}
        </h3>
        <p className="mt-3 max-w-prose text-muted">{study.oneLiner}</p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
        <Link
          href={`/case-studies/${study.slug}`}
          className="group inline-flex items-center gap-1.5 text-paper hover:text-signalink"
        >
          Read case study
          <ArrowUpRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>

        {study.prototypeUrl ? (
          <a
            href={study.prototypeUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 text-muted hover:text-signalink"
          >
            View prototype
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        ) : (
          <span className="text-muted/60">Prototype in progress</span>
        )}
      </div>
    </div>
  );
}
