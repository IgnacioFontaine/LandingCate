import "./hero.css"

const Hero = ({title, imagen, frase}) => {

  return (
    <section className="hero-container">
      <header className="hero-image">
        <img src={imagen} alt="La Cate" />
      </header>
      <body className="hero-title">
        <h1>{title}</h1>
        <h6 className="hero-title-frase">{frase}</h6>
      </body>
    </section>
  )
}

export default Hero;