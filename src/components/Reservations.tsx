import Image from "next/image";
import reservas1 from "@/assets/images/reservas-1.jpg";
import reservas2 from "@/assets/images/reservas-2.jpg";
import border from "@/assets/images/border.png";

export function Reservations() {
  return (
    <section id="reservas" className="section">
      <div className="flex flex-col">
        <Image
          alt=""
          src={reservas1}
          quality={100}
          placeholder="blur"
          className="h-1/2"
        />
        <Image
          alt=""
          src={reservas2}
          quality={100}
          placeholder="blur"
          className="h-1/2"
        />

        <p className="font-secondary text-13 absolute inset-x-1/2 top-1/2 w-45 -translate-1/2 text-center font-light text-white">
          Martes a Sábados a partir de las 20hs
          <br /> <br />
          *Almuerzos de 12hs a 15hs
        </p>

        <button className="absolute inset-x-1/2 bottom-[13.57vh] w-27 -translate-x-1/2 cursor-pointer">
          <Image alt="" src={border} quality={100} placeholder="blur" />

          <p className="font-secondary text-10 absolute inset-x-1/2 top-1/2 mt-px w-full -translate-1/2 font-semibold text-white">
            Reservar
          </p>
        </button>
      </div>
    </section>
  );
}
