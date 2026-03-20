"use client";

import { Wrench, Car, Zap, Package, Sparkles, Waves } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const services = [
  {
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    number: "01",
    icon: <Wrench className="h-5 w-5" />,
    title: "Wartung & Inspektion",
    description: "360° Autoservice unter einem Dach. TÜV & AU, Räder & Reifen, Fehlerdiagnostik, Fahrzeugaufbereitung, Autoglas, Elektrofahrzeuge.",
    tags: ["TÜV & AU", "Räder & Reifen", "Fehlerdiagnostik"],
  },
  {
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    number: "02",
    icon: <Car className="h-5 w-5" />,
    title: "Reparaturen",
    description: "Vom Lackdoktor über Unfallinstandsetzung bis zur Restauration Ihres Young- oder Oldtimers. Wir lösen jeden Fall.",
    tags: ["Karosserie", "Unfall", "Lackierung"],
  },
  {
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    number: "03",
    icon: <Zap className="h-5 w-5" />,
    title: "Leistungssteigerung",
    description: "Von Audi bis Zonda — Chiptuning, Motorenbearbeitung und Motorsport-Umbauten für nahezu alle Hersteller. Am Ende steht der Rollenprüfstand.",
    tags: ["Chiptuning", "Motorenbearbeitung", "Motorsport"],
  },
  {
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    number: "04",
    icon: <Package className="h-5 w-5" />,
    title: "Zubehör & Tuning",
    description: "Fahrwerk & Bremsen, Auspuffanlagen, Aluminiumfelgen, Karosserieteile, Auto-Hifi & Multimedia.",
    tags: ["Fahrwerk", "Auspuff", "Felgen"],
  },
  {
    area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/11]",
    number: "05",
    icon: <Sparkles className="h-5 w-5" />,
    title: "Individual",
    description: "Sonderanfertigungen und ausgefallenste Spezialumbauten. Wenn andere sagen es geht nicht — kommen Sie zu uns.",
    tags: ["Sonderanfertigungen", "Spezialumbauten"],
  },
  {
    area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/11/3/13]",
    number: "06",
    icon: <Waves className="h-5 w-5" />,
    title: "Marine Tuning",
    description: "Mehr Leistung für Boote. Wasser leistet mehr Widerstand als Asphalt — da zählt jedes PS.",
    tags: ["Marine", "Bootsmotor"],
  },
];

interface ServiceCardProps {
  area: string;
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const ServiceCard = ({ area, number, icon, title, description, tags }: ServiceCardProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-none border border-white/5 p-2">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden bg-[#0e0e0e] p-6 shadow-sm">
          {/* Top row */}
          <div className="flex items-start justify-between">
            <div className="flex items-center justify-center w-10 h-10 border border-white/10 bg-[#131313] text-[#e30000]">
              {icon}
            </div>
            <span className="font-mono text-[#e30000]/20 text-3xl font-black">{number}</span>
          </div>

          {/* Content */}
          <div className="space-y-3 flex-1">
            <h3 className="font-display font-bold text-xl md:text-2xl text-white leading-tight">
              {title}
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-widest text-zinc-700 border border-white/5 px-2 py-0.5 uppercase font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-8 md:px-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-8">
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

        {/* Grid */}
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-12 md:grid-rows-3 xl:grid-rows-2">
          {services.map((s) => (
            <ServiceCard key={s.number} {...s} />
          ))}
        </ul>
      </div>
    </section>
  );
}
