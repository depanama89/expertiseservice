import code from "../../assets/code.png";

const Services = () => {
  return (
    <section className="w-full lg:px-14  flex items-center justify-center ">
      <div
        className=" h-auto w-full rounded-2xl"
        style={{
          background: "linear-gradient(180deg, #F9F9F9 0%, #CDECEF 100%)",
        }}
      >
        <h1 className="text-xl lg:text-2xl font-bold text-center py-4  md:py-6 lg:py-8">
          Nos Services
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4 lg:px-8 items-center justify-center">
          <div className="w-full lg:w-[320px] lg:h-[385px] flex flex-col  gap-6 px-4 py-4 lg:px-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <div className="pt-4">
                <img src={code} alt="code"  className="w-8 h-4 lg:w-16 lg:h-8" />
              </div>
              <h1>Développement logiciel </h1>

              <p className="text-justify text-sm lg:text-base">
                Expertise Services vous propose de vous accompagner en mettant à
                votre service son équipe de développeurs qualifiés afin de vous
                proposer de solutions sur mesure.
              </p>
            </div>
            <ul className="flex flex-col text-sm lg:text-base gap-2">
              <li className="font-bold">Application web </li>
              <li className="font-bold">Application mobile </li>
            </ul>
          </div>
          <div className="w-full lg:w-[320px] lg:h-[385px] flex flex-col  gap-6 px-4 py-4 lg:px-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <div className="pt-4">
                <img src={code} alt="code"  className="w-8 h-4 lg:w-16 lg:h-8" />
              </div>
              <h1>Développement logiciel </h1>

              <p className="text-justify text-sm lg:text-base">
                Expertise Services vous propose de vous accompagner en mettant à
                votre service son équipe de développeurs qualifiés afin de vous
                proposer de solutions sur mesure.
              </p>
            </div>
            <ul className="flex flex-col text-sm lg:text-base gap-2">
              <li className="font-bold">Application web </li>
              <li className="font-bold">Application mobile </li>
            </ul>
          </div>
          <div className="w-full lg:w-[320px] lg:h-[385px] flex flex-col  gap-6 px-4 py-4 lg:px-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <div className="pt-4">
                <img src={code} alt="code"  className="w-8 h-4 lg:w-16 lg:h-8" />
              </div>
              <h1>Développement logiciel </h1>

              <p className="text-justify text-sm lg:text-base">
                Expertise Services vous propose de vous accompagner en mettant à
                votre service son équipe de développeurs qualifiés afin de vous
                proposer de solutions sur mesure.
              </p>
            </div>
            <ul className="flex flex-col text-sm lg:text-base gap-2">
              <li className="font-bold">Application web </li>
              <li className="font-bold">Application mobile </li>
            </ul>
          </div>
          <div className="w-full lg:w-[320px] lg:h-[385px] flex flex-col  gap-6 px-4 py-4 lg:px-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <div className="pt-4">
                <img src={code} alt="code"  className="w-8 h-4 lg:w-16 lg:h-8" />
              </div>
              <h1>Développement logiciel </h1>

              <p className="text-justify text-sm lg:text-base">
                Expertise Services vous propose de vous accompagner en mettant à
                votre service son équipe de développeurs qualifiés afin de vous
                proposer de solutions sur mesure.
              </p>
            </div>
            <ul className="flex flex-col text-sm lg:text-base gap-2">
              <li className="font-bold">Application web </li>
              <li className="font-bold">Application mobile </li>
            </ul>
          </div>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default Services;
