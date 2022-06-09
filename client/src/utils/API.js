import axios from "axios";

const API = {
    getAllClasses: () => {
        return axios.get("/api/classes");
    },
    getClasses: id => {
        return axios.get("/api/classes/" + id);
    },
        getAllRaces: () => {
        return axios.get("/api/races");
    },
    getRace: id => {
        return axios.get("/api/races/" + id);
    },
    getAllSubRaces: () => {
        return axios.get("/api/subraces");
    },
    getSubRace: id => {
        return axios.get("/api/subraces/" + id);
    },
    };

export default API;