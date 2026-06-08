const ITEMS = [
  "Full Stack Development",
  "UI/UX Design",
  "API Integration",
  "Database Design",
  "Performance Optimization",
  "Mobile Responsive",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-brutal-black border-b-4 border-brutal-black overflow-hidden py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-mono font-bold text-sm uppercase tracking-widest text-brutal-yellow px-8">
              {item}
            </span>
            <span className="text-brutal-orange font-bold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
