export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
      </div>

      {/* Vertical red line */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#e30000]/50 to-transparent animate-flicker" />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e30000] to-transparent" />

      {/* Corner brackets */}
      <div className="absolute top-24 left-8 md:left-16 w-8 h-8 border-t border-l border-[#e30000]/40" />
      <div className="absolute bottom-16 right-8 md:right-16 w-8 h-8 border-b border-r border-[#e30000]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full pb-20">

        <div className="animate-fade-up delay-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-[#e30000]" />
            <span className="text-[#e30000] text-xs tracking-[0.5em] uppercase font-mono">
              Meisterbetrieb · Seit 2012
            </span>
          </div>
        </div>

        <h1
          className="font-display font-black leading-[0.88] mb-8 animate-fade-up delay-2"
          style={{ fontSize: "clamp(3.5rem, 11vw, 10rem)" }}
        >
          <span className="block text-white">FOR THE</span>
          <span className="block text-[#e30000] animate-flicker">PILOTS</span>
          <span className="block text-zinc-600">AMONG THE</span>
          <span className="block text-white">DRIVERS.</span>
        </h1>

        <div className="animate-fade-up delay-3">
          <p className="text-zinc-400 text-lg max-w-lg mb-10 leading-relaxed">
            360° Automobil-Dienstleistungen unter einem Dach —
            Wartung, Reparatur, Leistungssteigerung, Individual.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#e30000] text-white font-display font-bold tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
            >
              Leistungen
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-zinc-400 font-display font-bold tracking-widest uppercase text-sm hover:border-white/40 hover:text-white transition-all"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

      {/* Bottom data strip */}
      <div className="absolute bottom-0 left-0 right-0 h-12 flex items-center px-8 md:px-16 gap-8 overflow-hidden border-t border-white/5 bg-black/20">
        {["Chiptuning", "TÜV & AU", "Karosserie", "Leistungsmessung", "360° Service", "Motorsport"].map((s) => (
          <span key={s} className="text-xs tracking-widest text-zinc-700 uppercase font-mono whitespace-nowrap">{s}</span>
        ))}
      </div>
    </section>
  );
}
