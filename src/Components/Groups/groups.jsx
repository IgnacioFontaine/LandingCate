import "./groups.css"

function CardGroup({id, nombre, significado}) {
  
  return (
    <div className="Group" key={id}>
      <h2 className="name-group">{nombre}</h2>
      <h3 className="significado-group">{significado}</h3>
    </div>
  )
}

function Groups({grupos}) {
  
  return (
    <div >
      <section id="locations-contenedor" className="cont-groups" >
        {grupos.map(group =>
          <CardGroup
            key={group.id}
            nombre={group.nombre}
            significado={group.significado}
            className="location-card" />)}
      </section>
    </div>
  )
}

export default Groups;