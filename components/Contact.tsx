"use client";

export default function Contact() {
  return (
    <section id="kontakt" className="py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <span className="text-xs tracking-[0.4em] uppercase text-[#e30000] font-mono">Kontakt</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
            Anfahrt & Kontakt
          </h2>
          <div className="mt-6 w-16 h-0.5 bg-[#e30000]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <div className="space-y-8">

            {/* Emblem + Adresse */}
            <div className="flex items-center gap-6 p-6 border border-white/5 bg-[#111]">
              <img
                src="http://wk-motors.de/wp-content/uploads/2014/06/logo-kontakt.jpg"
                alt="WK Motors"
                className="h-20 w-20 object-contain shrink-0"
              />
              <div>
                <p className="text-white font-bold">WK Motors GbR</p>
                <p className="text-zinc-400 text-sm mt-1">Benzstraße 11<br />61381 Friedrichsdorf</p>
                <p className="text-zinc-400 text-sm mt-1">
                  Tel: <a href="tel:+4960079395373" className="hover:text-[#e30000] transition-colors">06007 / 939 53 73</a><br />
                  Mobil: <a href="tel:+491512291825" className="hover:text-[#e30000] transition-colors">0151 / 229 11 825</a>
                </p>
                <p className="text-zinc-400 text-sm mt-1">
                  <a href="mailto:info@wk-motors.de" className="hover:text-[#e30000] transition-colors">info@wk-motors.de</a>
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase text-zinc-600 mb-2">Öffnungszeiten</p>
              <p className="text-zinc-400 text-sm">Mo – Fr 08:00 – 12:00 Uhr</p>
              <p className="text-zinc-400 text-sm">und 13:00 – 18:00 Uhr</p>
            </div>

            <div className="w-full h-px bg-white/5" />

            <div>
              <p className="text-xs tracking-widest uppercase text-zinc-600 mb-2">Telefon</p>
              <a
                href="tel:+4960079395373"
                className="text-3xl font-black text-white hover:text-[#e30000] transition-colors"
              >
                06007 / 939 53 73
              </a>
              <p className="text-zinc-500 text-sm mt-1">Rufen Sie uns jederzeit an — wir melden uns umgehend.</p>
            </div>

            <div className="w-full h-px bg-white/5" />

            <div>
              <p className="text-xs tracking-widest uppercase text-zinc-600 mb-2">Standort</p>
              <a
                href="https://www.google.com/maps/place/WK+Motors+GbR/@50.249975,8.6780167,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#e30000] transition-colors font-bold"
              >
                WK Motors GbR →
              </a>
              <p className="text-zinc-500 text-sm mt-1">Auf Google Maps öffnen</p>
            </div>

            <div className="w-full h-px bg-white/5" />

            {/* Map image */}
            <a
              href="https://www.google.com/maps/place/WK+Motors+GbR/@50.249975,8.6780167,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-white/5 hover:border-[#e30000]/30 transition-colors overflow-hidden"
            >
              <img
                src="https://wk-motors.de/wp-content/uploads/2023/12/Wk_Motors_Google_Maps.jpg"
                alt="WK Motors Standort"
                className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs tracking-widest uppercase text-zinc-600 block mb-2">Name *</label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e30000] transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-zinc-600 block mb-2">E-Mail *</label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e30000] transition-colors"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-zinc-600 block mb-2">Betreff</label>
              <input
                type="text"
                className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e30000] transition-colors"
                placeholder="Worum geht es?"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-zinc-600 block mb-2">Nachricht</label>
              <textarea
                rows={5}
                className="w-full bg-[#111] border border-white/10 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#e30000] transition-colors resize-none"
                placeholder="Ihre Nachricht..."
              />
            </div>
            <p className="text-zinc-600 text-xs leading-relaxed">
              Ich habe die Datenschutzerklärung zur Kenntnis genommen und stimme der Verarbeitung meiner Daten zur Bearbeitung der Kontaktanfrage zu.
            </p>
            <button
              type="submit"
              className="w-full py-4 bg-[#e30000] text-white font-bold tracking-widest uppercase text-sm hover:bg-red-700 transition-colors"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
