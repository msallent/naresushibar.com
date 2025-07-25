import Image from "next/image";
import hero1 from "@/assets/images/hero-1.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import hero4 from "@/assets/images/hero-4.jpg";
import hero5 from "@/assets/images/hero-5.jpg";
import logo from "@/assets/images/logo-w.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselProgress,
} from "@/components/ui/carousel";

const HERO_IMAGES = [hero1, hero2, hero3, hero4, hero5];

export function Hero() {
  return (
    <section id="hero" className="section">
      <Carousel>
        <CarouselContent>
          {HERO_IMAGES.map((image, index) => (
            <CarouselItem key={index}>
              <Image
                fill
                alt=""
                src={image}
                quality={100}
                placeholder="blur"
                className="object-cover"
                priority={index === 0}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselProgress />
      </Carousel>

      <nav className="text-12 absolute inset-x-0 top-[5%] flex justify-center gap-4 text-white [&>a]:underline">
        <a href="#about">Reservas</a>
        <a href="#contacto">Contacto</a>
        <a href="#contacto">Horarios</a>
      </nav>

      <div className="text-10 absolute top-1/2 left-[7%] flex h-[33.5%] -translate-y-1/2 justify-between text-white [writing-mode:sideways-lr]">
        <p>Virrey Loreto 2035</p>
        <p>piso 2</p>
      </div>

      <Image
        alt=""
        src={logo}
        quality={100}
        placeholder="blur"
        className="absolute inset-1/2 w-42 -translate-1/2"
      />
    </section>
  );
}
