import Description from "../../Components/Description/description";
import Hero from "../../Components/Hero/hero";
import Structure from "../../Components/Structure/structure";
import "./home.css"

const Home = () => {

  return (
    <section className="home-container">
      <Hero />
      <Description />
      <Structure />
    </section>
  )
}

export default Home;