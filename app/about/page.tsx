import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — Sabyasachi Patro",
  description:
    "Learn about Sabyasachi Patro's transition from VFX and creative production into product management and applied AI.",
};

const transferable = [
  {
    title: "Problem-solving under constraints",
    detail:
      "VFX work required solving complex problems within strict deadlines, technical requirements, and changing creative direction. I bring the same structured approach to understanding and solving product problems.",
  },
  {
    title: "Understanding complex workflows",
    detail:
      "Working across modeling, texturing, lighting, rendering, and compositing taught me to understand how individual steps connect and how changes in one stage affect the overall workflow.",
  },
  {
    title: "Cross-functional collaboration",
    detail:
      "Texture and look-development work required translating creative direction into technically achievable results while collaborating with artists, supervisors, and pipeline teams.",
  },
  {
    title: "Creative and analytical thinking",
    detail:
      "My work combined visual judgment with technical investigation. I learned to evaluate both the user-facing result and the underlying process needed to achieve it.",
  },
  {
    title: "Execution and attention to detail",
    detail:
      "Delivering production-ready assets required accuracy, consistency, iteration, and ownership—often under tight deadlines and changing requirements.",
  },
  {
    title: "Learning tools quickly",
    detail:
      "Adapting to new software, pipelines, and production workflows developed my ability to learn quickly and stay effective in changing environments.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <div className="max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-[0.24em] text-signal">
          About Me
        </p>

        <h1 className="mt-5 font-display text-4xl leading-tight text-paper md:text-5xl">
          Why Product Management?
        </h1>

        <div className="mt-8 space-y-6 text-lg leading-relaxed">
          <p className="text-paper">
            I am an aspiring Associate Product Manager transitioning from
            more than five years of experience in VFX and creative production.
            My background has involved solving complex problems, understanding
            interconnected workflows, collaborating across teams, and
            delivering high-quality work within real-world constraints.
          </p>

          <p className="text-muted">
            Product Management feels like a natural next step because it
            combines many of the things I enjoy: understanding problems,
            exploring user needs, simplifying complex workflows, prioritizing
            solutions, and turning ideas into useful experiences.
          </p>

          <p className="text-muted">
            To build a stronger foundation for this transition, I completed
            the Product Management with Generative & Agentic AI program at
            BITS School of Management. The program helped me develop practical
            knowledge of product strategy, user research, prioritization,
            product metrics, Agile methodologies, and AI-powered product
            development.
          </p>

          <p className="text-muted">
            I am now applying that learning through product case studies and
            working prototypes. My focus is on building practical,
            AI-powered product experiences that begin with a clear problem
            and move through research, feature definition, prioritization,
            prototyping, and measurable outcomes.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading title="What I bring from VFX" />

        <div className="grid gap-8 md:grid-cols-2">
          {transferable.map((item) => (
            <div key={item.title} className="border-t border-hairline pt-5">
              <h2 className="font-display text-xl text-paper">
                {item.title}
              </h2>

              <p className="mt-3 leading-relaxed text-muted">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-hairline pt-8">
        <h2 className="font-display text-2xl text-paper">
          What I am building toward
        </h2>

        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          I am looking for an opportunity to contribute as an Associate
          Product Manager, learn from experienced product teams, and help
          build products that are useful, intuitive, and grounded in real
          user needs.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center border border-hairline px-5 py-3 text-sm text-paper transition-colors hover:border-signalink hover:text-signalink"
          >
            Explore Case Studies
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center bg-signal px-5 py-3 text-sm font-medium text-onsignal transition-opacity hover:opacity-90"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}