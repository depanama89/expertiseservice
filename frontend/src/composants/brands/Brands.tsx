import fortinet from "../../assets/exp-02.png";
import cisco from "../../assets/exp-01.png";
import hp from "../../assets/exp-03.png";
import kasp from "../../assets/exp-05.svg";
import micro from "../../assets/exp-06.svg";

const Brands = () => {
  return (
    <section className="w-full h-[400px]  bg-brands flex flex-col items-center justify-center">
      <div className="lg:px-35 py-8 flex flex-col gap-16 items-center">
        <h1 className="text-xl lg:text-2xl font-bold text-center">Marques Proposés</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-x-4 justify-center  items-center">
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={fortinet} alt="logo fortinet" className="w-full h-full object-contain" loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={hp} alt="logo fortinet" className="w-full h-full object-contain" loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={cisco} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={kasp} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
            <div className="w-[159px] h-[59px] flex items-center justify-center">
               <img src={micro} alt="logo fortinet" className="w-full h-full object-contain"  loading="lazy"/> 
            </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
