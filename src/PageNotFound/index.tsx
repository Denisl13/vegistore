import { Link } from "react-router-dom";
import "./PageNotFound.css";
import error404Image from "./img/buaaaa.png";

function PageNotFound() {
  return (
    <>
      <div className="go_back">
        <Link to="/">Voltar</Link>
      </div>
      <div className="not_found">
        <h1>Erro 404</h1>
        <p>Page not found</p>
        <img src={error404Image} alt="página não encontrada" />
      </div>
    </>
  );
}

export default PageNotFound;
