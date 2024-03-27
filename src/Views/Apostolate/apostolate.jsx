import "./apostolate.css"
import Hero from "../../Components/Hero/hero"
import apostolateImage from "../../assets/LogoBlancoCruz.png"
import Apostolados from "../../Components/Apostolados/apostolados"

const Apostolate = () => {

  return (
    <section className="apostolate-container">
      <Hero title={"  Apostolate  "} imagen={apostolateImage} />
      <Apostolados />
      
    </section>
  )
}

export default Apostolate;