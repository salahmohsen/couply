import Link from "next/link";
import { usePathname } from "next/navigation";

function NavbarItem({ children }) {
  const pathName = usePathname();
  const style =
    "relative cursor-pointer after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:bg-black after:rounded-full";

  return (
    <li>
      <Link
        href="/"
        className={`${style} after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
          pathName ===
          `${children.toLowerCase() === "home" ? "/" : children.toLowerCase()}`
            ? `${style} after:w-full  `
            : null
        }`}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavbarItem;
