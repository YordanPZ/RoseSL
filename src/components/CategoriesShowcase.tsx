import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

export default function CategoriesShowcase() {
  return (
    <section className="min-h-[80vh] text-center mt-20">
      <h3 className="text-2xl font-[600] lg:text-3xl">
        Mira nuestas categorias
      </h3>
      <p className="text-subtitle lg:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, alias.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10 sm:grid-cols-1 lg:grid-cols-3 w-full p-5 sm:p-20">
        <div className="place-self-center w-full max-w-[400px]">
          <AspectRatio ratio={12 / 16} className="bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <h4 className="font-bold text-subtitle mt-3">Limpieza</h4>
        </div>
        <div className="place-self-center w-full max-w-[400px]">
          <AspectRatio ratio={12 / 16} className="bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <h4 className="font-bold text-subtitle mt-3">Juegos</h4>
        </div>
        <div className="place-self-center w-full max-w-[400px]">
          <AspectRatio ratio={12 / 16} className="bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <h4 className="font-bold text-subtitle mt-3">Articulos</h4>
        </div>
      </div>
    </section>
  );
}
