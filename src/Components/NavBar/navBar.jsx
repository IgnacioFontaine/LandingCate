import "./navBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <section className="navbar-container">
      <Link to="/">Inicio</Link>
      <Link to="/iniciate">Iniciate</Link>
      <Link to="/cate">Cate</Link>
      <Link to="/apostolate">Apostolate</Link>
      <Link to="/ropa">Ropa</Link>
      <Link to="/util">útiles</Link>
    </section>
  )
}

export default NavBar;