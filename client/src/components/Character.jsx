import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CHAR_ID } from '../utils/queries';

export default function Character(props) {

const {id: characterId} = useParams();

const {loading, data} = useQuery(QUERY_CHAR_ID, {
    variables: {id: characterId}
});

if (loading) {
return <div>Loading...</div>
};

const character = data.characterByID  

    return (
        <section className="section has-text-centered">

                <div className="content mb-5">
                    <h2 id="heading-txt">{character.name}</h2>
                </div>

            <div className="col l6" style={{height: "80vh", overflow: "auto"}} >
                <div className="Character grey">
                    <div className="Character-image">
                        <img style={{height:'20rem'}} src={require(`../images/${character.charClass}.gif`)} alt="" />
                    </div>

                    <div className="columns is-centered mt-5">
                        <div className="column is-4">
                            <div id="char-box" className="box has-text-left">
                                <div className="Character-data m-4"><span className="has-text-weight-bold">Gender:</span> {character.gender}</div>
                                <div className="Character-data m-4"><span className="has-text-weight-bold">Race:</span> {character.race}</div>
                                <div className="Character-data m-4"><span className="has-text-weight-bold">Class:</span> {character.charClass}</div>
                                <div className="Character-data m-4"><span className="has-text-weight-bold">Background:</span> {character.background}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
      
}