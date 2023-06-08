import "./Cosmeticos.css";
import "./Paginacao/CosmPage.css"; //Paginação 1,2,3
import Sep from "../Separador/Sep";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { NavHeader } from "../Header/header";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import Bcosmeticos from "./BannerCosmeticos/Bcosm";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardCosmeticosProps {
  img: string;
  title: string;
  description: string;
  stars?: number;
  link?: string;
  sales?: string;         //número de vendas
  label?: string;        //propriedade desconto
  className?: string;   //Card especial p Destaque
  isSpecial?: boolean; //identificar o cartão especial
}
//Estrelas
function CardCosmeticos(props: CardCosmeticosProps) {
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
      className={`card--master--Cosmeticos ${
        props.isSpecial ? "special-card" : "" }`}
    >
      <div className="card__corpo">
        <img
          src={props.img}
          className="card-imagem--Cosmeticos"
          alt={props.title}
        />
        <h2 className="card__titulo__Cosmeticos">{props.title}</h2>
        <p className="card__descricao__Cosmeticos">{props.description}</p>
      </div>
      <div className="card__stars__Cosmeticos">
        <div
          className={`card__label__Cosmeticos ${
            props.label ? "has-label" : ""}`}
        >
          <div className="label__content__Cosmeticos">{props.label}</div>
        </div>
        <span>{props.stars && stars}</span>
        {props.sales && <p>{props.sales} vendidos</p>}
      </div>
      <button className="card__botao__Cosmeticos">Saiba Mais...</button>
    </div>
  );
}

function Cosmeticos() {
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
  //Banner
  const imageUrl =
    "https://images.pexels.com/photos/7290740/pexels-photo-7290740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="grid--container--Cosmeticos">
      <div id="topo"></div>
      <Bcosmeticos img={imageUrl} />
      <Sep title="Cosméticos" />
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmeticos
              img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
              sales="+7431"
              label="-50%"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://images.unsplash.com/photo-1643185450492-6ba77dea00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Cosmeticos">
        <NavHeader />
        <div className="grid--item--Cosmeticos item1">
          <div className="wrapper__Cosmeticos">
            <CardCosmeticos
              img="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://images.unsplash.com/photo-1571256750339-12bbebc768f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://plus.unsplash.com/premium_photo-1664375246524-ae4abe93908f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={1}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={4}
            />
          </div>
        </div>
      </div>
      <div className="pagination">
        <Link to="/">&laquo;</Link>
        <Link to="/cosmeticos/pagination=1?">1</Link>
        <Link to="/cosmeticos/pagination=2?">2</Link>
        {/*<Link to="/cosmeticos/pagination=3?">3</Link>*/}
        <Link to="/cosmeticos">&raquo;</Link>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default Cosmeticos;
