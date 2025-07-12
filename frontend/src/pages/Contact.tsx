import Devis from "../composants/devis/Devis"
import HeroContact from "../composants/hero/HeroContact"


const Contact = () => {
  return (
<div className="w-full flex flex-col gap-8 items-center justify-center md:gap-12">
      <HeroContact/>
     <Devis/>
    </div>
  )
}

export default Contact