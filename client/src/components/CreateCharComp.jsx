import React, {useState} from "react";
import { useMutation } from '@apollo/client';
import { ADD_CHAR } from '../utils/mutations';
import { QUERY_ME, QUERY_USER_CHAR } from "../utils/queries";

export default function CreateCharComp ()  {
  const [addCharacter, { error }] = useMutation(ADD_CHAR, {
    update(cache, { data: { addCharacter } }) {
  
        // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, characters: [...me.characters, addCharacter] } },
        });
      } catch (e) {
        console.warn("First thought insertion by user!")
      }
  
      // update character array's cache
      const { characters } = cache.readQuery({ query: QUERY_USER_CHAR });
      cache.writeQuery({
        query: QUERY_USER_CHAR,
        data: { characters: [addCharacter, ...characters] },
      });
    }
  });

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
        }).then(window.location.href="/")
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
      
      <section className="section">
          <div className="content has-text-centered mb-5">
              <h2 id="heading-txt">Choose Your Character Options</h2>
          </div>
          <div className="columns is-centered m-6">
              <div className="column is-4">
              
              <form onSubmit={handleFormSubmit}>
                <div className="field">
                <label id="label-txt" className="label">Character Name</label>
                  <div className="control">
                      <input className="input is-danger" name='name' placeholder="Character Name" value={name} onChange={handleNameChange}></input>
                  </div>
                </div>


                <div className="field">
                  <label id="label-txt" className="label">Gender</label>
                  <div className="control">
                    <div className="select is-danger">
                        <select value={gender} onChange={handleGenderChange}>
                        {genders.map(gender => (
                          <option key={gender}>
                            {gender}
                          </option>
                        ))}
                        </select>
                    </div>
                   </div>
                  </div>

                  <div className="field">
                    <label id="label-txt" className="label">Class</label>
                      <div className="control">
                        <div className="select is-danger">
                            <select value={charClass} onChange={handleCharclassChange}>
                            {classes.map(Class => (
                              <option key={Class}>
                                {Class}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>


                    <div className="field">
                      <label id="label-txt" className="label">Race</label>
                        <div className="control">
                          <div className="select is-danger">
                              <select value={race} onChange={handleraceChange}>
                              {races.map(race => (
                                <option key={race}>
                                  {race}
                                </option>
                              ))}
                            </select>
                          </div>
                      </div>
                  </div>

                  <div className="field">
                    <label id="label-txt" className="label">Background</label>
                      <div className="control">
                        <div className="select is-danger">
                          <select value={background} onChange={handleBackgroundChange}>
                          {backgrounds.map(background => (
                            <option key={background}>
                              {background}
                            </option>
                          ))}
                        </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                      <button id="new-char-btn" type="submit" className="button mt-4">Create character</button>
                    </div>
                </div>
        </form>              
        </div>
        </div>
        </section>



      );
    };