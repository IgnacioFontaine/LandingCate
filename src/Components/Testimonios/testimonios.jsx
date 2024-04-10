const CardTestimonio = ({id, nombre, experiencia}) => {
  return (
    <div className="testimonio-card">
      <header className="testimonio-nombre">
        <h2>Nombre</h2>
      </header>
      <body>
        <p className="testimonio-experiencia">
          Mi Experiencia en la Cate fue:
        </p>
      </body>
    </div>
  )
}

function Testimonios({testimonios}) {
  
  return (
    <div >
      <section id="locations-contenedor" className="cont-groups" >
        {testimonios.map(testi =>
          <CardTestimonio
            key={testi.id}
            nombre={testi.nombre}
            experiencia={testi.experiencia}
             />)}
      </section>
    </div>
  )
}

export default Testimonios;