import Image from "next/image";
import salon1 from "@/assets/images/salon-1.jpg";
import salon2 from "@/assets/images/salon-2.jpg";
import logo from "@/assets/images/logo-w-s.png";

export function Restaurant() {
  return (
    <section id="restaurant" className="section">
      <div className="flex flex-col">
        <Image
          alt=""
          src={logo}
          quality={100}
          placeholder="blur"
          className="absolute inset-x-1/2 top-[15.14vh] z-10 w-32.5 -translate-x-1/2"
        />

        <div className="relative">
          <Image
            alt=""
            src={salon1}
            quality={100}
            placeholder="blur"
            className="h-[63.7svh]"
          />

          <p className="font-secondary text-9 absolute right-[5.38%] bottom-[7.62%] w-55 text-right text-white">
            En barrancas de Belgrano, tenemos una barra para 6 personas y mesas
            en el salón.
          </p>
        </div>

        <Image
          alt=""
          src={salon2}
          quality={100}
          placeholder="blur"
          className="h-[36.3svh]"
        />
      </div>
    </section>
  );
}
