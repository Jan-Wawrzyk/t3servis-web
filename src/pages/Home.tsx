import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { About } from '../components/sections/About';
import { Machinery } from '../components/sections/Machinery';
import { References } from '../components/sections/References';
import { Gallery } from '../components/sections/Gallery';
import { Pricing } from '../components/sections/Pricing';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <main id="obsah">
      <Hero />
      <Services />
      <About />
      <Machinery />
      <References />
      <Gallery />
      <Pricing />
      <Contact />
    </main>
  );
}
