import NavbarItem from "./navbarItem";

const NavbarItems = ({ className = "gap-5" }) => {
  return (
    <ul className={`flex flex-col sm:flex-row   ${className}`}>
      <NavbarItem>Home</NavbarItem>
      <NavbarItem>Coupons</NavbarItem>
      <NavbarItem>FAQ</NavbarItem>
      <NavbarItem>Contact</NavbarItem>
    </ul>
  );
};

export default NavbarItems;
