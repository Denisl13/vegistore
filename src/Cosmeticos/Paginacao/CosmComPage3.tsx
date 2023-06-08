import { Link } from "react-router-dom";

function CosmComPage3() {
  return (
    <div>
      <h1>Estamos na CosmComPage 3!!!!</h1>
      <div className="pagination">
        <Link to="/cosmeticos">&laquo; Voltar</Link>
        <Link to="/cosmeticos/pagination=1?">1</Link>
        <Link to="/cosmeticos/pagination=2?">2</Link>
        <Link to="/cosmeticos/pagination=3?" className="active">
          3
        </Link>
        <Link to="/cosmeticos">&raquo;</Link>
      </div>
    </div>
  );
}

export default CosmComPage3;
