import "./apostolate.css"
import Hero from "../../Components/Hero/hero"
import apostolateImage from "../../assets/LogoBlancoCruz.png"
import Apostolados from "../../Components/Apostolados/apostolados"

const Apostolate = () => {

  const frase = "Les aseguro que todo lo que hicieron por uno de mis hermanos, aún por el más pequeño, lo hicieron por mí Mateo 25, 40"

  return (
    <section className="apostolate-container">
      <Hero title={"  Apostolate  "} imagen={apostolateImage} frase={frase} />
      <Apostolados />
      
    </section>
  )
}

export default Apostolate;