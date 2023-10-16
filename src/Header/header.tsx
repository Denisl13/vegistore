import "./header.css";
import { Link } from "react-router-dom";
import Sidenav from "../Sidenav/Sidenav";
import { useState, useEffect } from "react";

type HeaderProps = {
  black: boolean; //Boolean (v) ou (f)
  showSidenav?: boolean; // Parâmetro opcional para mostrar o Sidenav
};

function Header({ black, showSidenav = true }: HeaderProps) {
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Atualiza o título da aba do navegador
  const handleHomeClick = () => {
    document.title = "Vegistore | Home";
  };

  return (
    <header
      className={`header ${black ? "black" : ""} ${
        isNavVisible ? "visible" : ""}`}>
      <div className="header-logo">
        <h2>
          <Link to="/" onClick={handleHomeClick}>
            <span className="vegi-store-text">
              <span className="s">s</span>
              <span className="t">t</span>
              <span className="o">o</span>
              <span className="r">r</span>
              <span className="e-2">e</span>
            </span>
          </Link>
        </h2>
      </div>
      {showSidenav && <Sidenav />}
    </header>
  );
}
export default Header;

function NavHeader() {
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <Header black={blackHeader} />;
}

export { NavHeader };