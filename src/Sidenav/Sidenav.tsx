import "./Sidenav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => {
    setIsOpen(true);
    const mySidenav = document.getElementById("mySidenav");
    if (mySidenav) {
      mySidenav.classList.add("open");
    }
  };

  const closeNav = () => {
    setIsOpen(false);
    const mySidenav = document.getElementById("mySidenav");
    if (mySidenav) {
      mySidenav.classList.remove("open");
    }
  };
/*================================================================= */
 const handleButtonClick = (text: string) => {
    document.title = `Vegistore | ${text}`;//Aba título
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
          marginRight: "8px",
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

          <Link
            to="/cosmeticos"
            onClick={() => handleButtonClick("Cosméticos")}
          >
            Cosméticos
          </Link>
          <Link
            to="/casaedecoracao"
            onClick={() => handleButtonClick("Casa & Decoração")}
          >
            Casa&Decoração
          </Link>
          <Link
            to="/modafeminina"
            onClick={() => handleButtonClick("Moda Feminina")}
          >
            Moda Feminina
          </Link>
          <Link to="/games" onClick={() => handleButtonClick("Games")}>
            Games
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidenav;
