import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleButtonClick = (text: string) => {
    document.title = `Vegistore | ${text}`;
  };

  return (
    <>
      <span
        className="sidenav-span"
        style={{
          fontSize: "24px",
          cursor: "pointer",
          color: "#f44336",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold",
          marginRight: "8px"
        }}
        onClick={openNav}
      >
        &#9776; open
      </span>
      <div id="mySidenav" className={`sidenav ${isOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={closeNav}>
          &times;
        </button>
        <div className="menu__sidebar">
          <Link to="/" onClick={() => handleButtonClick("Home")}>
            Home
          </Link>

          <Link to="/cosmeticos" onClick={() => handleButtonClick("Cosméticos")}>
            Beleza e Cuidados Pessoais
          </Link>
          <Link to="/modafeminina" onClick={() => handleButtonClick("Moda Feminina")}>
            Roupas Femininas
          </Link>
          <Link to="/casaedecoracao" onClick={() => handleButtonClick("Casa & Decoração")}>
            Casa & Decoração
          </Link>
          <Link to="/games" onClick={() => handleButtonClick("Games")}>
            Games & Consoles
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
