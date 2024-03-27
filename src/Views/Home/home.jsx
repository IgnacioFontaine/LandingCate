import Description from "../../Components/Description/description";
import Hero from "../../Components/Hero/hero";
import "./home.css"

const Home = () => {

  return (
    <section className="home-container">
      <Hero />
      <Description />
    </section>
  )
}

export default Home;