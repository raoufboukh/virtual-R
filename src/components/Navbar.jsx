import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
const Navbar = () => {
  const [scr, setScr] = useState(0);
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
      className={`bg-[rgb(21_21_21)] fixed z-50 w-full  transition-all border-b border-transparent ${
        scr > 0 && "border-b-orange-400"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-1">
            <img className="w-10 h-10" src={logo} alt="" />
            <p className="text-2xl font-bold text-white">VirtualR</p>
          </div>
          <ul className="flex items-center">
            <li className="mx-4 text-white">
              {/* <a href="#" className="text-white"> */}
              Home
              {/* </a> */}
            </li>
            <li className="mx-4 text-white">
              {/* <a href="#" className="text-white"> */}
              Services
              {/* </a> */}
            </li>
            <li className="mx-4 text-white">
              {/* <a href="#" className="text-white"> */}
              About
              {/* </a> */}
            </li>
            <li className="mx-4 text-white">
              {/* <a href="#" className="text-white"> */}
              Contact
              {/* </a> */}
            </li>
          </ul>
          <ul className="flex items-center gap-6">
            <li className="border border-white text-white px-2 py-1 rounded-md">
              Sign in
            </li>
            <li className="bg-gradient-to-r from-orange-400 to-orange-700 rounded-md text-white py-1 px-2">
              Create an account
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
