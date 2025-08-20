import Image from "next/image";
import comida1 from "@/assets/images/comida-1.jpg";
import comida2 from "@/assets/images/comida-2.jpg";
import comida3 from "@/assets/images/comida-3.jpg";
import comida4 from "@/assets/images/comida-4.jpg";

export function About2() {
  return (
    <section id="about2" className="section">
      <p className="font-secondary text-10 md:text-20 absolute inset-x-1/2 top-1/2 w-52 -translate-1/2 text-center text-white md:w-100 lg:static lg:inset-auto lg:order-2 lg:mx-auto lg:flex lg:w-150 lg:flex-1 lg:translate-none lg:items-center lg:justify-center lg:text-center lg:text-black">
        Desde el año 2017 nuestra búsqueda esta en la materia prima,
        obsesionados con la calidad, la variedad y las distintas técnicas del
        pescado hasta dar con el mejor proveedor de arroz del país.
      </p>

      <div className="flex h-full flex-col lg:order-1 lg:h-1/2 lg:max-h-1/2 lg:w-full lg:flex-row">
        <div className="flex h-1/2 lg:h-full">
          <Image
            alt=""
            src={comida1}
            quality={100}
            placeholder="blur"
            className="max-w-1/2 flex-1 object-cover object-right"
          />

          <Image
            alt=""
            src={comida2}
            quality={100}
            placeholder="blur"
            className="max-w-1/2 flex-1 object-cover object-left"
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
    </section>
  );
}
