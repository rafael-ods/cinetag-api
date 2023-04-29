import Banner from "components/Banner";
import Container from "components/Container";
import Title from "components/Title";
import React from "react";
import style from "./style.module.scss";
import { useFavoritoContext } from "Context/Favorite";
import Card from "components/Card";

const Favorite = () => {
  const { favorito  } = useFavoritoContext()
  return (
    <>
      <Banner background="Favoritos" />
      <Container>
        <Title>
          <h1>Meus Favoritos</h1>
        </Title>
        <ul className={style.listCard}>
          {favorito.map((list) => {
            return (
              <li key={list.id}>
                <Card card={list}/>
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  );
};

export default Favorite;
