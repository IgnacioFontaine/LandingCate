import "./utilidades.css"
import { Link } from "react-router-dom";
import apostoladoImage from "../../assets/LogoNegro.png"

function CardUtilidades({id, nombre, descripcion, url_link}) {
  const referencia = url_link;
  return (
    <div className="Apostolado" key={id}>
      <div  className="apostolado-image">
        <img src={apostoladoImage} alt="La Cate" />
      </div>
      <div className="apostolado-texto">
        <h2 className="name-apostolado">{nombre}</h2>
        <h4 className="description-apostolado">{descripcion}</h4>
        <div className="icon-instagram">
          <a href="" target="_blank" className="fa fa-instagram"></a>
        </div>
      </div>
    </div>
  )
}


const Utilidades = () => {

  const utilidades =
    [
      { id: 30, nombre: "Cancionero con acordes", url_link: "" },
      { id: 31, nombre: "Inscripciones", url_link: "" },
      { id: 32, nombre: "Pascua Misionera", url_link: "" },
      { id: 32, nombre: "Spotify", url_link: "" },
      { id: 33, nombre: "YouTube", url_link: "" },
    ]

  return (
    <section className="utilidades-container">
      <h2>La Cate está compuesta por 3 sub grupos:</h2>
      <div className="utilidades-container-group">
        <div className="utilidades-group">
        <h2>Cancionero con acordes</h2>
        <Link to="/iniciate"><h5>ver más. . . </h5></Link>
      </div>
      <div className="utilidades-group">
        <h2>CATE</h2>
          <h4>Grupos de 4to a 1er año de la Facultad</h4>
          <Link to="/cate"><h5>ver más. . . </h5></Link>
      </div>
      <div className="utilidades-group">
        <h2>APOSTOLATE</h2>
        <h4>Grupo Universitario</h4>
        <Link to="/apostolate"><h5>ver más. . . </h5></Link>
      </div>
      </div>
    </section>
  )
}

export default Utilidades;