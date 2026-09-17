import type { Metadata } from "next";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Sabyasachi Patro",
  description:
    "Product case studies exploring real-world problems through product discovery, prioritization, AI-powered solutions, and working prototypes.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-signal">
          Selected Product Work
        </p>

        <h1 className="mt-5 font-display text-4xl leading-tight text-paper md:text-5xl">
          Case Studies
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Exploring real-world problems through product discovery, user
          journeys, feature prioritization, MVP thinking, and AI-powered
          prototypes. Each case study focuses on the decisions behind the
          product—not just the final output.
        </p>
      </div>

      <div className="mt-14">
        <CaseStudiesGrid studies={caseStudies} />
      </div>
    </div>
  );
}