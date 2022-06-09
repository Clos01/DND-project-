import React, {useState} from "react";
import { useMutation } from '@apollo/client';
import { ADD_CHAR } from '../utils/mutations';
import { QUERY_ME, QUERY_USER_CHAR } from "../utils/queries";
import { Link } from "react-router-dom";

export default function CreateCharComp ()  {
  const  [addCharacter, {error}] = useMutation(ADD_CHAR)  
  
  const [name, setName ]= useState('');
  const [gender, setGender] = useState('Female');
  const [charClass, setCharclass] = useState('Wizard');
  const [race, setCharace] = useState('Elf');
  const [background, setBackground] = useState('Noble');

    const handleNameChange = (event) => {
      setName(event.target.value)
      console.log(name)
    }

    const handleGenderChange = (event) => {
      setGender(event.target.value)
      console.log(gender)
    };
  
    const handleCharclassChange = (event) => {
      setCharclass(event.target.value);
      console.log(charClass)
    };

    const handleraceChange = (event) => {
      setCharace(event.target.value);
      console.log(race)
    };

    const handleBackgroundChange = (event) => {
      setBackground(event.target.value);
      console.log(background)
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
        await addCharacter({
          variables: {name, gender, race, charClass, background}
        });
      } catch (e) {
        console.error(e)
      }
    };
    
    const genders = [
      'Female',
      'Male',
      'Non-Binary'];

    const classes = [
      'Wizard',
      'Warlock',
      'Barbarian',
      'Sorcerer',
      'Druid',
      'Rouge',
      'Ranger',
      'Monk',
      'Paladin',
      'Cleric',
      'Fighter',
      'Bard'];

      const races = [       
        'Elf',
        'Orc',
        'Dwarf',
        'Half Elf',
        'Human',
        'Gnome',
        'Halfling',
        'Monk'
      ];

      const backgrounds = [
        'Noble',
        'Charlatan',
        'Criminal',
        'Folk Hero',
        'Hermit'
      ];

    return (
        <form onSubmit={handleFormSubmit}>
          <input name='name' placeholder="Name" value={name} onChange={handleNameChange}></input>

          <select value={gender} onChange={handleGenderChange}>
            {genders.map(gender => (
              <option key={gender}>
                {gender}
              </option>
            ))}
          </select>

          <select value={charClass} onChange={handleCharclassChange}>
            {classes.map(Class => (
              <option key={Class}>
                {Class}
              </option>
            ))}
          </select>

          <select value={race} onChange={handleraceChange}>
            {races.map(race => (
              <option key={race}>
                {race}
              </option>
            ))}
          </select>

          <select value={background} onChange={handleBackgroundChange}>
            {backgrounds.map(background => (
              <option key={background}>
                {background}
              </option>
            ))}
          </select>
            <button type="submit">Submit</button>
        </form>
      );
    };
        // <Dropdown
        //     label="Choose a Gender"
        //     options={[
        //       { label: 'Female', value: 'female' },
        //       { label: 'Male', value: 'male' },
        //       { label: 'Non-Binary', value: 'meat' },
        //     ]}
        //     value={gender}
        //     onChange={handleGenderChange}
        //   />
    
        //   <Dropdown
        //     label="Choose a class"
        //     options={[
        //         { label : "Wizard", value: "wizard"},
        //         { label : "Warlock", value: "warlock"},
        //         { label : "Barbarian", value: "barbarian"},
        //         { label : "Sorcerer", value: "scorcerer"},
        //         { label : "Druid", value: "druid"},
        //         { label : "Rouge", value: "rouge"},
        //         { label : "Ranger", value: "ranger"},
        //         { label : "Monk", value: "monk"},
        //         { label : "Paladin", value: "paladin"},
        //         { label : "Cleric", value: "cleric"},
        //         { label : "Fighter", value: "fighter"},
        //         { label : "Bard", value: 'bard'},
        //     ]}
        //     value={charclass}
        //     onChange={handleCharclassChange}
        //   />

        //   <Dropdown
        //     label="Choose a Race"
        //     options={[
        //         { label : "Elf", value: "elf"},
        //         { label : "Orc", value: 'orc'},
        //         { label : "Dwarf", value: "dwarf"},
        //         { label : "Half Elf", value: "half elf"},
        //         { label : "Human", value: "human"},
        //         { label : "Gnome", value: "gnome"},
        //         { label : "Halfling", value: 'halfling'},
        //         { label : "Monk", value: 'monk'},
        //     ]}
        //     value={race}
        //     onChange={handleraceChange}
        //   />

        //   <Dropdown
        //     label="Choose a Background"
        //     options={[
        //         { label : "Noble", value: "noble"},
        //         { label : "charlatan", value: "charlatan"},
        //         { label : "Criminal", value: "Criminal"},
        //         { label : "Folk Hero", value: "folk hero"},
        //         { label : "Hermit", value: "hermit"},
        //     ]}
        //     value={background}
        //     onChange={handleBackgroundChange}
        //   />
    
        //   <p>Gender: {gender}!</p>
        //   <p>Class: {charlass}!</p>
        //   <p>Race: {race}!</p>
        //   <p>background {background}!</p>