import React from "react";
import { Logo } from "./Components/Logo/index";
import { ListOfCategories } from "./Components/ListOfCategories/index";
import { ListOfPhotoCard } from "./Components/ListOfPhotoCard";

// Styles
import { GlobalStyle } from "./Components/Styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <Logo />
      <GlobalStyle />
      <ListOfCategories />
      <ListOfPhotoCard />
    </>
  );
};
