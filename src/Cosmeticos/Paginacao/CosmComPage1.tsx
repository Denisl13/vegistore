import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Footer from "../../Footer/footer";
import { Cosmeticoimages } from "../BannerCosmeticos/SliderCosmeticos";
import Bcosmeticos from "../BannerCosmeticos/Bcosm";
import { NavHeader } from "../../Header/header";
import "./CosmPage1.css";
import Sep from "../../Separador/Sep";
import BvoltaTop from "../../VoltaInicio/BvoltaTopo";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

// Interface para as propriedades do CardCosmPag1
interface CardCosmPag1Props {
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

function CardCosmPag1(props: CardCosmPag1Props) {
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
  <div className={`card--master--ccPage1 ${props.isSpecial ? "special-card" : ""}`}>
    <div
      className={`card__corpo__ccPage1 ${showName ? "show-name" : ""}`}
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
          className={`card-imagem--ccPage1 ${props.isFeatured ? "featured-card" : ""}`}
          alt={props.title}
        />
      </a>
      <h2 className={`card__titulo__ccPage1 ${props.isSpecial ? "special-card" : ""}`}>
        {(title)}
      </h2>
      <div className="card__stars__ccPage1">
        <div className={`card__label__ccPage1 ${props.label ? "has-label" : ""}`}>
          <div className="label__content__ccPage1">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__ccPage1">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <p className={`card__descricao__ccPage1 ${props.isSpecial ? "special-card" : ""}`}>
        {(description)}
      </p>
    </div>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button className={`card__botao__ccPage1 ${props.isSpecial ? "special-card" : ""}`}>
        Adicionar ao carrinho
      </button>
    </a>
  </div>
  );
}
// ScrollTop pagination
function CosmComPage1() {
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
  const imageIndex = 0;
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
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/51+xmaZiyBL._AC_SX679_.jpg"
              title="ESTHEDERM Lift & Repair Creme Absolute Lissante 50 Ml"
              description="LIFT & REPAIR, tecnologia avançada para correção de rugas e firmeza para uma pele visivelmente mais tonificada, lisa e revitalizada: rugas mais lisas e atenuadas, melhora do volume e contorno facil."
              stars={4}
              sales="+73 avaliações de Clientes"
              label="-15%"
              link="https://amzn.to/3PJUtOI"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/71Ay6FLLdlL._AC_SX679_.jpg"
              title="Esthederm Intensive Hyaluronic - Sérum Anti-Idade 30ml"
              description="Molécula naturalmente presente no organismo, o ácido hialurônico é um reservatório de hidratação e promove ação preenchedora."
              hearts={5}
              sales="+186 avaliações de Clientes"
              label="Exclusivo Prime"
              link="https://amzn.to/44vO3GX"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/71omNti2yVL._AC_SX679_.jpg"
              title="Kiehl's Creme Ultra Facial 50 ml"
              description="Marca Kiehl's, Ácido salicílico, Sem Perfume, Creme, Hidratação profunda para a pele, hidratação intensa."
              stars={5}
              label="Beleza de Salão"
              sales="+952 avaliações de Clientes"
              link="https://amzn.to/3pJe0UC"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/51b1DT6c1ML._AC_SX679_.jpg"
              title="Sérum Noturno com Ácido Lático e Esqualano"
              description="Esfolia e restaura para uma pele mais macia, iluminada e uniforme • Acelera o processo de renovação celular para que a pele tenha um glow natural de “acordei assim” • Restaura a aparência de pele, minimizando os efeitos dos agressores diários"
              stars={5}
              label="Economize R$20 no app"
              sales="+254 avaliações de Clientes"
               link="https://amzn.to/3XGkSii"
            />
          </div>
        </div>
      </div>
      {/*Final Bloco */}
      <div className="grid-container-Cosmeticos">
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/516qcLVqtML._AC_SX679_.jpg"
              title="Sérum Vichy Mineral 89 Probiotic Fractions 30ml"
              description="+45% de Iluminosidade, +41% Elasticidade, -23% Linhas Finas"
              stars={5}
              isFeatured={true}//Sem isso não funciona
              highlightText="Mais vendido"
              customTitle="Sérum Vichy"
              sales="+1.136 avaliações de Clientes"
              link="https://amzn.to/3JPmu3t"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/611be7agVXL._AC_SX679_.jpg"
              title="Esthederm Intensive Hyaluronic Contour Yeux - Sérum para Área dos Olhos 15ml"
              description="Reduz visivelmente as rugas e linhas finas, diminui bolsas e olheiras, redensifica e hidrata de forma duradoura"
              stars={5}
              sales="+134 avaliações de Clientes"
              label="-21%"
              link="https://amzn.to/3O4cZAc"
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/61rLObVk4HL._AC_SX679_.jpg"
              title="Filorga Optim-Eyes Creme Contorno De Olhos 15Ml Olheiras"
              description="O Filorga Optim-Eyes Creme Contorno de Olhos é um produto altamente eficaz para combater olheiras. Com sua fórmula avançada, ele atua de forma intensiva na área dos olhos, reduzindo os sinais de fadiga e iluminando o olhar. "
              stars={5}
              sales="+2.915 avaliações de Clientes"
              link="https://amzn.to/3D5Mpju"
              
            />
          </div>
        </div>
        <div className="grid--item--Cosmeticos item-1">
          <div className="wrapper__Cosmeticos">
            <CardCosmPag1
              img="https://m.media-amazon.com/images/I/71aY8aCLLKL._AC_SX679_.jpg"
              title="Vichy Neovadiol Noite - Creme Anti-Idade Noturno 50ml"
              description="O Vichy Neovadiol Noite é um poderoso creme anti-idade noturno. Sua fórmula exclusiva ajuda a redefinir os contornos faciais, combater a flacidez e reduzir rugas profundas durante o sono. Com textura luxuosa e de rápida absorção, proporciona uma pele mais firme, suave e revitalizada ao acordar."
              stars={5}
              sales="+393 avaliações de Clientes"
              link="https://amzn.to/46veK0p"
            />
          </div>
        </div>
      </div>
      {/*Final Bloco */}

      <div className="pagination">
        <Link to="/cosmeticos">&laquo;</Link>
        <Link to="/cosmeticos/pagination=1?" className="active">
          1
        </Link>
        <Link to="/cosmeticos/pagination=2?">2</Link>
        {/*<Link to="/cosmeticos/pagination=3?">3</Link>*/}
        <Link to="/cosmeticos">&raquo;</Link>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default CosmComPage1;