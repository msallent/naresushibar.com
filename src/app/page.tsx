import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <main className="relative h-full max-h-full overflow-hidden flex flex-col justify-center items-center bg-[url(/background.jpg)] bg-cover bg-bottom bg-no-repeat">
      <section className="absolute inset-y-20 w-3xl flex flex-col justify-between items-center text-2xl tracking-[3.36px]">
        <p>Próximamente</p>

        <Image src={logo} alt="Nare Sushi Bar" className="w-52 invert" priority />

        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <p>Virrey Loreto 2025</p>
          <p>Piso 2</p>
        </div>
      </section>
    </main>
  );
}
