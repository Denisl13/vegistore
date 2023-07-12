import "./Casa.css";
import "./Fontes/fonte.css";
import { useState } from "react";
import Sep from "../Separador/Sep";
import Footer from "../Footer/footer";
import Bcasa from "../BannerCasa/Bcasa";
import { NavHeader } from "../Header/header";
import BvoltaTop from "../VoltaInicio/BvoltaTopo";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardCasaProps {
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
function CardCasa(props: CardCasaProps) {
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
  return (
  <div className={`card--master--Casa ${props.isSpecial ? "special-card" : ""}`}>
    <div
      className={`card__corpo__Casa ${showName ? "show-name" : ""}`}
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
          className={`card-imagem--Casa ${props.isFeatured ? "featured-card" : ""}`}
          alt={props.title}
        />
      </a>
      <h2 className={`card__titulo__Casa ${props.isSpecial ? "special-card" : ""}`}>
        {props.title}
      </h2>
      <div className="card__stars__Casa">
        <div className={`card__label__Casa ${props.label ? "has-label" : ""}`}>
          <div className="label__content__Casa">{props.label}</div>
        </div>
        {props.stars && <span>{stars}</span>}
        {props.hearts && <div className="card__hearts__Casa">{hearts}</div>}
        {props.sales && <p>{props.sales}</p>}
      </div>
      <p className={`card__descricao__Casa ${props.isSpecial ? "special-card" : ""}`}>
        {(description)}
      </p>
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
              img="https://m.media-amazon.com/images/I/716GA5MQQkL._AC_SX425_.jpg"
              title="WAP ROBOT W90 - Aspirador de Pó Robô, Automático 3 em 1 Varre, Aspira, Passa Pano, MOP para Limpeza, 30W, Bateria Recarregável, Bivolt, Preto"
              description="Autonomia de 1h40 de duração.
Escova giratória, ideal para cantos e MOP em microfibra, que pode ser lavado na máquina.
3 em 1: Varre, Aspira e Passa pano.
Modos de limpeza: Aleatório, Cantos e Espiral.
Possui sensores de impacto e antiqueda, que redirecionam o aspirador quando encontra um obstáculo.
Tipo : Robótico"
              stars={5}
              sales="+3450 avaliações de Clientes"
              label="Ranking dos mais vendidos"
              link="https://amzn.to/3JLMVXX"
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/51VffabeyEL.__AC_SX300_SY300_QL70_ML2_.jpg"
              title="Umidificador de Ar Mondial, Comfort Air 6, Bivolt, Branco/Azul, 35W - UA-07"
              description="Proporciona até 14 horas de uso contínuo Devido ao seu reservatório de 4L, econômico e supersilencioso Baixo consumo de energia para o seu conforto e bem- estar"
              stars={5}
              sales="+880 avaliações de Clientes"
              label="-38%"
              link="https://amzn.to/46Dmbmk"
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/51eXtPsPGYL._AC_SX466_.jpg"
              title="Cooktop por Indução, Perfect Cuisine, Preto, 110v, Cadence"
              description="Cozinhar sem preocupações finalmente se tornou possível! Chegou o Cooktop por Indução Perfect Cuisine da Cadence. Ele é feito para aqueles que precisam de praticidade, economia de espaço e eficiência."
              stars={5}
              sales="+1661 avaliações de Clientes"
              label="Oferta Prime Day"
              link="https://amzn.to/43bIeNR"
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/81Rw7h8fZ5L._AC_SX522_.jpg"
              title="Estante Livreiro com 5 nichos MULTY cor Branco - Artely"
              description="Organizador é como podemos definir a Estante Multy. Útil, com 5 nichos espaçosos, nela você poderá organizar livros, porta-retratos e objetos decorativos conferindo beleza e modernidade ao ambiente."
              stars={5}
              sales="+1243 avaliações de Clientes"
              label="1° mais vendido"
              link="https://amzn.to/3XIdEdM"
            />
          </div>
        </div>
      </div>
      <div className="grid-container-Casa">
        <div className="grid--item--Casa item1">
          <div className="wrapper__Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/51oHkVzhZjL._AC_SX522_.jpg"
              title="Seladora Vacuo 110V"
              description="Seladora a Vácuo Electrolux com três funções: Vácuo e Selar, Apenas Selar ou Pulsar. "
              stars={5}
              sales="+900 avaliações de Clientes"
              label="Menor preço dos últimos 30 dias"
              link="https://amzn.to/3pAMEAc"
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/517oMuBINKL._AC_SX466_.jpg"
              title="Ducha Eletrônica Fit Blindada 6500W 220V, Hydra, Branco, DPFT.EB.652BR"
              description="A ducha Fit Blindada possui um espalhador médio especialmente projetado para que você tenha um banho com a intensidade e a quantidade certas de água, evitando desperdícios."
              stars={5}
              sales="+435 avaliações de Clientes"
              label="-20%"
              link="https://amzn.to/46NxecG"
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/618rfw6J09L._AC_SX569_.jpg"
              title="Berço Portátil Mini Play, Safety 1st, Grey Denim"
              description="Ideal para crianças com até 1 ano. Design compacto para ser usado em qualquer lugar. Duas alturas com zíper, que torna mais segura a distância entre a parede do berço e o colchonete."
              stars={5}
              sales="+1.326 avaliações de Clientes"
              label="-27%"
              link="https://amzn.to/46zt73L"
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/31iE9bQ0oIL._AC_SX522_.jpg"
              title="Ventilador De Teto Arno Ultimate VX10 Branco 127v"
              description="Controle remoto Ultra Slim (pilhas não incluídas) - 6 velocidades, função timer e dormir."
              stars={5}
              sales="+2.533 avaliações de Clientes"
              label="-6%"
              link="https://amzn.to/3pF4YIn"
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/61+7qaPjChL._AC_SX522_.jpg"
              title="Caixa de Armazenamento Dobrável, Organizador de Armário Empilhável de 35 L Com Porta Dupla para Escritório e Quarto"
              description="Alta capacidade: Grande o suficiente para armazenar mantimentos, livros, brinquedos, roupas, blusas, tecidos, mangas, luvas, artigos de papelaria, bebidas e muito mais."
              stars={5}
              link="https://amzn.to/3pKzIry"
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/61Uf+aYl3NL._AC_SX522_.jpg"
              title="Organizadores de Armário Grande 32L e Caixas de Armazenamento Com Tampa Caixa de Armazenamento Dobrável Armário de Armazenamento Transparente para Roupas"
              description="Multifunção: A caixa de armazenamento dobrável é uma caixa de armazenamento multifuncional, que pode ser usada como armário de armazenamento, caixa de armazenamento externa, caixa de armazenamento de garagem, caixa de armazenamento de ferramentas, caixa de armazenamento de cozinha"
              stars={5}
              link="https://amzn.to/3PTWEiS"
            />
          </div>
        </div>
        <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/61v7CaAC7cL._AC_SX425_.jpg"
              title="VINGVO Armário de armazenamento dobrável, caixas de armazenamento para instalação gratuita 2 modos de abertura para quarto (branco)"
              description="Grande capacidade de armazenamento: forte o suficiente para suportar 110 libras (50 quilogramas). Os lados esquerdo e direito são projetados com alças, que podem levantar bem a caixa"
              stars={5}
              link="https://amzn.to/44F515Y"
            />
          </div>
        </div>
         <div className="grid--item--Casa">
          <div className="wrapper--Casa">
            <CardCasa
              img="https://m.media-amazon.com/images/I/71N3nIJJ5sL._AC_SX522_.jpg"
              title="Organizador de armazenamento de cubo – Guarda-roupa, cestos de plástico dobráveis 32L com tampas e porta"
              description="【Duas maneiras de abertura】: O design de capa dupla é inovador e prático. A tampa superior é fácil de tirar e colocar em itens grandes. A porta lateral tem fivelas fechadas, o que pode evitar que itens internos caiam ao se mover."
              stars={5}
              link="https://amzn.to/3PQ3aqL"
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
