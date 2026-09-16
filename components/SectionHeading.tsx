export default function SectionHeading({
  title,
  id,
  subtitle,
}: {
  title: string;
  id?: string;
  subtitle?: string;
}) {
  return (
    <div id={id} className="mb-10 scroll-mt-24 md:mb-14">
      <h2 className="font-display text-3xl text-paper md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-prose text-muted">{subtitle}</p>
      )}
    </div>
  );
}
