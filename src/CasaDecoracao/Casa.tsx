import "./Casa.css";
import "./Fontes/fonte.css";
import Sep from "../Separador/Sep";
import Footer from "../Footer/footer";
import Bcasa from "../BannerCasa/Bcasa";
import { NavHeader } from "../Header/header";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardCasaProps {
  img: string;
  link?: string;
  title: string;
  description: string;
  stars?: number;
  hearts?: number;
  sales?: string; //número de vendas
  label?: string; //propriedade desconto
  className?: string; //Card especial p Destaque
  isSpecial?: boolean; //identificar o cartão especial
  style?: React.CSSProperties;
}
function CardCasa(props: CardCasaProps) {
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
      className={`card--master--Casa ${props.isSpecial ? "special-card" : ""}`}
    >
      <div className="card__corpo__Casa">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img
            src={props.img}
            className="card-imagem--Casa"
            alt={props.title}
          />
        </a>
        <h2 className={`card__titulo__Casa ${props.isSpecial ? "special-card" : ""}`}>
          {props.title}
        </h2>
        <p className={`card__descricao__Casa ${props.isSpecial ? "special-card" : ""}`}>
          {description}
        </p>
      </div>

      <div className="card__stars__Casa">
        <div className={`card__label__Casa ${props.label ? "has-label" : ""}`}>
          <div className="label__content__Casa">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__Casa">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button className={`card__botao__Casa ${props.isSpecial ? "special-card" : ""}`}>
              Adicionar ao carrinho
          </button>
        </a>
    </div>
  );
}

function Cosmeticos() {
  return (
    <div className="grid--container--Casa">
      <NavHeader />
      <Bcasa />
      <Sep title="Casa e Decoração" />
      <div className="grid-container-Casa">
        <div className="grid--item--Casa item-1">
          <div className="wrapper__Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/51CxmiehQ7L._AC_SX296_SY426_FMwebp_QL65_.jpg"
              title="Resfriamento com óleo mineral em montagens de PC"
              description="O PC com óleo mineral oferece vários benefícios que o tornam uma boa opção.."
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/51h2OiWrPKL._AC_SX296_SY426_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Aproveite as ofertas na Amazon para adquirir produtos de beleza com desconto, como a Máscara Super Hidratante Morte Súbita da Lola Cosmetics. Essa máscara de nutrição é ideal para cabelos ressecados e danificados, proporcionando suavidade, força e desembaraço. Perfeita para uso diário e após processos de coloração, a máscara vem em embalagens de 450g e possui um aroma delicioso. Encontre essa excelente opção de cuidados com os cabelos no site da Amazon. Aproveite essa oportunidade agora!"
              hearts={3}
              sales="+7431"
              label="-50%"
              isSpecial={true} // Cartão Especial
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/71h6YsOt9qL._AC_SX296_SY426_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/61RtXO3KspL._AC_SX296_SY426_FMwebp_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Casa">
        <div className="grid--item--Casa item1">
          <div className="wrapper__Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/711OtVgfhYL._AC_SY450_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={5}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/71vJtkqhn+L._AC_SX296_SY426_QL65_.jpg"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={3}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
              title="Baked Cod with Vegetables"
              description="Baked Cod with Vegetables. 30 minute meal!"
              stars={1}
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://images.unsplash.com/photo-1634822929331-ee4dc2c97fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
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

export default Cosmeticos;
