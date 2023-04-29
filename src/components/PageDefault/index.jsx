import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { FavoriteProvider } from "Context/Favorite";
import { Outlet } from "react-router-dom";

const PageDefault = () => {
  return (
    <>
      <Header />
      <main>
        <FavoriteProvider>
          <Outlet />
        </FavoriteProvider>
      </main>
      <Footer />
    </>
  );
};

export default PageDefault;
