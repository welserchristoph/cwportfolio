import Hero from "./components/Hero";
import Films from "./components/Films";
import Contact from "./pages/Contact";
import Remnants from "./components/Remnants";
import SpikedSection from "./components/SpikedSection";
import EverythingBeautiful from "./components/EverythingBeautiful";

export default function App() {
  return (
    <div className="bg-black text-white snap-y snap-mandatory overflow-y-scroll h-screen">
      <section className="snap-start">
        <Hero />
      </section>

      <section className="snap-start">
        <EverythingBeautiful/>
      </section>

      <section className="snap-start">
        <Remnants />
      </section>

      <section className="snap-start">
        <SpikedSection />
      </section>

      <section className="snap-start">
        <Contact />
      </section>

    </div>
  );
}
