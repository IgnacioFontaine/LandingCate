import "./structure.css"

const Structure = () => {

  return (
    <section className="structure-container">
      <h2>La Cate está compuesta por 3 sub grupos:</h2>
      <div className="structure-container-group">
        <div className="structure-group">
        <h2>Iniciate</h2>
        <h4>Grupos de 1er a 3er año</h4>
        <h6>ver más. . . </h6>
      </div>
      <div className="structure-group">
        <h2>Cate</h2>
        <h4>Grupos de 4to a 1er año de la Facultad</h4>
        <h6>ver más. . . </h6>
      </div>
      <div className="structure-group">
        <h2>Apostolate</h2>
        <h4>Grupo Universitario</h4>
        <h6>ver más. . . </h6>
      </div>
      </div>
    </section>
  )
}

export default Structure;