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
        <div className="col l6" style={{height: "80vh", overflow: "auto"}} >
            <div className="Character grey">
                <div className="Character-image">
                    <img style={{height:'20rem'}} src={require(`../images/${character.charClass}.gif`)} alt="" />
                </div>
                <h1 className="Character-title has-text-white" >{character.name}</h1>
                <div style={{
                    fontFamily: 'Grenze'
                }}>
                    <div className="Character-data has-text-white">Gender: {character.gender}</div>
                    <div className="Character-data has-text-white">Race: {character.race}</div>
                    <div className="Character-data has-text-white">Class: {character.charClass}</div>
                    <div className="Character-data has-text-white">Background: {character.background}</div>
                    </div>
            </div>
        </div>
    );
      
}