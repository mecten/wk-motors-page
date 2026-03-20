const items = [
  "Chiptuning", "//", "Motorenbearbeitung", "//", "Karosseriebau", "//",
  "Leistungsmessung", "//", "TÜV & AU", "//", "Fehlerdiagnostik", "//",
  "Räder & Reifen", "//", "Fahrwerk & Bremsen", "//", "Auto-Hifi", "//",
  "Motorsport", "//", "Sonderanfertigungen", "//", "360° Service", "//",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-[#0e0e0e] py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-5 text-xs tracking-[0.3em] uppercase font-mono ${
              item === "//" ? "text-[#e30000]/40" : "text-zinc-600"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
