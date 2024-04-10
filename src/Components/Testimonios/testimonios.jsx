import "./testimonios.css"
const CardTestimonio = ({ id, nombre, años, experiencia }) => {
  return (
    <div className="testimonio-card" key={id}>
      <header className="testimonio-nombre" >
        <div>
          <h2 >{nombre}</h2>
        </div>
        <div className="testimonio-años">
          <h3>
            {años}
          </h3>
        </div>
      </header>
      <body>
        <p className="testimonio-experiencia">
          {experiencia}
        </p>
      </body>
    </div>
  )
}

function Testimonios({testimonios}) {
  
  return (
    <div className="contenedor-testi" >
      <h2 className="title-testimonios">Testimonios de personas que pasaron por la Cate</h2>
      <section id="testi-contenedor" className="cont-testimonios" >
        {testimonios.map(testi =>
          <CardTestimonio
            key={testi.id}
            nombre={testi.nombre}
            años={testi.años}
            experiencia={testi.experiencia}
             />)}
      </section>
    </div>
  )
}

export default Testimonios;