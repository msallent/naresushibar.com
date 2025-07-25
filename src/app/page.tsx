import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Reservations } from "@/components/Reservations";
import { About2 } from "@/components/About2";
import { Restaurant } from "@/components/Restaurant";
import { Contacto } from "@/components/Contact";

export default function Home() {
  return (
    <main className="scrollbar-none flex h-svh snap-y snap-mandatory flex-col overflow-y-auto bg-[#FCFAF0]">
      <Hero />
      <About />
      <Reservations />
      <About2 />
      <Restaurant />
      <Contacto />
    </main>
  );
}
