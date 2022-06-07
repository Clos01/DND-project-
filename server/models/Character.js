const { Schema, model } = require('mongoose');

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        gender: {
            type: String,
            required: true,
            trim: true
        },
        race: {
            type: String,
            required: true,
            trim: true
        },
        class: {
            type: String,
            required: true,
            trim: true
        },
        background: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

const Character = model('Character', characterSchema);

module.exports = Character;