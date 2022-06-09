import axios from "axios";

export default {
  getAllUsers: userData => {
    return axios.get("/api/user", userData);
  },
  getUser: id => {
    return axios.get("/api/user/" + id);
  },
  deleteUser: id => {
    return axios.delete("/api/user/" + id);
  },
  userSession: () => {
    return axios.get("/api/user/me")
  },
  createUser: userData => {
    return axios.post("/api/user", userData);
  },
  createCharacterUser: characterData => {
    return axios.post("/api/character/user", characterData)
  },
  getAllCharacters: () => {
    return axios.get("/api/character");
  },
  getCharacter: id => {
    return axios.get("/api/character/" + id);
  },
  deleteCharacter: id => {
    return axios.delete("/api/character/" + id);
  },
  createCharacter: characterData => {
    return axios.post("/api/character", characterData);
  },
  userLogout: () => {
    return axios.get("/api/user/logout")
  }
};