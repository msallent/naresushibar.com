import Image from "next/image";
import comida1 from "@/assets/images/comida-1.jpg";
import comida1Xl from "@/assets/images/comida-1-xl.jpg";
import comida2 from "@/assets/images/comida-2.jpg";
import comida2Xl from "@/assets/images/comida-2-xl.jpg";
import comida3 from "@/assets/images/comida-3.jpg";
import comida3Xl from "@/assets/images/comida-3-xl.jpg";
import comida4 from "@/assets/images/comida-4.jpg";
import comida4Xl from "@/assets/images/comida-4-xl.jpg";

export function About2() {
  return (
    <section id="about2" className="section">
      <p className="font-secondary text-10 md:text-20 2xl:text-22 absolute inset-x-1/2 top-1/2 w-52 -translate-1/2 text-center text-white md:w-100 lg:static lg:inset-auto lg:order-2 lg:mx-auto lg:flex lg:w-150 lg:flex-1 lg:translate-none lg:items-center lg:justify-center lg:text-center lg:text-black xl:absolute xl:bottom-[10%] xl:left-[4%] xl:w-200 xl:text-left xl:text-white 2xl:w-220">
        Desde el año 2017 nuestra búsqueda esta en la materia prima,
        obsesionados con la calidad, la variedad y las distintas técnicas del
        pescado hasta dar con el mejor proveedor de arroz del país!
      </p>

      <div className="flex h-svh flex-col lg:order-1 lg:h-1/2 lg:max-h-1/2 lg:w-full lg:flex-row xl:hidden">
        <div className="flex h-1/2 lg:h-full">
          <Image
            alt=""
            src={comida1}
            quality={100}
            placeholder="blur"
            className="h-full max-w-1/2 flex-1 object-cover object-right"
          />

          <Image
            alt=""
            src={comida2}
            quality={100}
            placeholder="blur"
            className="h-full max-w-1/2 flex-1 object-cover object-left"
          />
        </div>

        <div className="flex h-1/2 lg:h-full">
          <Image
            alt=""
            src={comida3}
            quality={100}
            placeholder="blur"
            className="max-w-1/2 flex-1 object-cover object-right md:object-bottom"
          />

          <Image
            alt=""
            src={comida4}
            quality={100}
            placeholder="blur"
            className="max-w-1/2 flex-1 object-cover object-left"
          />
        </div>
      </div>

      <div className="hidden xl:flex xl:h-full">
        <Image
          alt=""
          src={comida1Xl}
          quality={100}
          placeholder="blur"
          className="xl:w-[13%] xl:object-cover xl:object-right"
        />

        <Image
          alt=""
          src={comida2Xl}
          quality={100}
          placeholder="blur"
          className="xl:w-[37%] xl:object-cover"
        />

        <Image
          alt=""
          src={comida3Xl}
          quality={100}
          placeholder="blur"
          className="xl:w-[37%] xl:object-cover"
        />

        <Image
          alt=""
          src={comida4Xl}
          quality={100}
          placeholder="blur"
          className="xl:w-[13%] xl:object-cover xl:object-left"
        />
      </div>
    </section>
  );
}
