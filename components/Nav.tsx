"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="Sabyasachi Patro — Home"
          className="group relative flex h-10 w-[190px] items-center overflow-hidden"
        >
          {/* SP Logo */}
<span className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center">
  <Image
    src="/SP.png"
    alt="SP logo"
    width={40}
    height={40}
    priority
    className="h-10 w-10 object-contain"
  />
</span>

{/* Full name revealed on hover */}
<span className="absolute left-12 translate-x-4 whitespace-nowrap font-display text-lg tracking-tight text-paper opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
  | Sabyasachi Patro
</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm transition-colors duration-200 ${
                  isActive
                    ? "text-signalink"
                    : "text-muted hover:text-paper"
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-signal" />
                )}
              </Link>
            );
          })}

          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />

          <button
            className="text-paper"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hairline px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base transition-colors duration-200 ${
                    isActive
                      ? "text-signalink"
                      : "text-muted hover:text-paper"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}