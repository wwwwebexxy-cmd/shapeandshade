import Hero from "../components/Hero";
import About from "../components/About";
import ServiceCarousel from "../components/ServiceCarousel";
import StickyFeatures from "../components/StickyFeatures";
import OurClients from "../components/OurClients";
import Contact from "../components/Contact";
import ScrollMarquee from "../components/ScrollMarquee";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen">
      <Hero />
      <About />
      
      {/* Scroll Marquee Section */}
      <ScrollMarquee />
      
      <ServiceCarousel />
      
      <StickyFeatures />
      
      <OurClients />
      <Contact />
    </main>
  );
}

