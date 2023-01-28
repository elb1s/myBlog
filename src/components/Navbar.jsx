import { useState } from "react";
import { ReactComponent as Hamburger } from "../assets/icon-hamburger.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const links = [
    { id: "home", name: "Home" },
    { id: "whoami", name: "whoami" },
    { id: "techs", name: "Technologies" },
    { id: "myworks", name: "My Works" },
  ];
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="bg-gradient-to-t from-[#73c5f0] bg-opacity-80 to-[#747fff] h-14 font-scope  fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto h-14 items-center pr-4 flex md:justify-center ">
        <div>
          <Hamburger
            className="cursor-pointer md:hidden mr-5 right-0 absolute "
            onClick={handleShowNavbar}
          />
        </div>
        <div className="list-none hidden md:flex  md:gap-14 text-white">
          {links.map((link) => (
            <Link
              className="cursor-pointer hover:border-b-2 border-b-black hover:text-black "
              to={link.id}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      {showNavbar && (
        <div className=" list-none md:hidden flex flex-col gap-8 mx-auto text-white  p-10 bg-gradient-to-t from-[#317beb] bg-opacity-80 to-[#8a73e7]  ">
          {links.map((link) => (
            <Link className="cursor-pointer" to={link.id}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
