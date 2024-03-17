/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProductCardProps = {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    picture: string;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-full max-w-[370px] place-self-center">
      <CardHeader className="p-0 mb-4">
        <img src={product.picture} alt={product.title} />
      </CardHeader>
      <CardContent className="text-start space-y-3">
        <CardTitle>{product.title}</CardTitle>

        <CardDescription>{product.description}</CardDescription>
        <CardDescription>${product.price}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between p-3 md:p-6">
        <Button variant="outline" className='text-sm'>Ver detalles</Button>
        <Button className='text-sm'>Agregar al carrito</Button>
      </CardFooter>
    </Card>
  );
}

{
  /* <img src={product.picture} alt={product.title} /> */
}
