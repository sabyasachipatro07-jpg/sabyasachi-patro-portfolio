"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--color-paper)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-paper)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:grid-cols-[1fr_360px] md:px-10 md:py-32"
      >
        <div>
          <motion.div
            variants={item}
            className="mb-8 inline-flex items-center gap-2 border border-hairline px-3 py-1.5 text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Open to Associate Product Manager opportunities
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display max-w-4xl text-balance text-4xl leading-[1.1] text-paper md:text-6xl"
          >
            From crafting worlds in VFX to building products that solve real
            problems.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg text-muted"
          >
            An aspiring Associate Product Manager with 5+ years of experience
            in creative production, a foundation in product management and
            generative AI, and a growing portfolio of practical AI-powered
            product solutions.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 bg-signal px-6 py-3 text-sm font-medium text-onsignal transition-opacity duration-200 hover:opacity-90"
            >
              View Case Studies
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 border border-hairline px-6 py-3 text-sm text-paper transition-colors duration-200 hover:border-signalink hover:text-signalink"
            >
              Read My Story
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto w-full max-w-[360px]"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-hairline bg-panel">
            <Image
              src="/profile-picture.png"
              alt="Portrait of Sabyasachi Patro"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 360px"
              className="object-cover"
            />
          </div>

          <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-signal opacity-70" />
          <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 border-r border-t border-signal opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}