let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CharacterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    characterAppearance: {
        type: String,
        required: false
    },
    experience: {
        type: Number,
        required: true,
        default: 0
    },
    maxHealth: {
        type: Number,
        required: true,
        default: 10
    },
    currentHealth: {
        type: Number,
        required: false
    },
    stats: {
        strength: {
            type: Number,
            required: true
        },
        dexterity: {
            type: Number,
            required: true
        },
        constitution: {
            type: Number,
            required: true
        },
        intelligence: {
            type: Number,
            required: true
        },
        wisdom: {
            type: Number,
            required: true
        },
        initiative: {
            type: Number
        },
        charisma: {
            type: Number,
            required: true
        }
    },
    spells: [{
        type: String,
        required: false
    }],
    alignment: {
        type: String,
        required: true
    },
    NPC: {
        type: Boolean,
        required: true
    }
});

let Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;