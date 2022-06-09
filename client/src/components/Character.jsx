import React, { Component } from "react";
import '../components/CreateChar'

class Character extends Component {
  state = {
      ClassImages: {
          Wizard: 'https://piskel-imgstore-b.appspot.com/img/44e83b7a-f797-11e9-9d69-7b541452a7e8.gif',
          Warlock: 'https://piskel-imgstore-b.appspot.com/img/62f09600-f797-11e9-9db7-7b541452a7e8.gif',
          Barbarian: 'https://piskel-imgstore-b.appspot.com/img/7f846e21-f797-11e9-a2f2-7b541452a7e8.gif',
          Sorcerer: 'https://piskel-imgstore-b.appspot.com/img/9f2b7a7a-f797-11e9-9461-7b541452a7e8.gif',
          Druid: 'https://piskel-imgstore-b.appspot.com/img/b726d34c-f797-11e9-ac5d-7b541452a7e8.gif',
          Rogue: 'https://piskel-imgstore-b.appspot.com/img/c699b591-f797-11e9-ba53-7b541452a7e8.gif',
          Ranger: 'https://piskel-imgstore-b.appspot.com/img/db637e7a-f797-11e9-8d0d-7b541452a7e8.gif',
          Monk: 'https://piskel-imgstore-b.appspot.com/img/09817a66-f798-11e9-860d-7b541452a7e8.gif',
          Paladin: 'https://piskel-imgstore-b.appspot.com/img/17d55785-f798-11e9-af45-7b541452a7e8.gif',
          Cleric: 'https://piskel-imgstore-b.appspot.com/img/308a4085-f798-11e9-b12a-7b541452a7e8.gif',
          Fighter: 'https://piskel-imgstore-b.appspot.com/img/443d2375-f798-11e9-806c-7b541452a7e8.gif',
          Bard: 'https://piskel-imgstore-b.appspot.com/img/5f73c0e6-f798-11e9-8bcb-7b541452a7e8.gif',
      }      
  }

  // this is leighs idea is style plz change
  render() {
      return (
          <div className="col l6" style={{height: "80vh", overflow: "auto"}}>
              <div className="Character grey">
                  <div className="Character-image">
                      <img src={this.state.ClassImages[this.props.character.class]} alt="" />
                  </div>
                  <h1 className="Character-title">{this.props.character.name || "Character Name"}</h1>
                  <div style={{
                      fontFamily: 'Grenze'
                  }}>
                      <div className="Character-data">Gender: {this.props.character.gender}</div>
                      <div className="Character-data">Race: {this.props.character.race}</div>
                      <div className="Character-data">Class: {this.props.character.class}</div>
                      </div>
              </div>
          </div>
      );
  }
}

export default Character;