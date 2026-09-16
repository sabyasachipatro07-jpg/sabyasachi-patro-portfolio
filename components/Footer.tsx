import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built to think in
          public.
        </p>
        <div className="flex gap-6">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-paper">
            Email
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
