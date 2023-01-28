import { useState } from "react";
import { ReactComponent as Hamburger } from "../assets/icon-hamburger.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const links = [
    { id: "home", name: "Home" },
    { id: "whoami", name: "whoami" },
    { id: "myworks", name: "My Works" },
    { id: "contactme", name: "Contact Me" },
  ];
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="bg-gradient-to-b from-[#317beb] bg-opacity-80 to-[#8a73e7] h-16 font-scope">
      <div className="max-w-7xl mx-auto h-16 items-center pr-4 flex justify-between  ">
        <div>
          <Logo className="h-14" />
        </div>
        <div>
          <Hamburger
            className="cursor-pointer md:hidden mr-5 "
            onClick={handleShowNavbar}
          />
        </div>
        <div className="list-none hidden md:flex  md:gap-14 text-white">
          {links.map((link) => (
            <li id={link.id}> {link.name}</li>
          ))}
        </div>
      </div>
      {showNavbar && (
        <div className=" list-none md:hidden flex flex-col gap-8 mx-auto text-white   p-10 bg-gradient-to-t from-[#317beb] bg-opacity-80 to-[#8a73e7]  ">
          {links.map((link) => (
            <li id={link.id}> {link.name}</li>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
