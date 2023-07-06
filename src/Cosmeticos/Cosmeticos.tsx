import "./Cosmeticos.css";
import "./Paginacao/CosmPage.css"; //Paginação 1,2,3
import Sep from "../Separador/Sep";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { NavHeader } from "../Header/header";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import Bcosmeticos from "./BannerCosmeticos/Bcosm";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardCosmeticosProps {
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
function CardCosmeticos(props: CardCosmeticosProps) {
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
  <div className={`card--master--Cosmeticos ${props.isSpecial ? "special-card" : ""}`}>
    <div
      className={`card__corpo__Cosmeticos ${showName ? "show-name" : ""}`}
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
          className={`card-imagem--Cosmeticos ${props.isFeatured ? "featured-card" : ""}`}
          alt={props.title}
        />
      </a>
      <h2 className={`card__titulo__Cosmeticos ${props.isSpecial ? "special-card" : ""}`}>
        {(title)}
      </h2>
      <div className="card__stars__Cosmeticos">
        <div className={`card__label__Cosmeticos ${props.label ? "has-label" : ""}`}>
          <div className="label__content__Cosmeticos">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__Cosmeticos">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <p className={`card__descricao__Cosmeticos ${props.isSpecial ? "special-card" : ""}`}>
        {(description)}
      </p>
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
      <Sep title="Beleza e Cuidados Pessoais" />
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/61T10VIxrAL._AC_SX679_.jpg"
              title="Bella Aurora, Repigment12, Tratamento para Eliminar as Manchas Brancas de Rosto e Corpo, Creme Repigmentante da pele para Manchas Brancas ou com déficit de pigmentação, 75 ml"
              description="MITIGA AS CONSEQUÊNCIAS ESTÉTICAS DO VITILIGO NA PELE: Repigment12, CREME DE REPIGMENTAÇÃO (75 ml) para hipopigmentações e manchas brancas. Produto dermatologicamente testado. É importante complementar o tratamento cosmético com exposição ao sol ou fototerapia UVA/UVB."
              hearts={4}
              sales="+105"
              label="Em até 7x R$ 57,00 sem juros "
              isSpecial={true} // Cartão Especial
              link="https://amzn.to/3XLQByz"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/61uzwSCEWDS._AC_SX679_.jpg"
              title="Sérum Facial Eucerin Anti-Pigment - Dual Sérum 30ml"
              description="Ácido hialurônico: Resultados visíveis a partir de 2 semanas, uniformizando a tonalidade da pele e reduzindo a hiperpigmentação."
              stars={5}
              sales="+4.263"
                link="https://amzn.to/3NHjt6m"
                isFeatured={true}//Sem isso não funciona
                highlightText="Mais vendido"
                customTitle="Eucerin"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/51Fktos14TL._AC_SX679_.jpg"
              title="Creme Facial Anti-idade Eucerin Hyaluron-Filler Dia FPS30 50ml"
              description="Hyaluron-Filler Dia FPS 30 é um creme para uso diário que possui cadeias curtas e longas de Ácido Hialurônico e Saponina Bioativa, que aumentam a produção natural de colágeno, estimulam a renovação celular e preenchem as rugas mais profundas. "
              sales="+530"
              label="-20%"
              stars={5}
              link="https://amzn.to/3NXbzqV"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/51nwCy06hKL._AC_SX679_.jpg"
              title="Intensive Retinol Creme 50Ml, Laboratórios Naos do Brasil, 50 Ml"
              description="O instituto esthederm estabilizou o precursor do retinol, para garantir sua liberação gradual e contínua para eficácia duradoura."
              label="Economize 10%"
              stars={4}
              link="https://amzn.to/3XHdrHO"
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Cosmeticos">
        <NavHeader />
        <div className="grid--item--Cosmeticos item1">
          <div className="wrapper__Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/61ZGmR0-7WL._AC_SX679_.jpg"
              title="Neostrata Sérum Volumizador e Corretor De Rugas Facial Tri Therapy Lifting,30ml"
              description="Estimula a síntese de colágeno, aumentando a firmeza e reduzindo as rugas profundas, Com Ácido Hialurônico, para hidratar e suavizar a pele, Sem óleo e sem fragrância, Intensifica níveis de ácido hialurônico, restaurando o volume da derme, Com rápida absorção e textura aveludada"
              stars={5}
              sales="+143"
              link="https://amzn.to/3D1jvB7"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/61ni51z8OqL._AC_SX679_.jpg"
              title="Kit Sérum Facial ISDINCEUTICS Flavo-C Antioxidante Ultraglican + Noturno Melatonin - 20u"
              description="Pele seca, Hidratante, Usar para Olhos, Ácido hialurônico, Vitamina C, Beleza de Luxo."
              stars={5}
              sales="+685 avaliações"
              link="https://amzn.to/3NYLhEP"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/81FdVD7VEzL._AC_SX679_.jpg"
              title="O'Keeffe's Creme para Pés Ressecado e Rachado 91 gramas"
              description="Creme, 91 grama, pele Seca, Glicerina"
              stars={5}
              sales="+74.982 avaliações de Clientes"
              label="Ranking dos mais vendidos"
              link="https://amzn.to/44dzN5R"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos">
          <div className="wrapper--Cosmeticos">
            <CardCosmeticos
              img="https://m.media-amazon.com/images/I/61eboSEL0lL._AC_SY879_.jpg"
              title="Victorias Secret Bombshell Fragrance Lotion for Women 8.4 oz Body Lotion"
              description="Bombshell attitude in silky lotion, bombshell fragrance is a timeless mix of freshcut exotic flowers and afternoon sun pair the lotion, with your eau de parfum for the ultimate headtotoe bombshell experience."
              stars={5}
              sales="+2.273 avaliações de Clientes"
              link="https://amzn.to/44tmtdu"
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
