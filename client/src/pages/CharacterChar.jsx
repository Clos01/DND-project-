


// class CharacterBuilder extends Component {
//     state = {
//         character: {
//             name: "",
//             race: "",
//             RaceID: 0,
//             class: "",
//             ClassID: 0,
//             Background: "",
//         },
//         redirect: ''
//     }

//     static contextType = AppStateContext;

//     createCharacter = () => {
//         const character = this.state.character;
//         let id = []
//         for(let i = 0; i < this.context.user.length; i++) {
//             id.push(this.context.user[i])
//         }

//         character.userId = id.join('');
//         character.campaignId = this.props.match.params.campaignId;

//         dbAPI.createCharacterUser(character).then(res => {
//             this.setState({redirect: '/mycharacters'})
//         });
//     }

//     render() {
//         if (this.state.redirect) {
//             return <Redirect to={{ pathname: this.state.redirect }} />
//         } else {
//             return (
//                 <Session>
//                     <div className="container">
//                         <div className="row">
//                             <Builder updateCharacter={this.handleCharacterChange} character={this.state.character} submitAction={this.createCharacter} />
//                             <Character character={this.state.character} />
//                         </div>
//                     </div>
//                 </Session>
//             );
//         }
//     }
// }

// export default CharacterBuilder;