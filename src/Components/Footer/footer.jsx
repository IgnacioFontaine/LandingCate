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
          {/* <a href="https://www.tiktok.com/@grupocatee?lang=es" target="_blank" className="fa fa-tiktok"></a> */}
          <a href="https://www.facebook.com/grupocate/?locale=es_LA" target="_blank" className="fa fa-facebook"></a>
          <h5>Todos los derechos reservados La Cate &#169; --  2024</h5>
        </div>
      </section>
    </ div>
  )
}

export default Footer;