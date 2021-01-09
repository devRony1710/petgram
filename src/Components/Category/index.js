import React from "react";

// styles
import { Anchor, Image } from "./style";

const DEFAULT_IMG = "https://i.imgur.com/dJa0Hpl.jpg";

export const Category = ({ cover = DEFAULT_IMG, path, emoji = "?" }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  );
};
