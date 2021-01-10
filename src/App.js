import React, { Fragment } from "react";
import { Logo } from "./Components/Logo/index";
import { ListOfCategories } from "./Components/ListOfCategories/index";
import { ListOfPhotoCard } from "./Container/ListOfPhotoCards";

// Styles
import { GlobalStyle } from "./Components/Styles/GlobalStyle";

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);

  const detailId = urlParams.get("detail");

  return (
    <>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <p>Aquí van los detalles de la imagen</p>
      ) : (
        <Fragment>
          <ListOfCategories />
          <ListOfPhotoCard categoryId={1} />
        </Fragment>
      )}
    </>
  );
};
