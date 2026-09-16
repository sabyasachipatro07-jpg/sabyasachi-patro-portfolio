import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Skills — Sabyasachi Patro",
  description:
    "Product management, AI product development, creative production, and technical skills.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeading
        title="Capabilities"
        subtitle="A combination of product thinking, AI product development, and creative production experience."
      />

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h2 className="font-display text-xl text-paper">
              {group.title}
            </h2>

            <ul className="mt-5 space-y-3">
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
  );
}