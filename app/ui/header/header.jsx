"use client";

import Image from "next/image";
import NavbarItems from "../navbar/navbarItems";
import MobileNavBar from "../navbar/mobileNavBar";
import Button from "../button/button";

function Header() {
  return (
    <header className="my-5 flex items-center justify-between">
      <Image
        src={"/logo.svg"}
        priority="true"
        alt="logo"
        width={103}
        height={32}
      />
      <nav className="hidden sm:block">
        <NavbarItems />
      </nav>
      <MobileNavBar />
      <div className="hidden sm:block">
        <Button variation="standard">Start Saving</Button>
      </div>
    </header>
  );
}

export default Header;
