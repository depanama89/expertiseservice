// import React from "react";

import bgheader from "../../assets/bg-header.png";
import Hero from "../hero/Hero";
const Header = () => {
  return (
    <div className="w-full h-[500px] md:h-[550px] lg:h-[600px] bg-cover " style={{ backgroundImage: `url(${bgheader})`, backgroundPosition: "center", backgroundSize: "cover" }}>
     
      <Hero />
    </div>
  );
};

export default Header;
