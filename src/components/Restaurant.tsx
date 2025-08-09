import Image from "next/image";
import salon1 from "@/assets/images/salon-1.jpg";
import salon2 from "@/assets/images/salon-2.jpg";
import logo from "@/assets/images/logo-w-s.png";

export function Restaurant() {
  return (
    <section id="restaurant" className="section">
      <div className="flex flex-col md:h-full md:flex-row">
        <Image
          alt=""
          src={logo}
          quality={100}
          placeholder="blur"
          className="absolute inset-x-1/2 top-[15.14%] z-10 w-32.5 -translate-x-1/2 md:hidden"
        />

        <div className="relative md:order-2 md:w-[43%]">
          <Image
            alt=""
            src={salon1}
            quality={100}
            placeholder="blur"
            className="h-[63.7svh] md:h-full md:object-cover md:object-[40%]"
          />

          <p className="font-secondary text-9 md:text-18 absolute right-[5.38%] bottom-[7.62%] w-55 text-right text-white md:right-[7vw] md:bottom-[11.3%] md:w-[46vw]">
            En barrancas de Belgrano, tenemos una barra para 6 personas y mesas
            en el salón.
          </p>
        </div>

        <Image
          alt=""
          src={salon2}
          quality={100}
          placeholder="blur"
          className="h-[36.3svh] md:order-1 md:h-full md:w-[57%] md:object-cover md:object-[88%]"
        />
      </div>
    </section>
  );
}
