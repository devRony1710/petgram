import React from "react";

import { PhotoCard } from "../Components/PhotoCard/index";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const query = gql`
  query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  <Query query={query} variables={{ id }}>
    {() => <PhotoCard />}
  </Query>;
};
