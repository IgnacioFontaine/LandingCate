import "./apostolados.css"
import { Link } from "react-router-dom";
import apostoladoImage from "../../assets/LogoNegro.png"


function CardApostolados({id, nombre, descripcion}) {
  
  return (
    <div className="Apostolado" key={id}>
      <div  className="apostolado-image">
        <img src={apostoladoImage} alt="La Cate" />
      </div>
      <div className="apostolado-texto">
        <h2 className="name-apostolado">{nombre}</h2>
        <h4 className="description-apostolado">{descripcion}</h4>
        <div className="icon-instagram">
          <a href="https://www.instagram.com/grupoapostolate/" target="_blank" className="fa fa-instagram"></a>
        </div>
      </div>
    </div>
  )
}


const Apostolados = () => {
  const apostolados =
    [{ id: 20, nombre: "La Morada", descripcion: "Acompañamiento en un hogar para ancianos los días Miércoles, para más información comunicarse al Instagram!"},
    {id:21, nombre :"La Noche de Caridad", descripcion:"Entrega de alimentos y acompañamiento a personas en situación de calle,para más información comunicarse al Instagram! "},
      { id: 22, nombre: "La Bajada San José", descripcion: "Apoyo escolar y juegos a niños en un barrio de nuestra ciudad,para más información comunicarse al Instagram! " },
    {id:23, nombre :"Catequesis", descripcion:"Dictado de catequesis de comunión y confirmación para niños,para más información comunicarse al Instagram! "}]

  return (
    <section className="apostolados-container">
      <h2>Nuestros apostolados:</h2>
      <div className="apostolados-cont">
        {apostolados.map(apostolado =>
          <CardApostolados
            key={apostolado.id}
            id={apostolado.id}
            nombre={apostolado.nombre}
            descripcion={apostolado.descripcion}
          />)}
      </div>
    </section>
  )
}

export default Apostolados;