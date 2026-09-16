import type { Metadata } from "next";
import Image from "next/image";
import { experience } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Experience — Sabyasachi Patro",
  description:
    "Professional experience in Texture & Look Development across film and animation, and the transferable skills carried into product management.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <h1 className="font-display text-4xl text-paper md:text-5xl">
        Experience
      </h1>

      <p className="mt-5 max-w-prose text-lg text-muted">
        Five-plus years in Texture & Look Development across film and
        animation. The work itself was visual, but the skills it demanded —
        problem-solving, cross-team collaboration, workflow optimization,
        handling feedback, and delivering under deadline — are the ones I now
        bring to product management.
      </p>

      <ol className="mt-14 space-y-0">
        {experience.map((job, i) => (
          <li
            key={`${job.company}-${i}`}
            className="flex gap-6 border-b border-hairline py-8 first:pt-0 last:border-none"
          >
            <div className="w-10 shrink-0 font-display text-2xl text-muted md:w-16 md:text-3xl">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-hairline bg-panel p-2">
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={64}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="font-display text-xl text-paper md:text-2xl">
                      {job.role}
                    </h2>

                    {job.isLatest && (
                      <span className="border border-signaldim px-2 py-0.5 text-xs text-signalink">
                        Most recent
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-muted">{job.company}</p>
                  <p className="mt-1 text-sm text-muted">{job.dateRange}</p>
                </div>
              </div>

              {job.projects.length > 0 && (
                <p className="mt-4 text-sm text-paper">
                  Projects: {job.projects.join(", ")}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-10 max-w-prose border-l border-signal pl-6 text-muted">
        Building on production experience to solve user problems, design
        workflows, and create useful products.
      </p>
    </div>
  );
}