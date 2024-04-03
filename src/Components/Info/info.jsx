import Eucaristia from "../../assets/Eucaristia.png"
import "./info.css"

const InfoMisa = () => {
  return (
    <div className="Info-Misa">
      <div  className="eucaristia-image">
        <img src={Eucaristia} alt="Eucaristía" />
      </div>
      <div className="info-div">
        <h2 className="title">Santa Misa</h2>
        <h3 className="info">
          Sábados  19hs
          en la Catedral de Córdoba
        </h3>
        <a href="https://maps.app.goo.gl/oAW4eW4TTgZ5wvnd8" target="_blank" className="fa fa-map-marker"></a>
      </div>
    </div>
  )
}

const InfoInscrip = () => {
  return (
    <div className="Info-Insc">
      <h2 className="title">¡Inscripciones!</h2>
      <p className="paragraph">Las inscripciones al grupo Juvenil se realizan únicamente en <strong>Marzo</strong> de cada año, por Instagram enviamos la información!</p>
    </div>
  )
}

const cuentaSantopedia = () => {
  return (
    <div className="Info-Cuentas">
      <div className="image-cont"></div>
      <div className="texto-cont">
        <h2 className="title">Santopedia</h2>
        <p className="paragraph">¡Te contamos un poco del santo de cada día!</p>
        <a href="https://www.instagram.com/santopedia/" target="_blank" className="fa fa-instagram"></a>
      </div>
    </div>
  )
}

const cuentaVicaria= () => {
  return (
    <div className="Info-Cuentas">
      <div className="image-cont"></div>
      <div className="texto-cont">
        <h2 className="title">Vicaría de los Jóvenes</h2>
        <p className="paragraph">Surge la Vicaría con la intención de acompañar a los jóvenes!</p>
        <a href="https://www.instagram.com/vicariadejovenescba/" target="_blank" className="fa fa-instagram"></a>
      </div>
    </div>
  )
}


const Novedades = () => {
  return (
    <div className="Novedades">
      <div>
        <div>
          <h2 className="title">Novedades <i className="fa fa-calendar"></i></h2>
        </div>
        <div className="novedades-cont">
          <h3 className="novedades-title">- Abril -</h3>
          
          <ul>
            <li>Pascua Misionera 29 y 30/3 </li>
            <li>Convivenvia de la Cate 6/4</li>
          </ul>
          <h5>más información en nuestro Instagram!</h5>
        </div>
      </div>
    </div>
  )
}

const Info = () => {
  return (
    <div className="Info">
      <InfoMisa />
      <InfoInscrip />
      <Novedades />
    </div>
  )
}

export default Info;