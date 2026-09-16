import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";
import { education, experience, siteConfig, skillGroups } from "@/lib/site-config";

export default function Home() {
  const featured = caseStudies.filter((cs) => cs.featured);
  const latestRole = experience.find((job) => job.isLatest) ?? experience[0];

  return (
    <>
      <Hero />

      {/* About preview */}
      <section
        id="about"
        className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28"
      >
        <div className="grid gap-10 md:grid-cols-3 md:items-start">
          <div className="md:col-span-2">
            <SectionHeading title="About" />

            <p className="max-w-prose text-lg leading-relaxed text-paper">
              I spent five-plus years as a Texture & Look Development artist
              in film and animation — work that lives or dies on
              problem-solving inside real constraints. Product management is
              a deliberate evolution of that same instinct, applied to a
              different kind of problem: understanding what a user actually
              needs, and building the smallest useful thing that gets them
              there.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-paper hover:text-signalink"
            >
              Read my full story
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="border-l border-hairline pl-8">
            <p className="mb-4 text-sm text-muted">What carries over</p>

            <ul className="space-y-3 text-paper">
              {[
                "Problem-solving under real constraints",
                "Cross-functional collaboration",
                "Creative and analytical thinking",
                "Attention to detail, under deadline",
              ].map((item) => (
                <li
                  key={item}
                  className="border-b border-hairline pb-3 last:border-none"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experience preview */}
      <section
        id="experience"
        className="border-t border-hairline bg-panel/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeading title="Experience" />

          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-display text-2xl text-paper">
              {latestRole.role}
            </h3>

            <span className="border border-signaldim px-2 py-0.5 text-xs text-signalink">
              Most recent
            </span>
          </div>

          <p className="mt-1 text-muted">{latestRole.company}</p>

          <p className="mt-5 max-w-prose text-paper">
            Building on five-plus years in Texture & Look Development across
            film and animation — solving problems inside real constraints,
            now applied to user problems, workflows, and products.
          </p>

          <Link
            href="/experience"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-paper hover:text-signalink"
          >
            View full experience
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* Featured case studies */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
          <SectionHeading
            title="Featured case studies"
            subtitle="Product thinking applied to healthcare workflows, mobility, and multi-agent AI."
          />

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-paper hover:text-signalink"
          >
            View all case studies
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid gap-px overflow-hidden bg-hairline md:grid-cols-2">
          <div className="bg-ink md:col-span-2">
            <CaseStudyCard study={featured[0]} large />
          </div>

          {featured.slice(1).map((study) => (
            <div key={study.slug} className="bg-ink">
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-hairline bg-panel/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <SectionHeading title="Capabilities" />

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-lg text-paper">
                  {group.title}
                </h3>

                <ul className="mt-4 space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <SectionHeading title="Education" />

        <div className="grid gap-8 md:grid-cols-2">
          {education.map((ed) => (
            <div
              key={ed.institution}
              className="border border-hairline p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-hairline bg-panel p-2">
                  <Image
                    src={ed.logo}
                    alt={`${ed.institution} logo`}
                    width={64}
                    height={64}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-xl text-paper">
                    {ed.institution}
                  </h3>

                  <p className="mt-1 text-muted">{ed.program}</p>
                  <p className="mt-1 text-sm text-muted">{ed.dateRange}</p>
                </div>
              </div>

              {ed.focus.length > 0 && (
                <p className="mt-5 text-sm text-paper">
                  {ed.focus.join(" · ")}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <h2 className="font-display max-w-2xl text-balance text-3xl text-paper md:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mt-6 max-w-prose text-lg text-muted">
            I&apos;m open to Associate Product Manager opportunities, product
            collaborations, and conversations around AI-powered products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 bg-signal px-6 py-3 text-sm font-medium text-onsignal transition-opacity duration-200 hover:opacity-90"
            >
              <Mail size={15} />
              Email me
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-hairline px-6 py-3 text-sm text-paper transition-colors duration-200 hover:border-signalink hover:text-signalink"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-hairline px-6 py-3 text-sm text-paper transition-colors duration-200 hover:border-signalink hover:text-signalink"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}