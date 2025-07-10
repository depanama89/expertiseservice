import fortinet from "../../assets/exp-02.png";
import dell from "../../assets/exp-01.png";
import hp from "../../assets/exp-03.png";
import kasp from "../../assets/exp-05.svg";
import micro from "../../assets/exp-06.svg";
import sopho from "../../assets/exp-07.svg";
import cisco from "../../assets/exp-08.svg";
import react from "../../assets/exp-09.svg";
import nextjs from "../../assets/exp-10.svg";
import tail from "../../assets/exp-11.svg";
import flutter from "../../assets/exp-12.svg";
import typescript from "../../assets/exp-13.svg";
import angular from "../../assets/exp-14.svg";
import html from "../../assets/exp-15.svg";

const Brands = () => {
  return (
    <section className="w-full h-auto lg:h-[400px]  bg-brands flex flex-col items-center justify-center">
      <div className="px-4 lg:px-35 py-8 flex flex-col gap-16 items-center">
        <h1 className="text-lg lg:text-2xl font-bold text-center">Marques Proposées et Technologies</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full  gap-x-4 gap-y-4 justify-center  items-center">
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={fortinet} alt="logo fortinet" className="w-full h-full object-contain" loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={hp} alt="logo fortinet" className="w-full h-full object-contain" loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={dell} alt="logo dell" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={kasp} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={micro} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={sopho} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={cisco} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={react} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={nextjs} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={flutter} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={tail} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={typescript} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={html} alt="logo html" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={angular} alt="logo angular" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
