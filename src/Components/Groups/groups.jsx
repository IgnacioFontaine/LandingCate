import "./groups.css"

function CardGroup({id, nombre}) {
  
  return (
    <div className="Group" key={id}>
      <h2 className="name-group">{nombre}</h2>
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
            className="location-card" />)}
      </section>
    </div>
  )
}

export default Groups;