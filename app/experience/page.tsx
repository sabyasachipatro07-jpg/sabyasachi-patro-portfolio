import type { Metadata } from "next";
import Image from "next/image";
import { experience } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Experience — Sabyasachi Patro",
  description:
    "Professional experience, transferable skills, and creative-production background supporting a transition into product management.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-signal">
          Professional Background
        </p>

        <h1 className="mt-5 font-display text-4xl leading-tight text-paper md:text-5xl">
          Experience
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted">
          My professional experience has developed my ability to understand
          complex workflows, solve problems under constraints, collaborate
          across teams, and deliver high-quality outcomes. I’m now applying
          these strengths to product discovery, user problems, and
          AI-powered product development.
        </p>
      </div>

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
                <p className="mt-4 text-sm leading-relaxed text-paper">
                  Projects: {job.projects.join(", ")}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-10 border-l border-signal pl-6">
        <p className="text-muted">
          I’m building on this foundation as I transition into Product
          Management, with a focus on understanding user needs, improving
          workflows, prioritizing solutions, and creating useful products.
        </p>
      </div>
    </div>
  );
}