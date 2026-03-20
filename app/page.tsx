import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Performance from "@/components/Performance";
import Workshop from "@/components/Workshop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Marquee />
      <Performance />
      <Workshop />
      <Contact />
      <Footer />
    </main>
  );
}
