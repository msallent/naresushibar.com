import Image from "next/image";
import comida1 from "@/assets/images/comida-1.jpg";
import comida2 from "@/assets/images/comida-2.jpg";
import comida3 from "@/assets/images/comida-3.jpg";
import comida4 from "@/assets/images/comida-4.jpg";

export function About2() {
  return (
    <section id="about2" className="section">
      <p className="font-secondary text-10 md:text-20 absolute inset-x-1/2 top-1/2 w-52 -translate-1/2 text-center text-white md:order-2 md:mx-auto md:mt-[7.8%] md:mb-0 md:w-[60%] md:text-center">
        Desde el año 2017 nuestra búsqueda esta en la materia prima,
        obsesionados con la calidad, la variedad y las distintas técnicas del
        pescado hasta dar con el mejor proveedor de arroz del país.
      </p>

      <div className="flex flex-1 flex-col md:order-1 md:mt-[10%] md:h-1/2 md:max-h-1/2 md:w-full md:flex-row">
        <div className="flex flex-1">
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

        <div className="flex flex-1">
          <Image
            alt=""
            src={comida3}
            quality={100}
            placeholder="blur"
            className="max-w-1/2 flex-1 object-cover object-right"
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
