import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import { navLinks } from "./constants";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-scroll";
const Navbar = () => {
  const [scr, setScr] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      setScr(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });
  return (
    <header
      className={`backdrop-blur-lg fixed z-50 w-full transition-all border-b border-transparent ${
        scr > 0 && "border-b-orange-400"
      }`}
    >
      <div className="container relative">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-1">
            <img className="w-10 h-10" src={logo} alt="" />
            <p className="text-2xl font-bold text-white">VirtualR</p>
          </div>
          <IoMenu
            className="lg:hidden text-white text-xl cursor-pointer"
            onClick={() => setShow(!show)}
          />
          <div className={show ? `links show` : `links`}>
            <IoCloseSharp
              className="lg:hidden absolute top-3 right-3 cursor-pointer text-white text-xl"
              onClick={() => setShow(!show)}
            />
            <ul className="lg:flex lg:items-center">
              {navLinks.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className="my-5 text-center lg:my-0 mx-4 text-white cursor-pointer transition-all duration-300 hover:text-orange-500"
                  >
                    {nav.text}
                  </li>
                );
              })}
            </ul>
            <ul className="flex items-center lg:justify-start justify-evenly gap-6">
              <li className="border border-white text-white px-2 py-1 rounded-md cursor-pointer">
                Sign in
              </li>
              <li className="bg-gradient-to-r from-orange-400 to-orange-700 rounded-md text-white py-1 px-2 cursor-pointer">
                Create an account
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
