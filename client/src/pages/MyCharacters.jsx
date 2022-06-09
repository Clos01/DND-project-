import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';
import Auth from '../utils/auth';
import disco from '../images/disco-dice.png'; 
import { Link } from 'react-router-dom';
import { DELETE_CHAR } from "../../src/utils/mutations";

const MyCharacters = () => {
const { loading, data } = useQuery(QUERY_ME);
const [removeChar] = useMutation(DELETE_CHAR);

const handleRemoveChar = async (characterId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      await removeChar({
        variables: { characterId },
      });
      window.location.href="/profile";
    } catch (err) {
      console.error(err);
    }
  };


if(loading){
    return <div>'Loading...'</div>
};
const characters = data?.me.characters || {}

    return (
        <div>
            {Auth.loggedIn() ? (
                <>
                <section className="section">
                <div className="content mb-5">
                    <h2 id="heading-txt">Characters 
                        <span className="ml-6">
                            <Link to={'/createCharacter'}><button id="new-char-btn" className="button">New character</button></Link>
                        </span>
                    </h2>
                </div>
            </section>
            <section className="section">
                <div className="columns is-flex-wrap-wrap">
                    {characters.length > 0 ? (
                        characters.map(character => ( 
                        <div className="column is-3" key={character._id}>
                        <div id="char-box" className="box mr-auto" >
                            <div className="content">
                                <h3>{character.name}</h3>
                            </div>
                            <figure className="image is-128x128 mb-4">
                            <img src={require(`../images/${character.charClass}.gif`)} alt="" />
                            </figure>
                            <div className="field is-grouped">
                                <p className="control">
                                    <Link to={`/character/${character._id}`}><button className="button is-primary is-light is-outlined">View</button></Link>
                                </p>
                                <p className="control">
                                    <button href="#" onClick={() => handleRemoveChar(character._id)} className="button is-danger is-light is-outlined">Delete</button>
                                </p>
                            </div>
                        </div>
                    </div>
                    ))) : (
                        <div className="has-text-white mx-auto is-size-3">No Charatcers Yet</div>
                    )
                }
                </div>
            </section>
            </>
            ) : (
                <section className="section has-text-centered">
                    <div className="has-text-white is-size-3">Login to Begin Making Characters!</div>
                </section>
            )}
        </div>
    );
};

export default MyCharacters; 