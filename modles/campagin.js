let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CampaignSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  DM: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  characters: [{
    type: Schema.Types.ObjectId,
    ref: "Character"
  }],
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  monsters: [{
    type: String
  }],
  notes: [{
    type: String,
    ref: "Notes"
  }],
  maps: [{
    type: String,
  }],
  NPCs: [{
    type: Schema.Types.ObjectId,
    ref: "Character"
  }]
});

let Campaign = mongoose.model("Campaign", CampaignSchema);

module.exports = Campaign;