import "./hero.css"

const Hero = ({title, imagen}) => {

  return (
    <section className="hero-container">
      <header className="hero-image">
        <img src={imagen} alt="La Cate" />
      </header>
      <body className="hero-title">
        <h1>{title}</h1>
      </body>
    </section>
  )
}

export default Hero;