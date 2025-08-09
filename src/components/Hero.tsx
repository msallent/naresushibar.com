"use client";

import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import hero1 from "@/assets/images/hero-1.jpg";
import hero1Md from "@/assets/images/hero-1-md.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero2Md from "@/assets/images/hero-2-md.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import hero3Md from "@/assets/images/hero-3-md.jpg";
import hero4 from "@/assets/images/hero-4.jpg";
import hero4Md from "@/assets/images/hero-4-md.jpg";
import hero5 from "@/assets/images/hero-5.jpg";
import logo from "@/assets/images/logo-w.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselProgress,
} from "@/components/ui/carousel";

const HERO_IMAGES = {
  sm: [hero1, hero2, hero3, hero4, hero5],
  md: [hero1Md, hero2Md, hero3Md, hero4Md],
  lg: [hero1Md, hero2Md, hero3Md, hero4Md],
};

export function Hero() {
  const isMd = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isLg = useMediaQuery("(min-width: 1024px)");

  const heroImages = HERO_IMAGES[isLg ? "lg" : isMd ? "md" : "sm"];

  return (
    <section id="hero" className="section">
      <Carousel>
        <CarouselContent>
          {heroImages.map((image, index) => (
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

      <nav className="text-12 md:text-18 absolute inset-x-0 top-[5%] flex justify-center gap-4 text-white md:gap-8 [&>a]:underline">
        <a
          href="https://www.wokiapp.com/reservas/nare-sushi-bar"
          target="_blank"
          rel="noreferrer"
        >
          Reservas
        </a>
        <a href="#contacto">Contacto</a>
        <a href="#reservas">Horarios</a>
      </nav>

      <div className="text-10 md:text-18 absolute top-[67.8%] left-[7%] flex w-[60.2%] origin-left rotate-270 justify-between text-white md:top-auto md:bottom-[16%] md:left-[18.6%] md:w-[56%] md:origin-center md:rotate-none">
        <p>Virrey Loreto 2035</p>
        <p>piso 2</p>
      </div>

      <Image
        alt=""
        src={logo}
        quality={100}
        placeholder="blur"
        className="absolute inset-1/2 w-42 -translate-1/2 md:top-[48%] md:w-[25%]"
      />
    </section>
  );
}
