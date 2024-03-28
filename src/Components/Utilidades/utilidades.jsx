import "./utilidades.css"
import apostoladoImage from "../../assets/LogoNegro.png"

function CardUtilidades({id, nombre, url_link}) {
  const referencia = url_link;
  return (
    <div className="Utilidad" key={id}>
      <div  className="utilidad-image">
        <img src={apostoladoImage} alt="La Cate" />
      </div>
      <div className="utilidad-texto">
        <h2 className="utilidad-name">{nombre}</h2>
        <div className="utilidad-link">
          <a href={`${referencia}`} target="_blank" className="fa fa-link"></a>
        </div>
      </div>
    </div>
  )
}


const Utilidades = () => {

  //La Vitácora está virtual?? Hacerla y publicarla!!

  const utilidades =
    [
      { id: 30, nombre: "Cancionero con acordes", url_link: "https://d1fdloi71mui9q.cloudfront.net/78LtaHmTjVPqansfbMOw_CANCIONERO%20CON%20ACORDES%20CATE%202019%20final%20A4.pdf%20(1).pdf" },
      { id: 31, nombre: "Inscripciones Cate 2024! ", url_link: "https://docs.google.com/forms/d/e/1FAIpQLScIhSdAk7hGyfC2E5h_UBmP26Lrdt-B1WSLPqgLYfiXTyPHBg/closedform" },
      { id: 32, nombre: "Pascua Misionera 2024", url_link: "https://docs.google.com/forms/d/e/1FAIpQLSdbQxARvKEHX59sK4TIWBC7bAJnDpedDbaVv1T8v3iD2i4ijQ/closedform" },
      { id: 32, nombre: " FORMATE - Spotify ", url_link: "https://open.spotify.com/show/1zgZ283Q6lP6MSSssA4PMt?si=38a4e3292a864b71" },
      { id: 33, nombre: "MUSICATE - YouTube", url_link: "https://youtube.com/playlist?list=PL0qcyWA4gm3_n4vQHDQRhnc0HTfdT3SpJ&si=roq5PwnTUtf3mZNL" },
    ]

  return (
    <section className="utilidades-container">
      <h2>Enlaces que te invitamos a chusmear. . . 👀</h2>
      <div className="utilidades-container-group">
        {utilidades.map(util =>
          <CardUtilidades
            key={util.id}
            id={util.id}
            nombre={util.nombre}
            url_link={util.url_link}
          />
        )}
      </div>
    </section>
  )
}

export default Utilidades;