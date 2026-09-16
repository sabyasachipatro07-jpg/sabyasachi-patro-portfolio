import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About — Sabyasachi Patro",
  description:
    "The story behind a transition from VFX and creative production into product management.",
};

const transferable = [
  {
    title: "Problem-solving under real constraints",
    detail:
      "VFX work rarely has a clean brief — a shot has to land within a technical spec, a deadline, and a director's changing notes, all at once. Product problems show up the same way: ambiguous, constrained, and rarely solved on the first pass.",
  },
  {
    title: "Reading complex, multi-step workflows",
    detail:
      "A single frame passes through modeling, texturing, lighting, and compositing before anyone sees it. Understanding how a change in one stage ripples through the others is the same skill as mapping a user journey or a system's dependencies.",
  },
  {
    title: "Cross-functional collaboration",
    detail:
      "Texture and look-development work sits between art direction and technical pipeline — translating creative intent into something a render engine can actually produce, and pipeline constraints back into terms an artist can act on.",
  },
  {
    title: "Creative and analytical thinking",
    detail:
      "Look development is equal parts craft judgment (does this read as correct) and technical reasoning (why doesn't it render correctly) — the same back-and-forth product work asks for between user needs and what's buildable.",
  },
  {
    title: "Attention to detail, under deadline",
    detail:
      "A texture map with a visible seam ships broken, no matter how good the reasoning behind it was. That standard — correct and on time, not one or the other — carries directly into product delivery.",
  },
  {
    title: "Learning new tools quickly",
    detail:
      "Studios change pipelines and software versions often. Picking up a new tool fast enough to stay productive is a habit, not a one-time skill — the same habit that's made picking up product and AI tooling straightforward.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
      <h1 className="font-display text-4xl text-paper md:text-5xl">About</h1>

      <div className="mt-8 space-y-6 text-lg leading-relaxed text-paper">
        <p>
          I spent five-plus years as a Texture & Look Development artist in
          film and animation — work that lives or dies on problem-solving
          inside real constraints: tight deadlines, exacting technical specs,
          and a dozen other departments whose work has to line up with yours.
        </p>
        <p className="text-muted">
          Product management is a deliberate evolution of that same instinct,
          applied to a different kind of problem: understanding what a user
          actually needs, and building the smallest useful thing that gets
          them there. It isn&apos;t a departure from the craft-and-constraints
          mindset I built in VFX — it&apos;s the same mindset, pointed at
          products instead of frames.
        </p>
        <p className="text-muted">
          To make that transition deliberately rather than informally, I
          completed the Product Management with Generative & Agentic AI
          program at BITS School of Management (BITSoM), working through
          product strategy, user research, prioritization, product metrics,
          Agile methodologies, and AI-powered product development. Alongside
          that, I&apos;m building a portfolio of case studies and working
          prototypes — some self-directed, one an active team capstone — to
          put that thinking into practice rather than leave it theoretical.
        </p>
      </div>

      <div className="mt-16">
        <SectionHeading title="What carries over" />
        <div className="grid gap-8 md:grid-cols-2">
          {transferable.map((item) => (
            <div key={item.title} className="border-t border-hairline pt-5">
              <h3 className="font-display text-xl text-paper">
                {item.title}
              </h3>
              <p className="mt-2 text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
