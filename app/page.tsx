import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Sabyasachi Patro — Aspiring Associate Product Manager",
  description:
    "Product portfolio of Sabyasachi Patro, featuring product case studies, AI-powered prototypes, and practical product thinking.",
};

export default function Home() {
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

            <div className="max-w-prose space-y-6 text-lg leading-relaxed">
              <p className="text-paper">
                I’m an aspiring Associate Product Manager focused on building
                useful products that solve real user problems. I enjoy
                understanding user needs, breaking down complex challenges, and
                turning ideas into practical product experiences.
              </p>

              <p className="text-muted">
                Through product case studies and AI-powered prototypes, I’m
                developing my skills in product discovery, prioritization, MVP
                definition, and product metrics. I’m looking forward to
                contributing to meaningful products while learning from
                experienced product teams.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm text-paper hover:text-signalink"
            >
              Read more about me
              <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="border-l border-hairline pl-8">
            <p className="mb-4 text-sm text-muted">What I’m focused on</p>

            <ul className="space-y-3 text-paper">
              {[
                "Product discovery and problem definition",
                "User journeys and pain-point analysis",
                "Feature prioritization and MVP thinking",
                "AI-powered product prototypes",
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
    </>
  );
}