const stats = [
  { value: "12+", label: "Jahre Erfahrung", sub: "seit 2012" },
  { value: "360°", label: "Service", sub: "unter einem Dach" },
  { value: "4,5t", label: "Hebebühnen-Last", sub: "max. Kapazität" },
  { value: "∞", label: "Lösungen", sub: "für jeden Fall" },
];

const tuningSteps = [
  { step: "01", title: "Anfrage", desc: "Fahrzeug und Wunsch nennen — wir erstellen ein unverbindliches Angebot." },
  { step: "02", title: "Diagnose", desc: "3D-Achsmessung und modernste Fehlerdiagnostik. Wir wissen was Ihr Fahrzeug braucht." },
  { step: "03", title: "Umsetzung", desc: "Chiptuning bis Motorsport-Umbau — präzise ausgeführt von unseren Meistern." },
  { step: "04", title: "Messung", desc: "Rollenprüfstand. Messbar mehr Leistung — garantiert." },
];

export default function Performance() {
  return (
    <section id="performance" className="bg-[#0e0e0e]">

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/5">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-8 py-12 scanline ${i < 3 ? "border-r border-white/5" : ""}`}
          >
            <div className="font-display font-black text-5xl md:text-6xl text-[#e30000] mb-1 leading-none">
              {s.value}
            </div>
            <div className="text-white font-display font-bold text-lg">{s.label}</div>
            <div className="text-zinc-600 text-xs tracking-widest uppercase font-mono mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-px bg-[#e30000]" />
              <span className="text-[#e30000] text-xs tracking-[0.5em] uppercase font-mono">Leistungssteigerung</span>
            </div>
            <h2 className="font-display font-black text-5xl md:text-7xl text-white leading-none mb-8">
              MEHR<br />
              <span className="text-zinc-600">POWER.</span><br />
              MESSBAR.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Von Audi bis Zonda, von Alfa bis Zagato — Chiptuning, Motorenbearbeitung
              und Motorsport-Umbauten für nahezu alle Hersteller. Auch Bootsmotore.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed mb-10">
              Am Ende steht immer die Leistungsmessung auf dem Rollenprüfstand.
              Kein Versprechen ohne Beweis.
            </p>
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e30000] text-white font-display font-bold tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
            >
              Angebot anfragen
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Steps */}
          <div className="space-y-px">
            {tuningSteps.map((s) => (
              <div
                key={s.step}
                className="group relative flex gap-6 bg-[#131313] border border-white/5 p-6 hover:border-[#e30000]/20 transition-all"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-transparent group-hover:bg-[#e30000] transition-colors" />
                <span className="font-mono text-[#e30000]/30 text-xl font-black shrink-0 group-hover:text-[#e30000]/70 transition-colors">
                  {s.step}
                </span>
                <div>
                  <h4 className="font-display font-bold text-xl text-white mb-1">{s.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
