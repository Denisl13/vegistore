import "./Mfeminina.css";
import BmodaFeminina from "./BModaFeminina/BMFeminina";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import Footer from "../Footer/footer";
import Sep from "../Separador/Sep";
import { NavHeader } from "../Header/header";
import { useState } from "react";

interface CardFemininoProps {
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
function CardFeminino(props: CardFemininoProps) {
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
        className="star-icon"
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

function BMFeminina() {
  return (
    <div className="grid--container--Feminino">
      <NavHeader />
      <BmodaFeminina />
      <Sep title="Roupas Femininas" />
      <div className="grid-container-Feminino">
        <div className="grid--item--Feminino item-1">
          <div className="wrapper__Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/71F2tjW19JS._AC_SX522_.jpg"
              title="Jaqueta de lã Columbia"
              description="Não há nada mais necessário do que uma camada de lã em um guarda-roupa feminino de inverno ao ar livre — é por isso que a jaqueta de lã com zíper completo da Benton Springs existe."
              hearts={5}
              sales="+43.070 avaliações de Clientes"
              label="Compra Internacional"
              link="https://amzn.to/3JG7THK"
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/51jPn4IsqyL._AC_SX425_.jpg"
              title="MANGOPOP Macacão feminino de manga comprida com gola tartaruga"
              description="MANGOPOP é uma marca de roupas popular focada nas tendências mais quentes. Todos os produtos são feitos de tecido confortável."
              stars={5}
              sales="+48.364 avaliações de Clientes"
              label="Compra Internacional"
              link="https://amzn.to/46EGqQz"
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/71-72BGD+EL._AC_SX425_.jpg"
              title="Cueca feminina de algodão respirável exclusiva Hanes, pacote com 6"
              description="O tecido de absorção de umidade mantém você fresco para conforto o dia todo"
              stars={5}
              sales="+12.845 avaliações de Clientes"
              label="Compra Internacional"
              link="https://amzn.to/43dYSMV"
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/71FcAcoUrmL._AC_SY500_.jpg"
              title="WDIRARA Camiseta feminina manga bufante gola quadrada manga curta elegante"
              description="Características: Malha canelada, gola quadrada, manga bufante, ajuste slim"
              stars={5}
              sales="+3.995 avaliações de Clientes"
              label="Compra Internacional"
              link="https://amzn.to/3JJVwKC"
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Feminino">
        <div className="grid--item--Feminino item1">
          <div className="wrapper__Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/71niKeADr5L._AC_SX679_.jpg"
              title="DAJU Meias femininas casuais de algodão colorido para tamanhos 34-40 (5 pares)"
              description="As meias mais macias: a Daju projetou as meias mais confortáveis para mulheres! "
              stars={5}
              sales="+2.434 avaliações de Clientes"
              label="Compra Internacional"
              link="https://amzn.to/44aICxf"
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/71qEwWq7WDL._AC_SY500_.jpg"
              title="Roupa Íntima Tanga elástica pura, pacote com vários, Under Armour, Feminino"
              description="Tamanho alfa atualizado! O novo tecido elástico super macio oferece excelente conforto durante todo o dia para qualquer atividade."
              stars={5}
              sales="+3.719 avaliações de Clientes"
              label="Compra Internacional"
              link="https://amzn.to/3XG0A8r"
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/61imufu1FTL._AC_SY500_.jpg"
              title="Aokosor Blusa regata feminina com decote em V profundo e alças finas para o verão sem mangas"
              description="Design: Regatas de Cami, Alças finas ajustáveis, Decote V sexy, Estilo frontal drapeado, Estampas florais exclusivas/Cor Sólida."
              stars={5}
              sales="+19.980 avaliações de Clientes"
              label="Compra Internacional"
              link="https://amzn.to/3XEvhLm"
            />
          </div>
        </div>
        <div className="grid--item--Feminino">
          <div className="wrapper--Feminino">
            <CardFeminino
              img="https://m.media-amazon.com/images/I/51PxQpLiV1L._AC_SX425_.jpg"
              title="SUUKSESS Calça legging feminina justa para levantamento de bumbum, sem costura, cintura alta, treino e ioga"
              description="Calça flare sem costura canelada: calça de boca de sino, elasticidade em 4 direções, absorção de umidade, sem dedos de camelo, não transparente"
              stars={5}
              sales="+12.432 avaliações de Clientes"
              label="Compra Internacional"
              link="https://amzn.to/437CQLG"
            />
          </div>
        </div>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default BMFeminina;
