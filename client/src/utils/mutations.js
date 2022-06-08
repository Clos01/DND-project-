import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_CHAR = gql`
  mutation addCharacter($name: String!, $gender: String!, $race: String!, $class: String!, $background: String!) {
    addCharacter(name: $name, gender: $gender, race: $race, class: $class, background: $background) {
      _id
      name
      gender
      race
      class
      background
      username
    }
  }
`;

export const UPDATE_CHAR = gql`
  mutation updateChar($characterId: ID, $characterInput: characterInput) {
    updateCharacter(
      characterId: $characterId
      characterInput: $characterInput
    ) {
      username
    }
  }
`;

export const DELETE_CHAR = gql`
  mutation removeCharacter($characterId: ID) {
    removeCharacter(characterId: $characterId) {
      username
    }
  }
`;