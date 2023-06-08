import "./Page2.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Sep from "../../../Separador/Sep";
import Footer from "../../../Footer/footer";
import { NavHeader } from "../../../Header/header";
import Bcosmeticos from "../../BannerCosmeticos/Bcosm";
import BvoltaTop from "../../../VoltaInicio/BvoltaTopo";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cosmeticoimages } from "../../BannerCosmeticos/SliderCosmeticos";

// Interface para as propriedades do CardCosmPag1
interface CardCosmPag2Props {
  img: string;
  link?: string;
  title: string;
  description: string;
  stars?: number;
  sales?: string; //número de vendas
  label?: string; //propriedade desconto
  className?: string; //Card especial p Destaque
  isSpecial?: boolean; //identificar o cartão especial
}

// Estrelas
function CardCosmPag2(props: CardCosmPag2Props) {
  const filledStars = props.stars ? Math.floor(props.stars) : 0;
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FontAwesomeIcon
        icon={faStar}
        color={i < filledStars ? "#f99304" : "#ddd"}
        size="1x"
      />
    </span>
  ));

  return (
    <div
      className={`card--master--ccPage2 ${
        props.isSpecial ? "special-card" : "" }`}
    >
      <div className="card__corpo__ccPage2">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img
            src={props.img}
            className="card-imagem--ccPage2"
            alt={props.title}
          />
        </a>

        <h2
          className={`card__titulo__ccPage2 ${
            props.isSpecial ? "special-card" : ""}`}
        >
          {props.title}
        </h2>
        <p
          className={`card__descricao__ccPage2 ${
            props.isSpecial ? "special-card" : ""}`}
        >
          {props.description}
        </p>
      </div>

      <div className="card__stars__ccPage2">
        <div
          className={`card__label__ccPage2 ${props.label ? "has-label" : ""}`}
        >
          <div className="label__content__ccPage2">{props.label}</div>
        </div>
        <span>{props.stars && stars}</span>
        {props.sales && <p>{props.sales} vendidos</p>}
      </div>
      <button className="card__botao__ccPage2">View Recipe</button>
    </div>
  );
}
// ScrollTop pagination
function CosmComPage2() {
  useEffect(() => {
    const handlePaginationClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const paginationLinks = document.querySelectorAll(".pagination a");
    paginationLinks.forEach((link) => {
      link.addEventListener("click", handlePaginationClick);
    });

    return () => {
      paginationLinks.forEach((link) => {
        link.removeEventListener("click", handlePaginationClick);
      });
    };
  }, []);
  //Carrega imagens do Banner por indice
  const imageIndex = 3;
  const imageUrl = Cosmeticoimages[imageIndex].image;

  return (
    <div>
      <div id="topo"></div>
      <NavHeader />
      <Bcosmeticos img={imageUrl} />
      <Sep title="Ácido Hialurônico" />
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://m.media-amazon.com/images/I/51xYDrHoHbL._AC_SX466_.jpg"
              title="Vichy"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+5199"
              label="-50%"
              isSpecial={true} // Cartão Especial
              link="https://amzn.to/3N2jO4q"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+/- 6524"
              label="-70%"
              link="+ Detalhes sobre o produto"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+30589"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="5248"
            />
          </div>
        </div>
      </div>
      {/*Final Bloco */}
      <Sep title="Estojo de Maquiagem" />
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+5199"
              label="-50%"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+/- 6524"
              label="-70%"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+30589"
              isSpecial={true} // Adicione a propriedade isSpecial como true para o cartão desejado
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="5248"
            />
          </div>
        </div>
      </div>
      {/*Final Bloco */}

      <div className="pagination">
        <Link to="/cosmeticos">&laquo;</Link>
        <Link to="/cosmeticos/pagination=1?">1</Link>
        <Link to="/cosmeticos/pagination=2?" className="active">
          2
        </Link>
        {/*<Link to="/cosmeticos/pagination=3?">3</Link>*/}
        <Link to="/cosmeticos">&raquo;</Link>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default CosmComPage2;
