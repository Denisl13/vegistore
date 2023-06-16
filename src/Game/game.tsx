import "./game.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { NavHeader } from "../Header/header";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import Footer from "../Footer/footer";
import Bgame from "./Bgame/Bgame";
import Sep from "../Separador/Sep";

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
}

function CardGame(props: CardGameProps) {
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
      className={`card--master--Game ${props.isSpecial ? "special-card" : ""}`}
    >
      <div className="card__corpo__Game">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img
            src={props.img}
            className="card-imagem--Game"
            alt={props.title}
          />
        </a>
        <h2 className={`card__titulo__Game ${props.isSpecial ? "special-card" : ""}`}>
          {props.title}
        </h2>
        <p className={`card__descricao__Game ${props.isSpecial ? "special-card" : ""}`}>
          {description}
        </p>
      </div>

      <div className="card__stars__Game">
        <div className={`card__label__Game ${props.label ? "has-label" : ""}`}>
          <div className="label__content__Game">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__Game">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
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
      <Bgame />
      <Sep title="Game" />
      <div className="grid-container-Game">
        <div className="grid--item--Game item-1">
          <div className="wrapper__Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/61es84xZGzL._AC_SX296_SY426_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              hearts={3}
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/91t1G1UvSzL._AC_SX296_SY426_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              hearts={4}
              sales="+1900 Vendidos"
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/51VZErxKwkL._AC_SX679_.jpg"
              title="PlayStation®5 + God of War Ragnarök"
              description="PlayStation5 SSD ultrarrápido: Maximize suas sessões de jogo com tempo de carregamento praticamente instantâneo para jogos do PS5 instalados."
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
              title="PlayStation®5 + God of War Ragnarök"
              description="PlayStation5 SSD ultrarrápido: Maximize suas sessões de jogo com tempo de carregamento praticamente instantâneo para jogos do PS5 instalados. Instantâneo para jogos do PS5 instalados."
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
              img="https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
