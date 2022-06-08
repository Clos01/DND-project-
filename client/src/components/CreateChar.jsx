
import API from "../../../routes/dndRoutes"

class Builder extends Component {
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
  
    static contextType = UserSession;
  
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
       