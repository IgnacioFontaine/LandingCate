import Description from "../../Components/Description/description";
import Hero from "../../Components/Hero/hero";
import Structure from "../../Components/Structure/structure";
import "./home.css"
import logoCate from "../../assets/Logo.png"
import LogoLibres from "../../Components/Libres/logoLibres";

const Home = () => {

  return (
    <section className="home-container">
      <Hero title={"La Cate Grupo Juvenil"} imagen={logoCate} /> 
      <div className="description-logo">
        <Description />
        <LogoLibres />
      </div>
      <Structure />
    </section>
  )
}

export default Home;