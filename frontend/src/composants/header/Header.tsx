// import React from "react";
import NavBar from "../navbar/NavBar";
import bgheader from "../../assets/bg-header.png";
const Header = () => {
  return (
    <div className="w-full h-[500px] bg-cover " style={{backgroundImage:URL(${bgheader})}}>
      <NavBar />
    </div>
  );
};

export default Header;
