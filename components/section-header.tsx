interface SectionHeaderProps {
  title: string;
  color?: string;
  description?: string;
}

export default function SectionHeader({
  title,
  description,
  color = "pink",
}: SectionHeaderProps) {
  const colorSuffix = color === "white" ? "" : "-500";
  const colorClass = `${color}${colorSuffix}`;

  return (
    <div className="mb-16">
      <div className="flex items-center justify-center gap-8 px-16 mb-2">
        <div className={`flex-1 h-px bg-${colorClass}`} />
        <h2
          className={`text-xl md:text-2xl font-bold text-${colorClass} whitespace-nowrap`}
        >
          {title}
        </h2>
        <div className={`flex-1 h-px bg-${colorClass}`} />
      </div>
      {description && (
        <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center px-12">
          {description}
        </p>
      )}
    </div>
  );
}
