import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import React from "react";
import style from "./style.module.scss";
import Container from "components/Container";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [videos, setVideos] = useState([])
  
  
  useEffect(()=> {
    fetch('https://my-json-server.typicode.com/rafael-ods/cinetag-api/videos')
    .then(response => response.json())
    .then(data => {
      setVideos(data)
    })
  },[])

  return (
    <>
      <Banner background="Home" />
      <Container>
        <Title>
          <h1>Um lugar para guardar seus vídeos e filmes!</h1>
        </Title>
        <ul className={style.listCard}>
          {videos.map((video) => {
            return (
              <li key={video.key}>
                <Card card={video}/>
              </li>
            )
          })}
        </ul>
      </Container>
    </>
  );
};

export default Home;
