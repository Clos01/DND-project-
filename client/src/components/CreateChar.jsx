import React, { Component } from "react";
import API from "../utils/API"
import "../components/Character"

class Create extends Component {
    state = {
      Name: "",
      Race: "",
      RaceID: 0,
      Class: "",
      ClassID: 0,
      Background: "",
      Classes: [],
      Races: [],
    };
  
     submit(event) {
      event.preventDefault();
      if (this.state.Name.length === 0) {
        console.log("Character needs a name!");
      } else {
        this.submitInfo();
      }
    }
  
    componentDidMount() {
      this.getAllClasses();
      this.getAllRaces();
    }
  
    // getAllRaces Function
    getAllRaces() {
      API.getAllRaces().then(data => {
        this.setState({ Races: data.data.results });
      });
    }
    // getAllClasses Function
    getAllClasses() {
      API.getAllClasses().then(data => {
        this.setState({ Classes: data.data.results });
      });
    }
}
       




export default Create;