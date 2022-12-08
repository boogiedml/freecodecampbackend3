const mongoose = require("mongoose");
// const validator = require("validator");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  favoriteFoods: Array,
});

module.exports = mongoose.model("Person", personSchema);
