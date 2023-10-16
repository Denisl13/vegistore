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
  link?: string;
  title: string;
  description: string;
  stars?: number; //strelas
  hearts?: number; //coração    
  sales?: string;        //número de vendas
  label?: string;       //propriedade desconto
  className?: string;  //Card especial p Destaque
  isSpecial?: boolean;//identificar o cartão especial
  style?: React.CSSProperties;
  isFeatured?: boolean; //verdadeiro ou false
  highlightText?: string; //mais vendido
  customTitle?: string; //vichky
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

  /*Substring > contagem de palavras até 200 */
let description = props.description;
  if (description.length > 85) {
    description = description.substring(0, 85) + "...";
  }
   let title = props.title;
  if (title.length > 65) {
    title = title.substring(0, 65) + "...";
  }

return (
  <div className={`card--master--Game ${props.isSpecial ? "special-card" : ""}`}>
    <div
      className={`card__corpo__Game ${showName ? "show-name" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.isFeatured && ( /*É verdade ? sim então mostre (booleano (v)(f)*/
        <div className="featured-label">
          {props.highlightText} {/*mais vendido */}
          <div className={`label-name ${showName ? 'show-name' : ''}`}>
            {props.customTitle} {/*vichky */}
          </div>
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
        {(title)}
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
              img="https://m.media-amazon.com/images/I/51rsXDAfI-L._AC_SX679_.jpg"
              title="Console Microsoft Xbox Series X Premium Edition"
              description="O Xbox mais poderoso do mundo em uma versão especial premium limitada. Inicie sua maior aventura com o Xbox Series X e Forza Horizon 5 Edição Premium."
              stars={5}
              sales="+17 avaliações de Clientes"
              label="-9%"
              link="https://amzn.to/46E3A9q"
            />
          </div>
        </div>  
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/51m+U58kA7L._AC_SX679_.jpg"
              title="GameSir G7 SE Wired Controller for PC, Xbox One, Xbox Series X|S, Plug and Play Gaming Gamepad with Hall Joysticks/Hall Trigger, 3.5mm Audio Jack"
              description="Versatile Compatibility: Supports Xbox Series X/S, Xbox One X/S consoles, and PC Win10 and above (including the Steam game platform)."
              hearts={5}
              sales="+8.800 avaliações de Clientes"
              label="1° mais vendido"
              link="https://amzn.to/3JHIgpO"
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/51+qnZm7V7L._AC_SX679_.jpg"
              title="Console PlayStation®5"
              description="Play Has No Limits Jogar Não Tem Limites PlayStation5 O console PS5 oferece novas possibilidades de jogabilidade que você nunca imaginou. Reproduza jogos para PS5 e PS4 em Blu-ray Disc."
              hearts={5}
              sales="+648 avaliações de clientes"
              label="Menor preço dos últimos 30 dias"
              link="https://amzn.to/3ObDp33"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/814aKQAodKL._AC_SY445_.jpg"
              title="Minecraft Dungeons - Hero Edition (Inclui Hero Pass)"
              description="Minecraft Dungeons - Hero Edition (Inclui Hero Pass)"
              stars={5}
              sales="+1.456 avaliações de clientes"
              label="-40%"
              link="https://amzn.to/3pJmtqS"
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Game">
        <div className="grid--item--Game item1">
          <div className="wrapper__Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/71GTPlP6QcL._AC_SX679_.jpg"
              title="Gotham Knights BR - Standard Edition - Xbox Series X"
              description="Explore terras distantes, enfrente máquinas maiores e mais imponentes, e encontre novas tribos incríveis ao retornar para o futuro distante e pós-apocalíptico de Horizon."
              stars={5}
              sales="+748 avaliações de clientes"
              label="-56%"
              link="https://amzn.to/46zbu41"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/61zAbNEgqrL._AC_SX679_.jpg"
              title="Elden Ring - Xbox Series X"
              description="Exploração do mundo nas Terras Intermédias: ELDEN RING apresenta vastos cenários fantásticos e complexas e escuras masmorras que se conectam de maneira fluida"
              stars={5}
              sales="+1542 avaliações de clientes"
              link="https://amzn.to/44tYL0H"
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/41dxVVHRNWL._AC_SX679_.jpg"
              title="Controle DualSense - Branco"
              description="Descubra uma profunda e imersiva experiência de jogo com o inovador DualSense"
              stars={5}
              sales="+8.433 avaliações de clientes"
              link="https://amzn.to/3XB8Zu1"
            />
          </div>
        </div>
        <div className="grid--item--Game">
          <div className="wrapper--Game">
            <CardGame
              img="https://m.media-amazon.com/images/I/41z19ZnD8ZL._AC_SX679_.jpg"
              title="Headset sem fio PULSE 3D - PlayStation 5"
              description="Compatível com PlayStation 4, prepare-se para uma nova geração de áudio gamer com o headset sem fio PULSE 3D para PS5"
              stars={5}
              sales="+5.131 avaliações de clientes"
              link="https://amzn.to/3JL3pj8"
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
