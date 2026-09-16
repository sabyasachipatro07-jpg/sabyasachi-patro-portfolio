import type { Metadata } from "next";
import CaseStudiesGrid from "@/components/CaseStudiesGrid";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Sabyasachi Patro",
  description:
    "Product case studies spanning AI healthcare tools, mobility decision support, multi-agent travel planning, and more.",
};

export default function CaseStudiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <h1 className="font-display text-4xl text-paper md:text-5xl">
        Case Studies
      </h1>
      <p className="mt-5 max-w-prose text-lg text-muted">
        Problems I chose to work through — some as a self-directed product
        exercise, one as an active team capstone. Each one shows the
        thinking, not just the output.
      </p>

      <div className="mt-14">
        <CaseStudiesGrid studies={caseStudies} />
      </div>
    </div>
  );
}
