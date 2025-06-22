import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-18  px-20 border flex items-center ">
      <div className="flex items-center w-full">
        <nav className="flex items-center justify-between w-full">
          <div>
            <h1>Expertise</h1>
          </div>
          <ul className="flex items-center gap-6">
            <li>Home</li>
            <li>Qui sommes-nous?</li>
            <li>Store</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
