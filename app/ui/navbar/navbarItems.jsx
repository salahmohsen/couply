import NavbarItem from "./navbarItem";

const NavbarItems = ({ className = "" }) => {
  return (
    <ul className={`flex flex-col gap-5 sm:flex-row   ${className}`}>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>Coupons</NavbarItem>
      <NavbarItem>FAQ</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </ul>
  );
};

export default NavbarItems;
