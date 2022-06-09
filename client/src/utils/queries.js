import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      characters {
        _id
        name
        gender
        race
        charClass
        background
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
{
me {
username
  }
}
`

export const QUERY_USERS = gql`
query users {
  users {
    _id
    username
    email
    characters {
      _id
        name
        gender
        race
        charClass
        background
        username
    }
  }
}
`;

export const QUERY_USER = gql`
query user($username: String!) {
  users(username: $username) {
    _id
    username
    email
    characters {
      _id
        name
        gender
        race
        charClass
        background
        username
    }
  }
}
`;

export const QUERY_USER_CHAR = gql`
  query userCharacters($username: String) {
    userCharacters(username: $username) {
        _id
        name
        gender
        race
        charClass
        background
        username
    }
  }
`;

export const QUERY_CHAR_ID = gql`
  query characterByID($characterId: ID) {
    characterByID(characterId: $characterId) {
        _id
        name
        gender
        race
        charClass
        background
        username
    }
  }
`;

export const QUERY_ALL_CHAR = gql`
  query allCharacters {
    allCharacters {
        _id
        name
        gender
        race
        charClass
        background
        username
    }
  }
`;