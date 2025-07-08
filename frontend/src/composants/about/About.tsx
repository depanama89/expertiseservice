import { GoArrowUpRight } from "react-icons/go";
import imgabout from "../../assets/imgAbout.png";

const About = () => {
  return (
    <section className="w-full lg:px-35">
      <div className="flex lg:align-start flex-col  items-center justify-center lg:flex-row gap-6 lg:gap-8 ">
        <div className="w-full lg:max-w-2xl   px-4 ">
          <img src={imgabout} alt="about" className="w-full"/>
        </div>
        <div className="w-full  lg:max-w-2xl   flex flex-col gap-4 lg:gap-6 items-center px-4 lg:px-8">
          <h1 className="text-lg max-lg:text-center lg:leading-12 lg:text-2xl font-bold">
            Qui nous-sommes ?
          </h1>
          <div className="text-sm text-justify flex flex-col gap-4 lg:gap-6">
            <p>
              EXPERTISE SERVICES est une société de droit congolais , nous avons
              réalisés de multiples solutions informatique pour des clients de
              secteurs d’activité variés . Et nous choisir parceque nous mettons
              :
            </p>
            <ul className="flex flex-col gap-2 lg:gap-4">
              <li>
                <strong>Notre expertise</strong> : Nous avons une équipe
                d'experts IT certifiés et expérimentés, prêts à vous accompagner
                sur vos projets informatiques.
              </li>
              <li>
                <strong>Notre flexibilité</strong> : Nous nous adaptons à vos
                besoins spécifiques, que ce soit pour un projet ponctuel ou un
                accompagnement à long terme.
              </li>
              <li>
                <strong>Notre engagement</strong> : Nous sommes dédiés à la
                réussite de vos projets et à l'optimisation de votre système
                d'information.
              </li>
            </ul>
            <button className="px-6 py-4 rounded-full border border-[#136682] flex items-center gap-4 text-black font-bold cursor-pointer w-max">
              Explorer <GoArrowUpRight className="text-black cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
