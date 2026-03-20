const services = [
  {
    number: "01",
    title: "Wartung & Inspektion",
    description: "TÜV & AU, Räder & Reifen, Fehlerdiagnostik, Fahrzeugaufbereitung, Autoglas, Elektrofahrzeuge — echter 360° Service.",
    tags: ["TÜV & AU", "Räder & Reifen", "Fehlerdiagnostik", "Autoglas"],
  },
  {
    number: "02",
    title: "Reparaturen",
    description: "Vom Lackdoktor über Unfallinstandsetzung bis zur Restauration von Young- und Oldtimern.",
    tags: ["Karosseriebau", "Unfallinstandsetzung", "Lackierung"],
  },
  {
    number: "03",
    title: "Leistungssteigerung",
    description: "Chiptuning, Motorenbearbeitung, Motorsport-Umbauten und Leistungsmessung. Von Audi bis Zonda.",
    tags: ["Chiptuning", "Motorenbearbeitung", "Motorsport"],
  },
  {
    number: "04",
    title: "Zubehör & Tuning",
    description: "Fahrwerk & Bremsen, Auspuffanlagen, Felgen, Karosserieteile, Auto-Hifi & Multimedia.",
    tags: ["Fahrwerk", "Auspuff", "Felgen", "Auto-Hifi"],
  },
  {
    number: "05",
    title: "Individual",
    description: "Sonderanfertigungen und ausgefallenste Spezialumbauten. Wenn andere sagen es geht nicht.",
    tags: ["Sonderanfertigungen", "Spezialumbauten"],
  },
  {
    number: "06",
    title: "Marine Tuning",
    description: "Mehr Leistung für Boote. Wasser leistet mehr Widerstand als Asphalt — da zählt jedes PS.",
    tags: ["Bootsmotor", "Marine", "Leistungsoptimierung"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-20 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px bg-[#e30000]" />
              <span className="text-[#e30000] text-xs tracking-[0.5em] uppercase font-mono">Leistungen</span>
            </div>
            <h2 className="font-display font-black text-5xl md:text-7xl text-white leading-none">
              WAS WIR<br />FÜR SIE TUN
            </h2>
          </div>
          <span className="hidden md:block font-mono text-zinc-800 text-6xl font-black">06</span>
        </div>

        {/* Services list */}
        <div className="divide-y divide-white/5">
          {services.map((s, i) => (
            <div
              key={s.number}
              className="group grid md:grid-cols-[80px_1fr_1fr_auto] gap-6 md:gap-12 items-start py-8 hover:bg-white/[0.02] transition-colors px-4 -mx-4 cursor-default"
            >
              <span className="font-mono text-[#e30000]/30 text-2xl font-black group-hover:text-[#e30000]/60 transition-colors">
                {s.number}
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-white group-hover:text-[#e30000] transition-colors leading-tight">
                {s.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {s.description}
              </p>
              <div className="flex flex-wrap gap-1.5 md:justify-end">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-widest text-zinc-700 border border-white/5 px-2 py-0.5 uppercase font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
