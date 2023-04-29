import Banner from "components/Banner";
import Container from "components/Container";
import Title from "components/Title";
import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import style from "./style.module.scss";
import { useState } from "react";
import { useEffect } from "react";

const Players = () => {
  const parms = useParams();

  const [video, setVideo] = useState();
  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/rafael-ods/cinetag-api/videos?id=${parms.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideo(...data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner background="Player" />
      <Title>
        <h1>Players</h1>
      </Title>
      <Container>
        <iframe
          className={style.video}
          width="560"
          height="315"
          src={video.link}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Container>
    </>
  );
};

export default Players;
