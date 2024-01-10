import Image from "next/image";
import NavbarItems from "../navbar/navbarItems";
import MobileNavBar from "../navbar/mobileNavBar";
import Button from "../button/button";

function Header({ showSavingButton = true, className = "" }) {
  return (
    <header className={`${className} my-5 flex items-center justify-between`}>
      <Image
        src={"/logo.svg"}
        priority="true"
        alt="logo"
        width={103}
        height={32}
      />
      <nav className="hidden sm:block">
        <NavbarItems className={"flex gap-5"} />
      </nav>
      <MobileNavBar />
      {showSavingButton && (
        <div className={`hidden sm:block`}>
          <Button>Start Saving</Button>
        </div>
      )}
    </header>
  );
}

export default Header;
