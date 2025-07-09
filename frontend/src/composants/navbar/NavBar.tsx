// import React from "react";

import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import logo from "../../assets/logo.svg"
const NavBar = () => {
  const [isActive, setActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };
  console.log(isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      console.log(scrollTop);

      if (scrollTop > 50) {
        setActive(true);
        console.log(scrollTop);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-17 px-4  md:px-14 lg:px-35 flex items-center z-50 transition-all duration-500 ease-in-out ${
          isActive
            ? "bg-white shadow-md text-black backdrop-blur-sm"
            : "bg-transparent text-white"
        }`}
        style={{ backdropFilter: isActive ? "blur(8px)" : "none" }}
      >
        <div className="flex items-center w-full">
          <nav className="flex items-center justify-between w-full">
            <div className="w-24 h-8 md:w-24 md:h-8 lg:w-48 lg:h-16 ">
              <img
                src={logo}
                alt="logo"
                className="w-full object-cover" />
              {/* <h1 className="text-xl md:text-2xl font-bold">Expertise</h1> */}
            </div>
            <ul className="hidden items-center gap-6 text-sm  cursor-pointer md:hidden lg:flex">
              <li>Home</li>
              <li>Qui sommes-nous?</li>
              <li>Store</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <div className="lg:hidden">
              {isMobileMenuOpen ? (
                <div className="w-8 h-8 bg-white  rounded-full flex items-center justify-center ">
                  <IoClose
                    onClick={toggleMobileMenu}
                    size={24}
                    className=" text-black"
                  />
                </div>
              ) : (
                <TbMenu2 size={24} onClick={toggleMobileMenu} />
              )}
              {/* <div className="relative w-full"> */}
              {/* {isMobileMenuOpen && (
                <ul className="fixed top-20 left-0  bg-white w-full min-h-full text-sm text-black flex flex-col gap-4 p-4 z-[999]">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Qui sommes-nous?</li>
                  <li className="cursor-pointer">Store</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Blog</li>
                  <li className="cursor-pointer">Contact</li>
                </ul>
              )} */}
              {/* </div> */}
            </div>
          </nav>
        </div>
      </div>
      {isMobileMenuOpen && (
        <ul className="fixed top-16 left-0  bg-white w-full min-h-full text-black flex flex-col gap-4 p-4 z-[999]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Qui sommes-nous?</li>
          <li className="cursor-pointer">Store</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
