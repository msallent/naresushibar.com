import Image from "next/image";
import logo from "@/assets/images/logo.png";
import logoRiko from "@/assets/images/logo-riko.png";

export function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="flex h-full flex-col items-center">
        <div className="font-secondary text-9 md:text-18 xl:text-20 2xl:text-22 flex w-52 flex-1 flex-col items-center justify-center gap-2 text-center md:w-110 md:gap-6 xl:w-120 xl:gap-8 2xl:w-130">
          <div className="flex flex-col gap-2 md:gap-6 xl:gap-8">
            <p className="font-medium">Contacto</p>
            <p className="font-light">+54115347394 / info@naresushibar.com</p>
          </div>

          <div className="flex flex-col gap-2 md:gap-6 xl:gap-8">
            <p className="font-medium">Ubicación</p>

            <p className="font-light">
              Virrey Loreto 2035, 2do piso
              <br /> Buenos Aires
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-6 xl:gap-8">
            <p className="font-medium">Horarios</p>

            <p className="font-light">
              Lunes a Sábados a partir de las 20hs
              <br /> *Almuerzos de 12hs a 15hs
            </p>
          </div>
        </div>

        <div className="h-[19svh] w-full bg-white md:h-[23svh]">
          <div className="mx-auto flex h-full w-41.5 items-center justify-between md:w-78.5 xl:w-144 2xl:w-181">
            <Image
              alt=""
              src={logo}
              quality={100}
              placeholder="blur"
              className="h-6.75 w-12 md:h-12 md:w-auto xl:h-14.5 2xl:h-16.5"
            />

            <Image
              alt=""
              src={logoRiko}
              quality={100}
              placeholder="blur"
              className="h-9 w-12.5 md:h-16 md:w-auto xl:h-20 2xl:h-22"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
