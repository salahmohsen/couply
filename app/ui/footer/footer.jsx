import Image from "next/image";
import NavbarItems from "../navbar/navbarItems";

const Footer = () => {
  return (
    <foote className=" flex h-64 flex-col gap-10 border-t py-10">
      <div className="mx-5 flex flex-col items-center justify-between gap-5 sm:mx-14 sm:flex-row md:mx-32">
        <Image
          src={"/logo.svg"}
          priority="true"
          alt="logo"
          width={103}
          height={32}
        />
        <NavbarItems className="flex gap-5" />
      </div>
      <div className="mx-5 flex flex-col items-center justify-between gap-5  sm:mx-14 sm:flex-row md:mx-32">
        <div className="flex gap-5">
          <a target="_blank" href="https://x.com/SalahMohsen_">
            <Image
              src={"/contact/x.svg"}
              priority="true"
              alt="x"
              width={30}
              height={30}
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/iSalahMohsen/">
            <Image
              src={"/contact/facebook.svg"}
              priority="true"
              alt="x"
              width={30}
              height={30}
            />
          </a>
          <a target="_blank" href="https://open.spotify.com/user/salahmo7sen">
            <Image
              src={"/contact/spotify.svg"}
              priority="true"
              alt="x"
              width={30}
              height={30}
            />
          </a>
        </div>
        <p className="text-center text-[#6C7667]">
          Copyright 2022-2023 @Couply LLC
        </p>
      </div>
    </foote>
  );
};

export default Footer;
