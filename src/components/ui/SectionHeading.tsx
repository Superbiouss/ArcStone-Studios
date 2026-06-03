interface SectionHeadingProps {
  title: string;
  accentWord?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  accentWord,
  subtitle,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!accentWord) {
      return <span>{title}</span>;
    }

    const parts = title.split(new RegExp(`(${accentWord})`, "i"));
    return parts.map((part, i) =>
      part.toLowerCase() === accentWord.toLowerCase() ? (
        <span key={i} className="text-accent">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-none">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-tight">
          {subtitle}
        </p>
      )}
    </div>
  );
}
