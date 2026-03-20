const equipment = [
  "4-Säulen Vermessungs-/Hebebühne bis 4,5 Tonnen",
  "Geoliner 670 Gold Lift – 3D-Achsmessgerät",
  "Consul 2-Säulen-Hebebühne Premium 4,0 Tonnen",
  "Rollenprüfstand für Leistungsmessung",
  "Modernste Fehlerdiagnostik-Systeme",
  "Klimaanlagenservice & Kältemittelrückgewinnung",
  "Ultraschall-Einspritzdüsenreinigung",
  "Räderwucht- und Reifenmontiermaschinen",
];

export default function Workshop() {
  return (
    <section id="werkstatt" className="bg-[#080808]">

      {/* Full-bleed photo banner */}
      <div className="relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?auto=format&fit=crop&w=1800&q=80"
          alt="WK Motors Werkstatt von innen"
          loading="lazy"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 md:px-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-px bg-[#e30000]" />
              <span className="text-[#e30000] text-xs tracking-[0.5em] uppercase font-mono">Werkstatt</span>
            </div>
            <h2 className="font-display font-black text-5xl md:text-7xl text-white leading-none">
              ZWEI DINGE<br />
              <span className="text-zinc-500">BRAUCHT QUALITÄT.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-20">

          <div>
            <p className="text-zinc-300 text-2xl font-display font-semibold mb-6 leading-snug">
              <span className="text-white">Know-how</span> und{" "}
              <span className="text-white">sehr gutes Werkzeug.</span>
            </p>
            <p className="text-zinc-500 leading-relaxed mb-6">
              Unserem hohen Qualitätsanspruch entsprechend haben wir unseren
              Meisterbetrieb nur mit modernsten Maschinen ausgestattet.
              Das Ergebnis: echter 360° Autoservice unter einem Dach.
            </p>
            <p className="text-zinc-600 leading-relaxed mb-10 text-sm border-l-2 border-[#e30000]/30 pl-4">
              „Sie rennen von Werkstatt zu Werkstatt und keiner findet den Fehler?
              Einfach anrufen — wir haben noch jedes Problem gelöst."
            </p>

            <div className="inline-block border border-white/10 px-6 py-4">
              <p className="text-xs tracking-widest uppercase text-zinc-600 font-mono mb-1">Zertifiziert</p>
              <p className="text-white font-display font-bold text-lg">KFZ-Meisterbetrieb</p>
            </div>
          </div>

          {/* Equipment */}
          <div className="divide-y divide-white/5 border border-white/5">
            {equipment.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors group">
                <div className="w-1 h-1 bg-[#e30000]/40 shrink-0 group-hover:bg-[#e30000] transition-colors" />
                <span className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
