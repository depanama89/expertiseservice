import { useState } from "react";

const Devis = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState("");

  const showLabel = isFocus || value !== "";
  return (
    <section className=" w-full flex  justify-center h-[400px]">
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-center py-4  max-w-3xl md:py-6 lg:py-8">
          Exposez-nous vos besoins : nous vous accompagnons avec un devis clair
          et adapté.
        </h1>
        <div>
          <div></div>
          <form className="max-w-md">
            <div className="grid gap-y-8">
              <div className="relative h-12 border-b border-border">
                <label
                  htmlFor="Email"
                  className={`absolute left-0  text-gray-400 text-sm transition-all duration-300 ease-in-out  peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs ${showLabel ? "top-[-10px]":"top-3"}`}
                >
                  Email
                </label>
                <input
                  type="text"
                  className="absolute top-0 left-0 w-full h-full pr-4 pb-4 pt-4 pl-0 outline-none border-none text-gray-400"
                  onFocus={()=>setIsFocus(true)}
                  onBlur={()=>setIsFocus(false)}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <div className="relative h-12 border-b border-border">
                <label
                  htmlFor="Sujet"
                  className={`absolute left-0  text-gray-500 text-sm transition-all duration-200 ${showLabel ? "top-[-10px]":"top-3"}`} 
                >
                  Sujet
                </label>
                <input
                  type="text"
                  className="absolute left-0 top-3 text-gray-500 text-sm transition-all duration-200 w-full outline-none border-none"
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea />
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Devis;
