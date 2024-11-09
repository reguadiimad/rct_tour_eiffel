import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Menu from '../Models/Menu.js';
import MobileMenu from "../Models/MobileMenu.js";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between w-[94%] p-2 font-sans absolute rounded-lg top-3 left-[3%] text-white/90">
        <div className="w-[50%] lg:w-[30%]">
          <img
            alt="logo"
            src={process.env.PUBLIC_URL + "/logos/logo1.png"}
            className="h-10 md:h-16 object-cover opacity-90 mb-4"
          />
        </div>

        {/* Links Section - Desktop */}
        <div className="hidden lg:flex lg:w-[50%] xl:w-[50%] justify-between text-center text-sm xl:text-lg 3xl:text-2xl ">
          {["Accueil", "À propos", "Cycles", "Services", "Actualités", "Galerie"].map((text, index) => (
            <NavLink  key={index}>{text}</NavLink>
          ))}
        </div>

        {/* Contact & Registration Section - Desktop */}
        <div className="hidden lg:flex lg:w-[30%] items-center flex-row-reverse mt-2">
          <Link className="m-2 p-3.5 px-4 bg-white rounded-3xl hover:bg-white/100">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Inscription</span>
          </Link>
          <Link className="m-2 hover:text-white">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex lg:hidden w-[50%] justify-end">
          <FontAwesomeIcon icon={faBars} className="text-3xl md:text-4xl hover:animate-pulse" onClick={()=>setIsMobile(true)}/>
        </div>
      </nav>

      {/* Menu Section */}
      <Menu visible={scrolled && !isMobile} />
      <MobileMenu visble={isMobile} onClose={()=>setIsMobile(false)}/>
      
    </>
  );
};


const NavLink = ({ children }) => (
  <Link className="w-[16.6666666667%] hover:text-white hover:animate-pulse ">
    {children}
  </Link>
);



export default Navbar;
