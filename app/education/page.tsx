import type { Metadata } from "next";
import Image from "next/image";
import { education } from "@/lib/site-config";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Education — Sabyasachi Patro",
  description:
    "Academic background and professional product management education of Sabyasachi Patro.",
};

export default function EducationPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeading
        title="Education"
        subtitle="Academic background and professional product management education."
      />

      <div className="mt-12 space-y-px bg-hairline">
        {education.map((item) => (
          <article
            key={`${item.institution}-${item.program}`}
            className="bg-ink p-6 md:p-10"
          >
            <div className="grid gap-8 md:grid-cols-[120px_1fr] md:items-start">
              {/* Institution logo */}
              <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden border border-hairline bg-ink p-3">
                <Image
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  fill
                  sizes="96px"
                  className="object-contain p-3"
                />
              </div>

              {/* Education details */}
              <div>
                <p className="text-sm text-muted">{item.dateRange}</p>

                <h2 className="mt-3 font-display text-2xl text-paper md:text-3xl">
                  {item.program}
                </h2>

                <p className="mt-3 text-lg text-paper">
                  {item.institution}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.focus.map((skill) => (
                    <span
                      key={skill}
                      className="border border-hairline px-3 py-1.5 text-sm text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}