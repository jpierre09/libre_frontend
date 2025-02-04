interface NavigationProps {
  items: string[];
  alignment?: "start" | "center" | "end";
}

export default function Navigation({ items, alignment = "start" }: NavigationProps) {
  const alignmentClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
  };

  return (
    <nav className={`flex gap-4 sm:gap-6 ${alignmentClasses[alignment]} w-full`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={`/${item.toLowerCase()}`}
          className="text-sm sm:text-base font-medium hover:text-gray-300 transition-all duration-300 whitespace-nowrap"
          aria-label={`Ir a la sección de ${item}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}
