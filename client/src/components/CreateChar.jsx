// import React, {useState} from "react";
// import { useMutation } from '@apollo/client';
// import { ADD_CHAR } from '../utils/mutations';
// import { QUERY_ME, QUERY_USER_CHAR } from "../utils/queries";

// export default function Create ()  {
//     const [gender, setGender] = useState('Non-Binary');
//     const [charlass, setCharclass] = useState('Wizard');
//     const [charrace, setCharace] = useState('Human');
//     const [background, setBackground] = useState('Noble');
  
//     const [addCharacter, { error }] = useMutation(ADD_CHAR, {
//         update(cache, { data: { addCharacter } }) {
      
//             // could potentially not exist yet, so wrap in a try/catch
//           try {
//             // update me array's cache
//             const { me } = cache.readQuery({ query: QUERY_ME });
//             cache.writeQuery({
//               query: QUERY_ME,
//               data: { me: { ...me, characters: [...me.characters, addCharacter] } },
//             });
//           } catch (e) {
//             console.warn("First character insertion by user!")
//           }
      
//           // update thought array's cache
//           const { characters } = cache.readQuery({ query: QUERY_ME });
//           cache.writeQuery({
//             query: QUERY_USER_CHAR,
//             data: { thoughts: [addCharacter, ...characters] },
//           });
//         }
//       });

//     const handleGenderChange = (event) => {
//       setGender(event.target.value);
//     };
  
//     const handleCharclassChange = (event) => {
//       setCharclass(event.target.value);
//     };

//     const handlecharraceChange = (event) => {
//       setCharace(event.target.value);
//     };

//     const handleBackgroundChange = (event) => {
//       setBackground(event.target.value);
//     };

//     return (
//         <form>
//           <Dropdown
//             label="Choose a Gender"
//             options={[
//               { label: 'Female', value: 'female' },
//               { label: 'Male', value: 'male' },
//               { label: 'Non-Binary', value: 'meat' },
//             ]}
//             value={gender}
//             onChange={handleGenderChange}
//           />
    
//           <Dropdown
//             label="Choose a class"
//             options={[
//                 { label : "Wizard", value: "wizard"},
//                 { label : "Warlock", value: "warlock"},
//                 { label : "Barbarian", value: "barbarian"},
//                 { label : "Sorcerer", value: "scorcerer"},
//                 { label : "Druid", value: "druid"},
//                 { label : "Rouge", value: "rouge"},
//                 { label : "Ranger", value: "ranger"},
//                 { label : "Monk", value: "monk"},
//                 { label : "Paladin", value: "paladin"},
//                 { label : "Cleric", value: "cleric"},
//                 { label : "Fighter", value: "fighter"},
//                 { label : "Bard", value: 'bard'},
//             ]}
//             value={charclass}
//             onChange={handleCharclassChange}
//           />

//           <Dropdown
//             label="Choose a Race"
//             options={[
//                 { label : "Elf", value: "elf"},
//                 { label : "Orc", value: 'orc'},
//                 { label : "Dwarf", value: "dwarf"},
//                 { label : "Half Elf", value: "half elf"},
//                 { label : "Human", value: "human"},
//                 { label : "Gnome", value: "gnome"},
//                 { label : "Halfling", value: 'halfling'},
//                 { label : "Monk", value: 'monk'},
//             ]}
//             value={charrace}
//             onChange={handlecharraceChange}
//           />

//           <Dropdown
//             label="Choose a Background"
//             options={[
//                 { label : "Noble", value: "noble"},
//                 { label : "charlatan", value: "charlatan"},
//                 { label : "Criminal", value: "Criminal"},
//                 { label : "Folk Hero", value: "folk hero"},
//                 { label : "Hermit", value: "hermit"},
//             ]}
//             value={background}
//             onChange={handleBackgroundChange}
//           />
    
//           <p>Gender: {gender}!</p>
//           <p>Class: {charlass}!</p>
//           <p>Race: {charrace}!</p>
//           <p>background {background}!</p>
//         </form>
//       );
//     };
