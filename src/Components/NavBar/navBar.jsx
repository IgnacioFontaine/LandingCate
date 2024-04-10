// import "./navBar.css"
// import { Link } from "react-router-dom";

// const NavBar = () => {

//   return (
//     <section className="navbar-container">
//       <Link to="/" className="navbar-link">Inicio</Link>
//       <Link to="/iniciate" className="navbar-link">Iniciate</Link>
//       <Link to="/cate" className="navbar-link">Cate</Link>
//       <Link to="/apostolate" className="navbar-link">Apostolate</Link>
//       {/* <Link to="/ropa" className="navbar-link">Ropa</Link> */}
//       <Link to="/util" className="navbar-link">Útiles</Link>
//     </section>
//   )
// }

// export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/iniciate" className="navbar-link">Iniciate</Link>
        <Link to="/cate" className="navbar-link">Cate</Link>
        <Link to="/apostolate" className="navbar-link">Apostolate</Link>
        {/* <Link to="/ropa" className="navbar-link">Ropa</Link> */}
        <Link to="/util" className="navbar-link">Útiles</Link>
      </div>
      <button className="menu-button" onClick={toggleMenu}>
        <div className="menu-icon">&#9776;</div>
      </button>
      {showMenu && (
        <div className="mobile-menu">
          <Link to="/" className="navbar-link">Inicio</Link>
          <Link to="/iniciate" className="navbar-link">Iniciate</Link>
          <Link to="/cate" className="navbar-link">Cate</Link>
          <Link to="/apostolate" className="navbar-link">Apostolate</Link>
          {/* <Link to="/ropa" className="navbar-link">Ropa</Link> */}
          <Link to="/util" className="navbar-link">Útiles</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
