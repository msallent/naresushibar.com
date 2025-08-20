import Image from "next/image";
import reservas1 from "@/assets/images/reservas-1.jpg";
import reservas1Md from "@/assets/images/reservas-1-md.jpg";
import reservas2 from "@/assets/images/reservas-2.jpg";
import reservas2Md from "@/assets/images/reservas-2-md.jpg";
import border from "@/assets/images/border.png";

export function Reservations() {
  return (
    <section id="reservas" className="section">
      <div className="flex flex-col md:h-full">
        <Image
          alt=""
          src={reservas1}
          quality={100}
          placeholder="blur"
          className="h-[50svh] md:hidden"
        />

        <Image
          alt=""
          src={reservas2}
          quality={100}
          placeholder="blur"
          className="h-[50svh] md:hidden"
        />

        <div className="hidden md:flex md:h-full">
          <Image
            alt=""
            src={reservas1Md}
            quality={100}
            placeholder="blur"
            className="hidden md:block md:w-1/2 md:object-cover md:object-[70%] lg:object-right"
          />

          <Image
            alt=""
            src={reservas2Md}
            quality={100}
            placeholder="blur"
            className="hidden md:block md:w-1/2 md:object-cover lg:object-[70%]"
          />
        </div>

        <p className="font-secondary text-13 md:text-22 absolute inset-x-1/2 top-1/2 w-45 -translate-1/2 text-center font-light text-white md:top-1/2 md:w-80 md:-translate-y-1/2 lg:top-[34%] lg:translate-y-0 xl:top-[42%] xl:w-90">
          Martes a Sábados a partir de las 20hs
          <br /> <br />
          *Almuerzos de 12hs a 15hs
        </p>

        <button className="absolute inset-x-1/2 bottom-[13.57%] w-27 -translate-x-1/2 cursor-pointer md:bottom-[24.6%] md:w-54 xl:bottom-[17.2%] xl:w-70 2xl:w-75">
          <Image alt="" src={border} quality={100} placeholder="blur" />

          <a
            href="https://www.wokiapp.com/reservas/nare-sushi-bar"
            target="_blank"
            rel="noreferrer"
            className="font-secondary md:text-22 text-10 absolute inset-0 mt-1 flex items-center justify-center font-semibold text-white"
          >
            Reservar
          </a>
        </button>

        <div className="lg:text-18 xl:text-20 2xl:text-22 hidden lg:absolute lg:inset-auto lg:top-1/2 lg:left-[92.3%] lg:flex lg:w-145 lg:origin-left lg:translate-x-0 lg:translate-y-72.5 lg:rotate-270 lg:justify-between lg:text-white xl:left-[95.5%] 2xl:w-155 2xl:translate-y-77.5">
          <p>Virrey Loreto 2035</p>
          <p>piso 2</p>
        </div>
      </div>
    </section>
  );
}
