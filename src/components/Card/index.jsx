import { useFavoritoContext } from "Context/Favorite";
import style from "./style.module.scss";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  const { favorito, addFavorito } = useFavoritoContext();
  const isFavorito = favorito.some((fav) => fav.id === card.id);

  const props = {
    color: "red",
  };

  return (
    <div className={style.card}>
      <Link style={{textDecoration: "none", textAlign: "left"}} to={`/${card.id}`}>
        <img className={style.card__image} src={card.image} alt={card.title} />
        <h2 className={style.card__title}>{card.title}</h2>
      </Link>
      <div
        className={style.card__icon}
        onClick={() => {
          addFavorito(card);
        }}
      >
        {isFavorito ? <AiFillHeart {...props} /> : <AiOutlineHeart />}
      </div>
    </div>
  );
};

export default Card;
