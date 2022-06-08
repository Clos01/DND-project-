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
  
    // getAllAbilities Function
    handleTextChange = event => {
      const { name, value } = event.target;
     
      this.props.updateCharacter(name, value);
    };
  
    // randomizeStats = () => {
    //   const stats = {
    //     strength: "",
    //     constitution: "",
    //     dexterity: "",
    //     intelligence: "",
    //     wisdom: "",
    //     charisma: ""
    //   };
  
    //   for (let stat in stats) {
    //     if (stats.hasOwnProperty(stat)) {
    //       let randomValue = 0;
  
    //       for (let i = 0; i < 3; i++) {
    //         randomValue += Math.ceil(Math.random() * 6);
    //       }
    //       stats[stat] = randomValue;
    //     }
    //   }
    //   this.props.updateCharacter("stats", stats);
    // };
  
   
    render() {
      return (
        <div className="col l6">
          <div className="grey clearfix Builder">
            <Pager paginate="dots" submit submitAction={this.props.submitAction}>
              <div>
                {/* Character Name */}
                <h1>{this.props.character.name || "Character Name"}</h1>
                <div className="characterName col s12 input-field">
                  <input
                    type="text"
                    name="name"
                    value={this.props.character.name}
                    onChange={this.handleTextChange}
                  />
                </div>
                <Button
                  title={"Male"}
                  colors={
                    this.props.character.gender === "Male"
                      ? [//colors]
                      : [//]
                  }
                  clickThis={() => {
                    this.props.updateCharacter("gender", "Male");
                  }}
                />
                <Button
                  title={"Female"}
                  colors={
                    this.props.character.gender === "Female"
                      ? [//colors ]
                      : [//]
                  }
                  clickThis={() => {
                    this.props.updateCharacter("gender", "Female");
                  }}
                />
                <Button
                  title={"Non-Binary"}
                  colors={
                    this.props.character.gender === "Non-Binary"
                    ? [//colors]
                    : [//]
                  }
                  clickThis={() => {
                    this.props.updateCharacter("gender", "Non-Binary");
                  }}
                />
              </div>
              <div className="characterRaces">
                <h1>Pick your race</h1>
                {this.state.Races.map(result => (
                  <Button
                    key={result.id}
                    title={result.name}
                    colors={
                      this.props.character.race === result.name
                      ? [//colors]
                      : [//]
                    }
                    clickThis={() => {
                      this.props.updateCharacter("race", result.name);
                    }}
                  />
                ))}
              </div>
              <div className="characterClasses">
                {/* Call to getAllClassses */}
                <h1>Pick your class</h1>
                {this.state.Classes.map(result => (
                  <Button
                    key={result.id}
                    title={result.name}
                    colors={
                      this.props.character.class === result.name
                      ? [//colors]
                      : [//]
                    }
                    clickThis={() => {
                      this.props.updateCharacter("class", result.name);
                    }}
                  />
                ))}
              </div>
              
              
            
                <div className="switch">
                    <label>
                      Player Character
                      <input name="npc" value={this.props.character.npc} onClick={this.props.updateCharacter} type="checkbox" />
                      <span className="lever"></span>
                      Non-player Character
                    </label>
                </div>
              
            </Pager>
          </div>
        </div>
      );
    }
  }
  
  export default Builder;