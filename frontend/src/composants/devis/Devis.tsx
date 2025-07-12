import { useState } from "react";

const Devis = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [emailvalue, setEmailValue] = useState("");
  const [sujetFocus, setSujetFocus] = useState(false);
  const [sujetValue, setSujetValue] = useState("");
  const [messageFocus, setMessageFocus] = useState(false);
  const [messageValue, setMessageValue] = useState("");

  // const showLabel = isFocus || value !== "";
  return (
    <section className=" w-full flex  justify-center h-[400px]">
      <div className="px-4">
        <h1 className="text-xl lg:text-2xl font-bold text-center py-4  max-w-3xl md:py-6 lg:py-8">
          Exposez-nous vos besoins : nous vous accompagnons avec un devis clair
          et adapté.
        </h1>
        <div className="flex items-center">
          <div className="">

          </div>
          <form className="max-w-md flex flex-col gap-4 ">
            <div className="grid gap-y-8">
              <div className="relative h-12 border-b border-border">
                <label
                  htmlFor="Email"
                  className={`absolute left-0  text-gray-400 text-sm transition-all duration-300 ease-in-out  peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-xs ${
                    emailFocus || emailvalue !== "" ? "top-[-10px]" : "top-3"
                  }`}
                >
                  Email :
                </label>
                <input
                  type="text"
                  id="email"
                  className="absolute top-0 left-0 w-full h-full pr-4 pb-4 pt-4 pl-0 outline-none border-none text-gray-400"
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => setEmailFocus(false)}
                  onChange={(e) => setEmailValue(e.target.value)}
                  value={emailvalue}
                />
              </div>
              <div className="relative h-12 border-b border-border">
                <label
                  htmlFor="Sujet"
                  className={`absolute left-0  text-gray-500 text-sm transition-all duration-200 ${
                    sujetFocus || sujetValue !== "" ? "top-[-10px]" : "top-3"
                  }`}
                >
                  Sujet :
                </label>
                <input
                  type="text"
                  id="sujet"
                  onFocus={() => setSujetFocus(true)}
                  onBlur={() => setSujetFocus(false)}
                  onChange={(e) => setSujetValue(e.target.value)}
                  value={sujetValue}
                  className="absolute left-0 top-3 text-gray-500 text-sm transition-all duration-200 w-full outline-none border-none"
                />
              </div>
              <div className="relative h-32 border-b border-border">
                <label
                  htmlFor="message"
                  className={`absolute left-0  text-gray-500 text-sm transition-all duration-200 ${
                    messageFocus || messageValue !== ""
                      ? "top-[-20px]"
                      : "top-3"
                  }`}
                >
                  Message:
                </label>
                <textarea id="message"
                  className="w-full outline-none border-none"
                  rows={5} cols={20}
                  onFocus={()=>setMessageFocus(true)}
                  onBlur={()=>setMessageFocus(false)}
                  onChange={(e) => setMessageValue(e.target.value)}
                ></textarea>
              </div>
             
            </div>
             <button className="text-left">Contacter Nous</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Devis;
