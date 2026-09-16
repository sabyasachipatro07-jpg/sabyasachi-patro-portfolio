import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-32 md:px-10">
      <h1 className="font-display text-4xl text-paper">Page not found</h1>
      <p className="mt-4 max-w-prose text-muted">
        This page doesn&apos;t exist. It may have been moved or the link may
        be out of date.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1.5 border border-hairline px-6 py-3 text-sm text-paper hover:border-signalink hover:text-signalink"
      >
        Back to home
      </Link>
    </div>
  );
}
