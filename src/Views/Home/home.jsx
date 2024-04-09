import Description from "../../Components/Description/description";
import Hero from "../../Components/Hero/hero";
import Structure from "../../Components/Structure/structure";
import "./home.css"
import logoCate from "../../assets/Logo.png"
import LogoLibres from "../../Components/Libres/logoLibres";
import Info from "../../Components/Info/info";
import Oracion from "../../Components/Oracion/oracion";

const Home = () => {

  const frase = "Gracias por Invitarnos a ser Libres, Felices y Santos"

  return (
    <section className="home-container">
      <Hero title={"La Cate Grupo Juvenil"} imagen={logoCate} frase={frase} /> 
      <div className="description-logo">
        <Description />
        <LogoLibres />
      </div>
      <Structure />
      <Info />
      <Oracion />
    </section>
  )
}

export default Home;