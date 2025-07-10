import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="w-full h-[400px]   ">
      <div className="flex flex-col gap-8  md:gap-12 px-4 lg:gap-17 md:px-16 lg:px-35 max-lg:items-center">
        <h1 className="text-white text-lg md:text-2xl lg:max-w-2xl lg:text-3xl md:leading-12 font-bold leading-8  mt-24  md:mt-32 ">
          Expertise Services, votre partenaire Informatique
        </h1>
        <p
          className="text-white text-sm md:text-base max-w-3xl leading-6 md:leading-9 
            "
        >
          Met à votre disposition, pour un temps limité, l’un de ses experts IT
          certifié afin de : vous accompagner sur un projet informatique,
          assister vos équipes sur une problématique particulière liée à votre
          infrastructure ou votre système d’information. Mise à disposition d’un
          expert « produit ».
        </p>
        <div>
          
          <button className="px-6 py-4 w-content rounded-full border border-white flex  gap-4 text-white cursor-pointer">
            Explorer <GoArrowUpRight className="text-white cursor-pointer" />
          </button>
        </div>
      </div>
      {/* <div className="absolute right-0 grid">
        <p>Follow us:</p>
      </div> */}
      {/* <div className="w-full h-[600px]"> */}
      {/* <div className="flex items-center flex-col justify-center h-[600px] ">
          <h1 className="text-white text-xl font-bold leading-12 text-center ">
            Expertise Services ,votre partenaire Informatique
          </h1>
          <p>
            Met à votre disposition, pour un temps limité, l’un de ses experts
            IT certifié afin de : vous accompagner sur un projet informatique,
            assister vos équipes sur une problématique particulière liée à votre
            infrastructure ou votre système d’information. Mise à disposition
            d’un expert « produit ».
          </p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Hero;
