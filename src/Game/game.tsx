import "./game.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { NavHeader } from "../Header/header";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import Footer from "../Footer/footer";
import Bgame from "./Bgame/Bgame";
import Sep from "../Separador/Sep";
import { useState } from "react";

interface CardGameProps {
  img: string;
  title: string;
  description: string;
  stars?: number;
  hearts?: number;
  link?: string;
  sales?: string;
  label?: string;
  className?: string;
  isSpecial?: boolean;
  style?: React.CSSProperties;
  isFeatured?: boolean;
}

function CardGame(props: CardGameProps) {
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };

  const filledStars = props.stars ? Math.floor(props.stars) : 0;
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FontAwesomeIcon
        icon={faStar}
        color={i < filledStars ? "#f99304" : "#ddd"}
        className="star-icon" // Adicione a classe CSS para estrelas
      />
    </span>
  ));

  const filledHearts = props.hearts ? Math.floor(props.hearts) : 0;
  const hearts = Array.from({ length: 5 }, (_, i) => (
    <span key={i}>
      <FontAwesomeIcon
        icon={faHeart}
        color={i < filledHearts ? "#f00" : "#ddd"}
        className="heart-animation"
        style={{ animationDelay: `${i * 0.1}s` }}
      />
    </span>
  ));

  let description = props.description;
  if (description.length > 85) {
    description = description.substring(0, 85) + "...";
  }

return (
  <div className={`card--master--Game ${props.isSpecial ? "special-card" : ""}`}>
    <div
      className={`card__corpo__Game ${showName ? "show-name" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.isFeatured && (
        <div className="featured-label">
          Mais Vendido
          <div className={`label-name ${showName ? 'show-name' : ''}`}>em Box Ps4</div>
        </div>
      )}
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img
          src={props.img}
          className={`card-imagem--Game ${props.isFeatured ? "featured-card" : ""}`}
          alt={props.title}
        />
      </a>
      <h2 className={`card__titulo__Game ${props.isSpecial ? "special-card" : ""}`}>
        {props.title}
      </h2>
      <div className="card__stars__Game">
        <div className={`card__label__Game ${props.label ? "has-label" : ""}`}>
          <div className="label__content__Game">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__Game">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <p className={`card__descricao__Game ${props.isSpecial ? "special-card" : ""}`}>
        {(description)}
      </p>
    </div>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button className={`card__botao__Game ${props.isSpecial ? "special-card" : ""}`}>
        Adicionar ao carrinho
      </button>
    </a>
  </div>
  );
}

function Game() {
  return (
    <div className="grid--container--Game">
      <NavHeader />
      <Bgame/>
      <Sep title="Games e Consoles" />
      <div className="grid-container-Game">
        <div className="grid--item--Game item-1">
          <div className="wrapper__Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/61es84xZGzL._AC_SX296_SY426_FMwebp_QL65_.jpg"
              title="Sos Lábios Esfoliante labial 3, 5gr TOP Beauty, Top Beauty"
              description="Mais de 200 compras na semana passada"
              stars={3}
              isFeatured={true}
            />
          </div>
        </div>  
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/91t1G1UvSzL._AC_SX296_SY426_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Leve mais, pague menos com o Super Receba até segunda-feira, 19 de jun.
                          Frete GRÁTIS"
              hearts={4}
              sales="Mais de 200 compras na semana passada"
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/51VZErxKwkL._AC_SX679_.jpg"
              title="Console PlayStation®5"
              description="PlayStation5 SSD ultrarrápido: Maximize suas sessões de 200 jogo "
              hearts={5}
              sales="+1950 avaliações de clientes"
              label="-50%"
              link="https://amzn.to/3X6yaEn"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/41lV8jRUrIL._SS400_.jpg"
              title="Console Xbox Series S"
              description="PlayStation5 SSD ultrarrápido: Maximize suas sessões."
              stars={5}
              sales="+1950 avaliações de clientes"
              label="-50%"
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Game">
        <div className="grid--item--Game item1">
          <div className="wrapper__Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/711eymrSAML._AC_SX296_SY426_QL65_.jpg"
              title="Horizon Forbidden West Edição Padrão - Playstation 4"
              description="Explore terras distantes, enfrente máquinas maiores e mais imponentes, e encontre novas tribos incríveis ao retornar para o futuro distante e pós-apocalíptico de Horizon."
              stars={5}
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/81XveK+ycyL._AC_SX296_SY426_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/61hB8jmc4tL._AC_UF1000,1000_QL80_FMwebp_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={1}
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={4}
            />
          </div>
        </div>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default Game;
