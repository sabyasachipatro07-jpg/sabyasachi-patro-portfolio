"use client";

import { useMemo, useState } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import type { CaseStudy } from "@/lib/case-studies";

export default function CaseStudiesGrid({ studies }: { studies: CaseStudy[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(studies.map((s) => s.category)))],
    [studies]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? studies : studies.filter((s) => s.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter case studies by category">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`border px-4 py-2 text-sm transition-colors duration-200 ${
              active === cat
                ? "border-signalink text-signalink"
                : "border-hairline text-muted hover:text-paper"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-px overflow-hidden bg-hairline md:grid-cols-2">
        {filtered.map((study) => (
          <div key={study.slug} className="bg-ink">
            <CaseStudyCard study={study} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted">
          No case studies in this category yet.
        </p>
      )}
    </div>
  );
}
