export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="http://wk-motors.de/wp-content/uploads/2014/06/logo-kontakt.jpg"
            alt="WK Motors Emblem"
            className="h-10 w-10 object-contain opacity-70"
          />
          <img
            src="http://wk-motors.de/wp-content/uploads/2014/05/head-logo2.png"
            alt="WK Motors"
            className="h-7 w-auto brightness-0 invert opacity-50"
          />
        </div>

        <p className="text-zinc-600 text-xs tracking-wider text-center">
          For the Pilots Among the Drivers
        </p>

        <div className="flex items-center gap-6 text-xs tracking-widest text-zinc-600">
          <a href="/impressum" className="hover:text-white transition-colors uppercase">Impressum</a>
          <a href="/datenschutz" className="hover:text-white transition-colors uppercase">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
