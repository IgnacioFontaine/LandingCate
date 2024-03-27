import "./footer.css"

function Footer() {
  
  return (
    < div className="footer-laCate">
      <section >
        <div >
          <h2 id="contacto" className="footer-title"><strong >La Cate | Grupo Juvenil</strong></h2>
        </div>
        <div className="footer-link-contenedor">
          <a href="https://www.instagram.com/grupocate/" target="_blank" className="fa fa-instagram"></a>
          <a href="https://www.youtube.com/@GrupoCateCba" target="_blank" className="fa fa-youtube" ></a>
          <a href="https://open.spotify.com/show/1zgZ283Q6lP6MSSssA4PMt?si=de3342afaee144a9" target="_blank" className="fa fa-spotify" ></a>
          <a href="https://www.tiktok.com/@grupocatee?lang=es" target="_blank" className="fa fa-tiktok">
            <svg className="fa fa-tiktok" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/></svg>
          </a>
          <a href="https://www.facebook.com/grupocate/?locale=es_LA" target="_blank" className="fa fa-facebook"></a>
          <h5>Todos los derechos reservados La Cate &#169; --  2024</h5>
        </div>
      </section>
    </ div>
  )
}

export default Footer;