import "./Page2.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sep from "../../../Separador/Sep";
import Footer from "../../../Footer/footer";
import { NavHeader } from "../../../Header/header";
import Bcosmeticos from "../../BannerCosmeticos/Bcosm";
import BvoltaTop from "../../../VoltaInicio/BvoltaTopo";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cosmeticoimages } from "../../BannerCosmeticos/SliderCosmeticos";

// Interface para as propriedades do CardCosmPag1
interface CardCosmPag2Props {
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
function CardCosmPag2(props: CardCosmPag2Props) {
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
  <div className={`card--master--ccPage2 ${props.isSpecial ? "special-card" : ""}`}>
    <div
      className={`card__corpo__ccPage2 ${showName ? "show-name" : ""}`}
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
          className={`card-imagem--ccPage2 ${props.isFeatured ? "featured-card" : ""}`}
          alt={props.title}
        />
      </a>
      <h2 className={`card__titulo__ccPage2 ${props.isSpecial ? "special-card" : ""}`}>
        {(title)}
      </h2>
      <div className="card__stars__ccPage2">
        <div className={`card__label__ccPage2 ${props.label ? "has-label" : ""}`}>
          <div className="label__content__ccPage2">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__ccPage2">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <p className={`card__descricao__ccPage2 ${props.isSpecial ? "special-card" : ""}`}>
        {(description)}
      </p>
    </div>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button className={`card__botao__ccPage2 ${props.isSpecial ? "special-card" : ""}`}>
        Adicionar ao carrinho
      </button>
    </a>
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
      <Sep title="Cuidados com o Cabelo" />
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://m.media-amazon.com/images/I/61AdMYuh4fL._AC_SX679_.jpg"
              title="Taiff Secador Style 2000W 127V Style 333 Preto Pequeno"
              description="O secador Taiff Style Black é ideal para uso pessoal. Com potência de 2.000W, proporciona agilidade e rapidez na secagem e modelagem dos cabelos."
              stars={5}
              sales="+6335 avaliações de Clientes"
              label="Sexadorde Cabelo Taiff"
              link="https://amzn.to/3JMqfqx"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://m.media-amazon.com/images/I/61RnyedqaXL._AC_SX679_.jpg"
              title="Kit Wella Professionals Invigo Nutri-Enrich Salon Trio (3 Produtos)"
              description="Kit de tratamento para cabelos secos, ressecados ou com química em tamanho salão. Wella Professionals Invigo Nutri-Enrich Salon Duo nutre e hidrata de maneira intensa para restaurar a saúde dos fios."
              hearts={5}
              sales="+1.404 avaliações de Clientes"
              label="Wella Invigo Nutri Enrich"
              link="https://amzn.to/3rnfRPm"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://m.media-amazon.com/images/I/61Qbillw1lL._AC_SX679_.jpg"
              title="Truss Ultra Hydration Sh+Cd + Spec.Mask + U.Obg + Night Spa"
              description="Indicado para cabelos danificados e ressecados. Limpa, restaura e hidrata os fios."
              stars={5}
              label="-18%"
              sales="+805 avaliações de Clientes"
              link="https://amzn.to/3pCDP90"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://m.media-amazon.com/images/I/51QXGDE0FSL._AC_SX569_.jpg"
              title="Prancha Lizze Extreme Com Placa Revestida Em Titânio 127V"
              description="Prancha com design ergonômico com alto desempenho, atingindo a temperatura de 465° F (240° C). Produto profissional ideal para progressivas. Formato arredondado ergonomicamente confortável e cabo giratório."
              stars={5}
              label="-7%"
              sales="+1.599 avaliações de Clientes"
               link="https://amzn.to/44dlmPh"
            />
          </div>
        </div>
      </div>
      {/*Final Bloco */}
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://m.media-amazon.com/images/I/71rDtYfVQkL._AC_SX679_.jpg"
              title="Aparador de Pelos Philips 8 em 1 series 3000, Bivolt - MG3731/15"
              description="Experimente um novo visual em qualquer dia da semana com este aparador completo e durável. Seis ferramentas de qualidade permitem que você crie com facilidade exatamente o estilo de barba que você deseja."
              stars={5}
              sales="+4.445 avaliações de Clientes"
              link="https://amzn.to/3D1OsVZ"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://m.media-amazon.com/images/I/51-eUhjhwkL._AC_SX679_.jpg"
              title="Kérastase Óleo Elixir Ultime L'Huile Rose | Todos os tipos de cabelos | Nutrição, brilho | Mix de 4 Óleos Preciosos | 100 ml"
              description="Oléo finalizador para cabelos coloridos com uma combinação excepcional de extrato de chá imperial e extrato de chá branco que oferece mais intensidade da cor. "
              stars={5}
              sales="+2.351 avaliações de Clientes"
              label="-16%"
              link="https://amzn.to/3D31a6I"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://m.media-amazon.com/images/I/6134-4MjhML._AC_SX679_.jpg"
              title="Moiture Recovery Treatment Balm, Joico"
              description="O Moisture Recovery Treatment Balm da Joico é um bálsamo de tratamento altamente hidratante."
              stars={5}
              sales="+2.265 avaliações de Clientes"
              label="-10%"
              link="https://amzn.to/3Nxy44o"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag2
              img="https://m.media-amazon.com/images/I/51U0m-+ueOL._AC_SX679_.jpg"
              title="Red Pro Modelador Instawave, Bivolt - Kiss New York"
              description="O Modelador Instawave da RED PRO by KISS possui tecnologia diamante que proporciona cachos duradouros e com mais brilho. "
              stars={5}
               label="Menor preço dos últimos 30 dias"
              sales="+579 avaliações de Clientes"
               link="https://amzn.to/43dwpGT"
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
