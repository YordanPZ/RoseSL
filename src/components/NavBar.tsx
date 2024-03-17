import "@fontsource-variable/montserrat";

import {
  HamburgerMenuIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import ShoppinCart from "./svg/shoppinCart";

export default function NavBar() {
  return (
    <nav className="flex justify-between px-4 h-14 items-center">
      <section className="flex items-center">
        <HamburgerMenuIcon className="size-7 mr-4  md:hidden" />
        <h1 className="font-['Montserrat Variable'] font-[700] text-2xl font">
          Rose S.L
        </h1>
      </section>
      <ul className=" gap-[5vw] hidden md:flex font-[400] lg:text-2xl text">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Tienda</Link>
        </li>
        <li>
          <Link href="/contact">Acerca</Link>
        </li>
        <li>
          <Link href="/contact">Contacto</Link>
        </li>
      </ul>
      <section className="flex text-black gap-[2vw]">
        <PersonIcon className="size-7 cursor-pointer" />
        <MagnifyingGlassIcon className="size-7 cursor-pointer" />
        <HeartIcon className="size-7 cursor-pointer" />
        <ShoppinCart className="cursor-pointer" />
      </section>
    </nav>
  );
}
