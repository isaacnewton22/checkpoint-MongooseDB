const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    favoriteFoods: [String]
});

module.exports = model("user", usersSchema);


