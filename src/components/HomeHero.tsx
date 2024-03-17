import { Button } from "./ui/button";

/* eslint-disable @next/next/no-img-element */
export default function HomeHero() {
  return (
    <section className="max-h-screen relative">
      <div
        style={{
          backgroundImage: `url("/homeBackground.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
          height: "90vh",
          zIndex: 0,
          filter: "opacity(90) saturate(1.5)",
        }}
        className="flex items-center justify-center sm:justify-end bf"
      >
        <div className="bg-[#FFF3E3] h-fit max-w-[600px] p-8 sm:mr-4 rounded-2xl space-y-2 mx-2">
          <p className="2xl:text-xl">Nuevo Ingreso</p>
          <h2 className=" font-['Montserrat Variable'] font-[700] text-3xl text-[#920A0A] 2xl:text-5xl">
            Descubre nuestros nuevos productos
          </h2>
          <p className="font-['Montserrat Variable'] font-[500] text-sm 2xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            voluptates, quia, quibusdam, dolorum
          </p>
          <Button variant="highlighted">Realizar Pedido</Button>
        </div>
      </div>
    </section>
  );
}
