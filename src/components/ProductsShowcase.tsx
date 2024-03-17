import ProductCard from "./ProductCard";

export default function ProductsShowcase() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const profucts = [
    {
      id: 1,
      title: "Product 1",
      description: "Description of product 1",
      price: 100,
      picture: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description of product 2",
      price: 200,
      picture: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description of product 3",
      price: 300,
      picture: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description of product 4",
      price: 400,
      picture: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description of product 5",
      price: 500,
      picture: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Product 6",
      description: "Description of product 6",
      price: 600,
      picture: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Product 7",
      description: "Description of product 7",
      price: 700,
      picture: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      title: "Product 8",
      description: "Description of product 8",
      price: 800,
      picture: "https://via.placeholder.com/150",
    },
  ];
  return (
    <section className="min-h-[80vh] text-center mt-20">
      <h3 className="text-2xl font-[600] lg:text-3xl">Nuestros Productos</h3>
      <div>
        <p className="text-subtitle lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, alias.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-10 sm:grid-cols-1 lg:grid-cols-4 w-full p-5 sm:p-20">
         {
            profucts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
         }
        </div>
      </div>
    </section>
  );
}
