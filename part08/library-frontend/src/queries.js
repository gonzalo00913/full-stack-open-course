import { gql } from "@apollo/client";

export const ALL_BOOKS = gql`
  query {
    allBooks {
      author
      genres
      published
      title
    }
  }
`;

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      born
    }
  }
`;

export const CREATE_BOOK = gql`
mutation AddBook($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {
  addBook(title: $title, published: $published, author: $author, genres: $genres) {
    author
    genres
    published
    title
  }
}
`

export const EDIT_AUTHOR = gql`
  mutation EditAuthor($name: String!, $born: Int!) {
    editAuthor(name: $name, born: $born) {
      born
      name
    }
  }
`;
