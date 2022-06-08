const mongoose = require('mongoose');
const { Schema, model } = mongoose;



const foodSchema = new Schema({

  cuisine: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  ingredients: {
    type: String
  },
  image: {
    data: Buffer, 
    contentType: String
  }

});

const Food = model('food', foodSchema);

module.exports = Food;