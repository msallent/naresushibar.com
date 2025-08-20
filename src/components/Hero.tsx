"use client";

import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import hero1 from "@/assets/images/hero-1.jpg";
import hero1Lg from "@/assets/images/hero-1-lg.jpg";
import hero1Xl from "@/assets/images/hero-1-xl.jpg";
import hero2 from "@/assets/images/hero-2.jpg";
import hero2Lg from "@/assets/images/hero-2-lg.jpg";
import hero2Xl from "@/assets/images/hero-2-xl.jpg";
import hero3 from "@/assets/images/hero-3.jpg";
import hero3Lg from "@/assets/images/hero-3-lg.jpg";
import hero3Xl from "@/assets/images/hero-3-xl.jpg";
import hero4 from "@/assets/images/hero-4.jpg";
import hero4Lg from "@/assets/images/hero-4-lg.jpg";
import hero4Xl from "@/assets/images/hero-4-xl.jpg";
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
  lg: [hero1Lg, hero2Lg, hero3Lg, hero4Lg],
  xl: [hero1Xl, hero2Xl, hero3Xl, hero4Xl],
};

export function Hero() {
  const isLg = useMediaQuery("(min-width: 1024px) and (max-width: 1279px)");
  const isXl = useMediaQuery("(min-width: 1280px)");

  const heroImages = HERO_IMAGES[isXl ? "xl" : isLg ? "lg" : "sm"];

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

      <div className="text-10 md:text-18 absolute top-1/2 left-[7%] flex w-59 origin-left translate-y-29.5 rotate-270 justify-between text-white md:top-auto md:bottom-[16%] md:left-1/2 md:w-107 md:origin-center md:-translate-x-1/2 md:translate-y-0 md:rotate-none lg:left-[18%] lg:w-143 lg:translate-none">
        <p>Virrey Loreto 2035</p>
        <p>piso 2</p>
      </div>

      <Image
        alt=""
        src={logo}
        quality={100}
        placeholder="blur"
        className="absolute inset-1/2 w-42 -translate-1/2 md:top-[48%] md:w-65"
      />
    </section>
  );
}
