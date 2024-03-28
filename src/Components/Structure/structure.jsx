import "./structure.css"
import { Link } from "react-router-dom";

const Structure = () => {

  return (
    <section className="structure-container">
      <h2>La Cate está compuesta por 3 sub grupos:</h2>
      <div className="structure-container-group">
        <div className="structure-group">
        <h2>INICIATE</h2>
        <h4>Grupos de 1er a 3er año</h4>
        <Link to="/iniciate"><h5>ver más. . . </h5></Link>
      </div>
      <div className="structure-group">
        <h2>CATE</h2>
          <h4>Grupos de 4to a 1er año de la Facultad</h4>
          <Link to="/cate"><h5>ver más. . . </h5></Link>
      </div>
      <div className="structure-group">
        <h2>APOSTOLATE</h2>
        <h4>Grupo Universitario</h4>
        <Link to="/apostolate"><h5>ver más. . . </h5></Link>
      </div>
      </div>
      <h2 className="structure-text">Que junto con COMANDO, las familias, vocales y consejo, matrimonio asesor, cura asesor muuuchas otras personas formamos esta gran familia ❤️</h2>
    </section>
  )
}

export default Structure;