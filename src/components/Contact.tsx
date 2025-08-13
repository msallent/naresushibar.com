import Image from "next/image";
import logo from "@/assets/images/logo.png";
import logoRiko from "@/assets/images/logo-riko.png";

export function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="flex h-full flex-col items-center">
        <div className="font-secondary text-9 md:text-18 flex w-52 flex-1 flex-col items-center justify-center gap-2 text-center md:w-[45%]">
          <div className="flex flex-col gap-2">
            <p className="font-medium">Contacto</p>
            <p className="font-light">+54115347394 / info@naresushibar.com</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-medium">Ubicación</p>

            <p className="font-light">
              Virrey Loreto 2035, 2do piso
              <br /> Buenos Aires
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-medium">Horarios</p>

            <p className="font-light">
              Lunes a Sábados a partir de las 20hs
              <br /> *Almuerzos de 12hs a 15hs
            </p>
          </div>
        </div>

        <div className="h-[19svh] w-full bg-white md:h-[23svh]">
          <div className="mx-auto flex h-full w-41.5 items-center justify-between md:w-[30.66%]">
            <Image
              alt=""
              src={logo}
              quality={100}
              placeholder="blur"
              className="h-6.75 w-12 md:h-[28%] md:w-auto"
            />

            <Image
              alt=""
              src={logoRiko}
              quality={100}
              placeholder="blur"
              className="h-9 w-12.5 md:h-[37.09%] md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
