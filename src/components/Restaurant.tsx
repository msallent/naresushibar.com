import Image from "next/image";
import salon1 from "@/assets/images/salon-1.jpg";
import salon1Md from "@/assets/images/salon-1-md.jpg";
import salon1Xl from "@/assets/images/salon-1-xl.jpg";
import salon2 from "@/assets/images/salon-2.jpg";
import salon2Xl from "@/assets/images/salon-2-xl.jpg";
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
          className="absolute inset-x-1/2 top-[15.14%] z-10 w-32.5 -translate-x-1/2 md:top-[10%] md:w-50 lg:hidden xl:top-1/2 xl:-right-[0.5vw] xl:left-auto xl:block xl:w-59 xl:translate-x-0 xl:-translate-y-1/2 xl:rotate-90 2xl:right-[1vw]"
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
            className="hidden lg:block lg:h-full lg:object-cover lg:object-[40%] xl:hidden"
          />

          <Image
            alt=""
            src={salon1Xl}
            quality={100}
            placeholder="blur"
            className="xl:block xl:h-full xl:w-full xl:object-cover"
          />

          <p className="font-secondary text-9 md:text-18 xl:text-20 2xl:text-22 absolute right-[5.38%] bottom-[7.62%] w-55 text-right text-white md:bottom-[5%] md:w-116 lg:right-[7vw] lg:bottom-[11.3%] xl:right-[6.5vw] xl:w-150 2xl:w-170">
            En barrancas de Belgrano, tenemos una barra para 6 personas y mesas
            en el salón.
          </p>
        </div>

        <Image
          alt=""
          src={salon2}
          quality={100}
          placeholder="blur"
          className="h-[36.3svh] md:object-cover lg:order-1 lg:h-full lg:w-[57%] lg:object-[88%] xl:hidden"
        />

        <Image
          alt=""
          src={salon2Xl}
          quality={100}
          placeholder="blur"
          className="hidden xl:order-1 xl:block xl:h-full xl:w-[57%] xl:object-cover xl:object-[88%]"
        />
      </div>
    </section>
  );
}
