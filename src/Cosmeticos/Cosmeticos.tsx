import "./Cosmeticos.css";
import "./Paginacao/CosmPage.css"; //Paginação 1,2,3
import Sep from "../Separador/Sep";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { NavHeader } from "../Header/header";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import Bcosmeticos from "./BannerCosmeticos/Bcosm";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardCosmeticosProps {
  img: string;
  title: string;
  description: string;
  stars?: number;
  hearts?: number;
  link?: string;
  sales?: string;         //número de vendas
  label?: string;        //propriedade desconto
  className?: string;   //Card especial p Destaque
  isSpecial?: boolean; //identificar o cartão especial
  style?: React.CSSProperties;
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
  const filledHearts = props.hearts ? Math.floor(props.hearts) : 0;
   const hearts = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FontAwesomeIcon
        icon={faHeart}
        color={i < filledHearts ? "#f00" : "#ddd"}
        size="1x"
        className="heart-animation"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    </span>
  ));
  /*Substring > contagem de palavras até 200 */
  let description = props.description;
    if (description.length > 150) {
      description = description.substring(0, 150) + "...";
}
  return (
    <div
      className={`card--master--Cosmeticos ${props.isSpecial ? "special-card" : ""}`}
    >
      <div className="card__corpo__Cosmeticos">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img
            src={props.img}
            className="card-imagem--Cosmeticos"
            alt={props.title}
          />
        </a>
        <h2 className={`card__titulo__Cosmeticos ${props.isSpecial ? "special-card" : ""}`}>
          {props.title}
        </h2>
        <p className={`card__descricao__Cosmeticos ${props.isSpecial ? "special-card" : ""}`}>
          {description}
        </p>
      </div>

      <div className="card__stars__Cosmeticos">
        <div className={`card__label__Cosmeticos ${props.label ? "has-label" : ""}`}>
          <div className="label__content__Cosmeticos">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__Cosmeticos">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className={`card__botao__Cosmeticos ${props.isSpecial ? "special-card" : ""}`}>
              Adicionar ao carrinho
          </button>
        </a>
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
      <Sep title="Beleza" />
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/51xYDrHoHbL._AC_SX466_.jpg"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics. Essa máscara de nutrição é ideal para cabelos ressecados e danificados, proporcionando suavidade, força e desembaraço. Perfeita para uso diário e após processos de coloração, a máscara vem em embalagens de 450g e possui um aroma delicioso. Encontre essa excelente opção de cuidados com os cabelos no site da Amazon. Aproveite essa oportunidade agora!"
              hearts={3}
              sales="+7431"
              label="-50%"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/711OtVgfhYL._AC_SY450_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={2}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/81Ve6gN5waL._AC_SX522_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/317wakUuJGL._MCnd_AC_.jpg"
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
              img="https://m.media-amazon.com/images/I/51lUym-OXcL._MCnd_AC_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/41YZ+c64ZJL._AC_SY460_.jpg"
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
