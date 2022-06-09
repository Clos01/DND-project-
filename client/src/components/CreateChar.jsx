import React from "react";


const App = () => {
    const [gender, setGender] = React.useState('Non-Binary');
    const [charlass, setCharlass] = React.useState('Wizard');
    const [charrace, setCharace] = React.useState('Human');
    const [background, setBackground] = React.useState('Noble');
  
    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };
  
    const handleCharclassChange = (event) => {
      setCharlass(event.target.value);
    };

    const handlecharraceChange = (event) => {
      setCharace(event.target.value);
    };

    const handleBackgroundChange = (event) => {
      setBackground(event.target.value);
    };


    return (
        <div>
          <Dropdown
            label="Choose a Gender"
            options={[
              { label: 'Female', value: 'female' },
              { label: 'Male', value: 'male' },
              { label: 'Non-Binary', value: 'meat' },
            ]}
            value={gender}
            onChange={handleFoodChange}
          />
    
          <Dropdown
            label="Choose a class"
            options={[
                { label : "Wizard", value: "wizard"},
                { label : "Warlock", value: "warlock"},
                { label : "Barbarian", value: "barbarian"},
                { label : "Sorcerer", value: "scorcerer"},
                { label : "Druid", value: "druid"},
                { label : "Rouge", value: "rouge"},
                { label : "Ranger", value: "ranger"},
                { label : "Monk", value: "monk"},
                { label : "Paladin", value: "paladin"},
                { label : "Cleric", value: "cleric"},
                { label : "Fighter", value: "fighter"},
                { label : "Bard", value: 'bard'},
            ]}
            value={charclass}
            onChange={handleDrinkChange}
          />

          <Dropdown
            label="Choose a Race"
            options={[
                { label : "Elf", value: "elf"},
                { label : "Orc", value: 'orc'},
                { label : "Dwarf", value: "dwarf"},
                { label : "Half Elf", value: "half elf"},
                { label : "Human", value: "human"},
                { label : "Gnome", value: "gnome"},
                { label : "Halfling", value: 'halfling'},
                { label : "Monk", value: 'monk'},
            ]}
            value={charrace}
            onChange={handleDrinkChange}
          />

          <Dropdown
            label="Choose a Background"
            options={[
                { label : "Noble", value: "noble"},
                { label : "charlatan", value: "charlatan"},
                { label : "Criminal", value: "Criminal"},
                { label : "Folk Hero", value: "folk hero"},
                { label : "Hermit", value: "hermit"},
            ]}
            value={background}
            onChange={handleDrinkChange}
          />
    
          <p>Gender: {gender}!</p>
          <p>Class: {charlass}!</p>
          <p>Race: {charrace}!</p>
          <p>background {background}!</p>
        </div>
      );
    };




export default Create;