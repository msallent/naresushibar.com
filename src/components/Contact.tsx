import Image from "next/image";
import logo from "@/assets/images/logo.png";
import logoRiko from "@/assets/images/logo-riko.png";

export function Contacto() {
  return (
    <section id="contacto" className="section">
      <div className="flex h-full flex-col items-center">
        <div className="font-secondary text-9 flex w-52 flex-1 flex-col items-center justify-center text-center">
          <p className="font-medium">Contacto</p>

          <br />

          <p className="font-light">+54115347394 / info@naresushibar.com</p>

          <br />

          <p className="font-medium">Ubicación</p>

          <br />

          <p className="font-light">
            Virrey Loreto 2035, 2do piso
            <br /> Buenos Aires
          </p>

          <br />

          <p className="font-medium">Horarios</p>

          <br />

          <p className="font-light">
            Lunes a Sábados a partir de las 20hs *Almuerzos de 12hs a 15hs
          </p>
        </div>

        <div className="h-[19vh] w-full bg-white">
          <div className="mx-auto flex h-full w-41.5 items-center justify-between">
            <Image
              alt=""
              src={logo}
              quality={100}
              placeholder="blur"
              className="h-6.75 w-12"
            />

            <Image
              alt=""
              src={logoRiko}
              quality={100}
              placeholder="blur"
              className="h-9 w-12.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
