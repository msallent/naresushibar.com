import Image from "next/image";
import reservas1 from "@/assets/images/reservas-1.jpg";
import reservas1Lg from "@/assets/images/reservas-1-lg.jpg";
import reservas2 from "@/assets/images/reservas-2.jpg";
import reservas2Lg from "@/assets/images/reservas-2-lg.jpg";
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
            src={reservas1Lg}
            quality={100}
            placeholder="blur"
            className="hidden md:block md:w-1/2 md:object-cover md:object-right"
          />

          <Image
            alt=""
            src={reservas2Lg}
            quality={100}
            placeholder="blur"
            className="hidden md:block md:w-1/2 md:object-cover md:object-[70%]"
          />
        </div>

        <p className="font-secondary text-13 md:text-22 absolute inset-x-1/2 top-1/2 w-45 -translate-1/2 text-center font-light text-white md:top-[34%] md:w-[32%] md:translate-y-0">
          Martes a Sábados a partir de las 20hs
          <br /> <br />
          *Almuerzos de 12hs a 15hs
        </p>

        <button className="absolute inset-x-1/2 bottom-[13.57%] w-27 -translate-x-1/2 cursor-pointer md:bottom-[24.6%] md:w-[21.58%]">
          <Image alt="" src={border} quality={100} placeholder="blur" />

          <a
            href="https://www.wokiapp.com/reservas/nare-sushi-bar"
            target="_blank"
            rel="noreferrer"
            className="font-secondary md:text-22 text-10 absolute inset-0 mt-px flex items-center justify-center font-semibold text-white"
          >
            Reservar
          </a>
        </button>

        <div className="md:text-18 hidden md:absolute md:inset-auto md:top-[87%] md:left-[92.3%] md:flex md:w-[56.6%] md:origin-left md:rotate-270 md:justify-between md:text-white">
          <p>Virrey Loreto 2035</p>
          <p>piso 2</p>
        </div>
      </div>
    </section>
  );
}
