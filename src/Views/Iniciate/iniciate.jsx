import Hero from "../../Components/Hero/hero";
import "./iniciate.css"
import iniciateImage from "../../assets/LogoBlancoCruz.png"

const Iniciate = () => {

  return (
    <section className="iniciate-container">
      <Hero title={"Iniciate"} imagen={iniciateImage} />
    </section>
  )
}

export default Iniciate;