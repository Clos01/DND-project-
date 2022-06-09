import React, { Component } from "react";
import Create from "../components/CreateChar";
import Character from "../components/Character";
import dbAPI from "../utils/dbAPI";
import {Navigate} from 'react-router-dom';


class CharacterBuilder extends Component {
    state = {
        character: {
            name: "",
            race: "",
            RaceID: 0,
            class: "",
            ClassID: 0,
            Background: "",
        },
        navigate: ''
    }

    createCharacter = () => {
        const character = this.state.character;
        let id = []
        for(let i = 0; i < this.context.user.length; i++) {
            id.push(this.context.user[i])
        }

        character.userId = id.join('');
        character.campaignId = this.props.match.params.campaignId;

        dbAPI.createCharacterUser(character).then(res => {
            this.setState({navigate: '/mycharacters'})
        });
    }

    }

export default CharacterBuilder;