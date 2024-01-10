"use client";
import Image from "next/image";
import NavbarItems from "./navbarItems";
import { useState } from "react";

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className=" z-30 block sm:hidden "
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {!isMenuOpen && (
          <Image
            src="/menu.svg"
            priority="true"
            alt="menu"
            width="24"
            height="22"
            className={`sm:hidden `}
          />
        )}
        {isMenuOpen && (
          <Image
            src="/close.svg"
            width={20}
            height={20}
            alt="close"
            priority="true"
            className={`fixed right-5 top-7 sm:hidden`}
          />
        )}
      </button>
      <div
        className={`fixed top-0 z-20 flex h-screen w-64 flex-col bg-white transition-all duration-500 ease-in-out sm:hidden ${
          isMenuOpen ? "right-0 " : "-right-full"
        }`}
      >
        <NavbarItems className="mx-10 mt-20 flex flex-col gap-5 sm:flex-row" />
      </div>
    </>
  );
};

export default MobileNavBar;
