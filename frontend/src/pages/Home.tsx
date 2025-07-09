
// import NavBar from "../composants/navbar/NavBar";
import Header from "../composants/header/Header";
import About from "../composants/about/About";
import Services from "../composants/services/services";
import Info from "../composants/info/info";
import Brands from "../composants/brands/Brands";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center md:gap-12">
      <Header />
      <About />
      <Services/>
      <Info/>
      <Brands/>
      {/* <NavBar /> */}
      {/* <Hero /> */}
      {/* Add more components as needed */}
    </div>
  );
};

export default Home;
