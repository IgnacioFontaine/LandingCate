import "./hero.css"
import logoCate from "../../assets/Logo.png"

const Hero = () => {

  return (
    <section className="hero-container">
      <header className="hero-image">
        <img src={logoCate} alt="La Cate" />
      </header>
      <body className="hero-title">
        <h1>La Cate Grupo Juvenil</h1>
      </body>
    </section>
  )
}

export default Hero;