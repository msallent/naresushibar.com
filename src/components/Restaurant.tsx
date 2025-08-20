import Image from "next/image";
import salon1 from "@/assets/images/salon-1.jpg";
import salon1Md from "@/assets/images/salon-1-md.jpg";
import salon2 from "@/assets/images/salon-2.jpg";
import logo from "@/assets/images/logo-w-s.png";

export function Restaurant() {
  return (
    <section id="restaurant" className="section">
      <div className="flex flex-col lg:h-full lg:flex-row">
        <Image
          alt=""
          src={logo}
          quality={100}
          placeholder="blur"
          className="absolute inset-x-1/2 top-[15.14%] z-10 w-32.5 -translate-x-1/2 md:top-[10%] md:w-50 lg:hidden"
        />

        <div className="relative lg:order-2 lg:w-[43%]">
          <Image
            alt=""
            src={salon1}
            quality={100}
            placeholder="blur"
            className="h-[63.7svh] md:object-cover lg:hidden"
          />

          <Image
            alt=""
            src={salon1Md}
            quality={100}
            placeholder="blur"
            className="hidden lg:block lg:h-full lg:object-cover lg:object-[40%]"
          />

          <p className="font-secondary text-9 md:text-18 absolute right-[5.38%] bottom-[7.62%] w-55 text-right text-white md:bottom-[5%] md:w-116 lg:right-[7vw] lg:bottom-[11.3%]">
            En barrancas de Belgrano, tenemos una barra para 6 personas y mesas
            en el salón.
          </p>
        </div>

        <Image
          alt=""
          src={salon2}
          quality={100}
          placeholder="blur"
          className="h-[36.3svh] md:object-cover lg:order-1 lg:h-full lg:w-[57%] lg:object-[88%]"
        />
      </div>
    </section>
  );
}
