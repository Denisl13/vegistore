import "./Homepage.css";
import { useState } from "react";
import Sep from "../Separador/Sep";
import Footer from "../Footer/footer";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HomePageProps {
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
/* Inicio isFeatured------------------------------------------------------ */
function CardHomepage(props: HomePageProps) {
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };/* Fim isFeatured------------------------------------------------------ */

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
return (
  <div className={`card--master--Homepage ${props.isSpecial ? "special-card" : ""}`}>
    <div
      className={`card__corpo__Homepage ${showName ? "show-name" : ""}`}
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
          className={`card-imagem--Homepage ${props.isFeatured ? "featured-card" : ""}`}
          alt={props.title}
        />
      </a>
      <h2 className={`card__titulo__Homepage ${props.isSpecial ? "special-card" : ""}`}>
        {props.title}
      </h2>
      <div className="card__stars__Homepage">
        <div className={`card__label__Homepage ${props.label ? "has-label" : ""}`}>
          <div className="label__content__Homepage">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__Homepage">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <p className={`card__descricao__Homepage ${props.isSpecial ? "special-card" : ""}`}>
        {(description)}
      </p>
    </div>
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <button className={`card__botao__Homepage ${props.isSpecial ? "special-card" : ""}`}>
        Adicionar ao carrinho
      </button>
    </a>
  </div>
  );
}
/*
1-A medida que os textos aumentam, o componente "Card" também aumenta.
2-Para ter um total de quatro cards, é necessário adicionar mais um card ao container.
*/
function Homepage() {
  return (
    <div className="grid--container--Homepage">
      <Sep title="Casa e Decoração" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/51xYDrHoHbL._AC_SX466_.jpg"
              title="Máscara de Hidratação Lola Cosmetics "
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              hearts={3}
              sales="+5199"
              link="https://amzn.to/3N2jO4q"
              isFeatured={true}//Sem isso não funciona
              highlightText="Mais vendido"
              customTitle="Muito Vicky"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/711OtVgfhYL._AC_SY450_.jpg"
              title="Máscara de Hidratação Lola Cosmetics "
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={4}
              sales="+7831"
              label="Até 28% off"
              isFeatured={true}
              highlightText="Venda+"
              customTitle="Vicky vaporube"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/81Ve6gN5waL._AC_SX522_.jpg"
              title="Máscara de Hidratação Lola Cosmetics "
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
              sales="+853"
              link="https://amzn.to/3X6yaEn"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/81Ve6gN5waL._AC_SX522_.jpg"
              title="Máscara de Hidratação Lola Cosmetics "
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
              sales="+853"
            />
          </div>
        </div>
      </div>
      <Sep title="Beleza e Cuidados Pessoais" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/41YZ+c64ZJL._AC_SY460_.jpg"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={5}
              sales="+1053"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.pexels.com/photos/7234404/pexels-photo-7234404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              sales="+5199"
              stars={4}
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/71l4dtDWmAL._AC_SY450_.jpg"
              title="Baked Cod with Vegetables"
              sales="+5199"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/81Ve6gN5waL._AC_SX522_.jpg"
              title="Máscara de Hidratação Lola Cosmetics "
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
              sales="+853"
            />
          </div>
        </div>
      </div>
      <Sep title="Roupas Femininas" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/71DydE15CZL._AC_SR350,526_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={5}
              sales="+5199"
              link="https://www.amazon.com.br/Lingerie-Feminina-Sensual-Preto-Medium/dp/B09QBWYXMK/ref=mp_s_a_1_10?keywords=feminino&sr=8-10"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.pexels.com/photos/6572958/pexels-photo-6572958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={2}
              sales="+5199"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
              sales="+5199"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/81Ve6gN5waL._AC_SX522_.jpg"
              title="Máscara de Hidratação Lola Cosmetics "
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
              sales="+853"
            />
          </div>
        </div>
      </div>
      <Sep title="Games e Consoles" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1636138390765-c2497027eb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={5}
              sales="+5199"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={2}
              sales="+5199"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
              sales="+5199"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/81Ve6gN5waL._AC_SX522_.jpg"
              title="Máscara de Hidratação Lola Cosmetics "
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
              sales="+853"
            />
          </div>
        </div>
      </div>
      <Sep title="Recomendados" />
      <div className="grid-container-Homepage">
        <div className="grid--item--Homepage item-1">
          <div className="wrapper__Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1636138390765-c2497027eb89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={5}
              sales="+5199"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1487798452839-c748a707a6b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={2}
              sales="+5199"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
              sales="+5199"
            />
          </div>
        </div>
        <div className="grid--item--Homepage">
          <div className="wrapper--Homepage">
            <CardHomepage
              img="https://m.media-amazon.com/images/I/81Ve6gN5waL._AC_SX522_.jpg"
              title="Máscara de Hidratação Lola Cosmetics "
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics."
              stars={3}
              sales="+853"
            />
          </div>
        </div>
      </div>
      <BvoltaTop />
      <Footer />
    </div>
  );
}

export default Homepage;
