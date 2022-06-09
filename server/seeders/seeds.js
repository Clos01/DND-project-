const {faker} = require('@faker-js/faker');
const db = require('../config/connection');
const { User, Character } = require('../models');

db.once('open', async () => {
    await Character.deleteMany({});
    await User.deleteMany({});

    // create user data
    const userData = [];
  
    for (let i = 0; i < 50; i += 1) {
      const username = faker.internet.userName();
      const email = faker.internet.email(username);
      const password = 'password';
  
      userData.push({ username, email, password });
    }
  
    const createdUsers = await User.insertMany(userData);
    
    const classes = ["Paladin", "Rouge", "Ranger", "Cleric", "Warlock", "Barbarian"]
    const races = ["Human", "Triton", "Dwarf", "Elf", "Gnome", "Orc"]

    // create characters
    let createdCharacters = [];
    for (let i = 0; i < 100; i += 1) {
      const name = faker.name.findName();
      const gender = faker.name.gender();
      const race = races[Math.floor(Math.random()*races.length)];
      const charClass = classes[Math.floor(Math.random()*classes.length)];
      const background = faker.name.jobArea();
  console.log(charClass)
      const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      const { username, _id: userId } = createdUsers[randomUserIndex];
  
      const createdCharacter = await Character.create({ name, gender, race, charClass, background, username });
  
      const updatedUser = await User.updateOne(
        { _id: userId },
        { $push: { characters: createdCharacter._id } }
      );
  
      createdCharacters.push(createdCharacter);
    }
  
    console.log('all done!');
    process.exit(0);
  });
  