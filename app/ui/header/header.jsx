"use client";

import Image from "next/image";
import NavbarItems from "./navbar/navbarItems";
import MobileNavBar from "./navbar/mobileNavBar";

function Header() {
  return (
    <header className="my-5 flex justify-between">
      <Image
        src={"/logo.svg"}
        priority="true"
        alt="logo"
        width="103"
        height="32"
      />
      <nav className="hidden sm:block">
        <NavbarItems />
      </nav>
      <MobileNavBar />
    </header>
  );
}

export default Header;
