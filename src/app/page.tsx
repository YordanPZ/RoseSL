import CategoriesShowcase from "@/components/CategoriesShowcase";
import HomeHero from "@/components/HomeHero";
import ProductsShowcase from "@/components/ProductsShowcase";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <header>
        <HomeHero />
      </header>
      <main>
        <CategoriesShowcase />
        <ProductsShowcase />
      </main>
    </>
  );
}
