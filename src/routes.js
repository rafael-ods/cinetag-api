import PageDefault from "components/PageDefault";
import Favorite from "pages/Favorite";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Players from "pages/Players";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageDefault/>}>
          <Route index element={<Home />} />
          <Route path="favoritos" element={<Favorite />} />
          <Route path=":id" element={<Players />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
