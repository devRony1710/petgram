import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

export const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      src
      categoryId
      likes
      userId
      liked
    }
  }
`);
