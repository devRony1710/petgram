import React, { useState, useEffect, useRef, Fragment } from "react";

//icons
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

//styles
import { Article, ImgWrapper, Img, Button } from "./style";

//hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMG =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const [show, element] = useNearScreen();
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            {" "}
            {<Icon size="25px" />} {likes} likes
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
