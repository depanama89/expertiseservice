import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
const Info = () => {
  return (
    <section className="w-full  ">
      <div className="flex flex-col items-center gap-8 h-auto w-full">
        {/* style={{
          background: "linear-gradient(180deg, #F9F9F9 0%, #151b2b 100%)",
        }} */}
        <h1 className="font-bold text-xl lg:text-2xl">Pourquoi Expertise Service?</h1>
        <div className="grid grid-colis-1 lg:grid-cols-2 gap-8 px-4 lg:px-8 justify-center ">
          <div className="flex flex-col items-center gap-4 md:gap-6 w-full lg:w-[320px] lg:h-auto">
            <div className=" flex items-center justify-center w-[320px] h-[208px] lg:w-[320px] lg:h-[208px]  ">
              <img src={img2} alt="bg info" className="w-full" />
            </div>
            <div className="flex flex-col justify-center py-4lg:px-35  gap-4 w-[320px] h-[98px] lg:w-[320px] lg:h-[196px]">
              <h2 className="text-sm lg:text-sm font-semibold  lg:py-4 font-sora">
                En RDC, notre expertise informatique est toujours à portée de
                main.
              </h2>
              <p className="text-sm md:text-sm">
                Un expert local qui comprend vos défis, vous écoute et vous
                propose des solutions adaptées à la réalité des entreprises
                congolaises.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-[224px] h-[148px] lg:w-[448px] lg:h-[296px]">
                <img src={img1} alt="bg info" className="w-full" />
            </div>
            <div>
                <h2>Accédez à tout moment, où que vous soyez.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
