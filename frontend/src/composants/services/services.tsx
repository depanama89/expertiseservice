import { GoArrowUpRight } from "react-icons/go";
import code from "../../assets/code.png";
import security from "../../assets/lock.png";
import share from "../../assets/share-2.png";
import { LuFolderArchive } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";

const Services = () => {
  return (
    <section className="w-full lg:px-14  flex items-center justify-center ">
      <div
        className=" h-auto w-full rounded-2xl py-8 lg:py-8 flex items-center  flex-col"
        style={{
          background: "linear-gradient(180deg, #F9F9F9 0%, #CDECEF 100%)",
        }}
      >
        <h1 className="text-xl lg:text-2xl font-bold text-center py-4  md:py-6 lg:py-8">
          Nos Services
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-6 px-4 lg:px-8 ">
          <div className="w-full lg:w-[320px] lg:h-[390px] flex flex-col  gap-4 px-4 py-4 lg:px-8 bg-white rounded-2xl hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <div className="pt-4">
                <img src={code} alt="code" className="w-8 h-4 lg:w-16 lg:h-8" />
              </div>
              <h1 className="text-title font-semibold text-lg">
                Développement logiciel{" "}
              </h1>

              <p className="text-justify text-sm lg:text-base text-black/80">
                Expertise Services vous propose de vous accompagner en mettant à
                votre service son équipe de développeurs qualifiés afin de vous
                proposer de solutions sur mesure.
              </p>
            </div>
            <ul className="flex flex-col text-sm lg:text-base gap-2">
              <li className="font-medium">Application web </li>
              <li className="font-medium">Application mobile </li>
            </ul>
            <div>
              <GoArrowUpRight className="text-black cursor-pointer hover:bg-title hover:text-white rounded-full w-6 h-6 hover:w-8 hover:h-8 hover:p-2 transition duration-300 ease-out " />
            </div>
          </div>
          <div className="w-full lg:w-[320px] lg:h-[390px] flex flex-col  gap-4 px-4 py-4 lg:px-8 bg-white rounded-2xl hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <div className="pt-4">
                <img
                  src={security}
                  alt="code"
                  className="w-6 h-6 lg:w-9 lg:h-9"
                />
              </div>
              <h1 className="text-title font-semibold text-lg">
                Cybersecurité{" "}
              </h1>

              <p className="text-start text-sm lg:text-base text-black/80">
                Expertise Services accompagne les dirigeants et responsables
                dans l'organisation, la mise en œuvre de leur politique de
                sécurité de l'information
              </p>
            </div>
            <ul className="flex flex-col text-sm lg:text-base gap-2">
              <li className="font-medium">Infrastructure réseau </li>
              <li className="font-medium">Securisé réseau </li>
            </ul>
            <div>
              <GoArrowUpRight className="text-black cursor-pointer hover:bg-title hover:text-white rounded-full w-6 h-6 hover:w-8 hover:h-8 hover:p-2 transition duration-300 ease-out " />
            </div>
          </div>
          <div className="w-full lg:w-[320px] lg:h-[390px] flex flex-col  gap-4 px-4 py-4 lg:px-8 bg-white rounded-2xl hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <div className="pt-4">
                <img src={share} alt="code" className="w-6 h-6 lg:w-9 lg:h-9" />
              </div>
              <h1 className="text-title font-semibold text-lg">
                Virtualisation
              </h1>

              <p className="text-start text-sm lg:text-base text-black/80">
                Nos architectes disposent de compétences dans la mise en place
                d’infrastructures virtualisées permettant à nos clients de
                réduire le coût d’acquisition des équipements
              </p>
            </div>
            <ul className="flex flex-col text-sm lg:text-base gap-2">
              <li className="font-medium">Infrastructure réseau </li>
              <li className="font-medium">Sécurité </li>
            </ul>
            <div>
              <GoArrowUpRight className="text-black cursor-pointer hover:bg-title hover:text-white rounded-full w-6 h-6 hover:w-8 hover:h-8 hover:p-2 transition duration-300 ease-out " />
            </div>
          </div>

          <div className="w-full lg:w-[320px] lg:h-[390px] flex flex-col  gap-4 px-4 py-4 lg:px-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <div className="pt-4">
                <LuFolderArchive className="w-6 h-6 lg:w-9 lg:h-9" />
                {/* <img src={share} alt="code" className="w-6 h-6 lg:w-9 lg:h-9" /> */}
              </div>
              <h1 className="text-title font-semibold text-lg">
                Archivage des Données
              </h1>

              <p className="text-start text-sm lg:text-base text-black/80">
                L’information est devenue une donnée omniprésente dans notre
                société. Nous sommes entourés de diverses sources d’information.
              </p>
            </div>
            <ul className="flex flex-col text-sm lg:text-base gap-2">
              <li className="font-medium">Application web </li>
              <li className="font-medium">Application mobile </li>
            </ul>
            <div>
              <GoArrowUpRight className="text-black cursor-pointer hover:bg-title hover:text-white rounded-full w-6 h-6 hover:w-8 hover:h-8 hover:p-2 transition duration-300 ease-out " />
            </div>
          </div>
          <div className="w-full lg:w-[320px] lg:h-[390px] flex flex-col  gap-4 px-4 py-4 lg:px-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300 cursor-pointer">
            <div className="flex flex-col gap-3">
              <div className="pt-4">
                <IoBookOutline className="w-6 h-6 lg:w-9 lg:h-9" />
                {/* <img src={share} alt="code" className="w-6 h-6 lg:w-9 lg:h-9" /> */}
              </div>
              <h1 className="text-title font-semibold text-lg">Formations</h1>

              <p className="text-start text-sm lg:text-base text-black/80">
                Nos formations couvrent tous les besoins pour les fonctionnaires
                de l’État et les particuliers.En Réseaux
                ,applications,programmation,etc.
              </p>
            </div>
            <ul className="flex flex-col text-sm lg:text-base gap-2">
              <li className="font-medium">Developpement web </li>
              <li className="font-medium">Developpement mobile </li>
            </ul>
            <div>
              <GoArrowUpRight className="text-black cursor-pointer hover:bg-title hover:text-white rounded-full w-6 h-6 hover:w-8 hover:h-8 hover:p-2 transition duration-300 ease-out " />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
