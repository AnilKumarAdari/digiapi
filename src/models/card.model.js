const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const cardSchema = mongoose.Schema(
  {
    cardNumber: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
cardSchema.plugin(toJSON);
cardSchema.plugin(paginate);

/**
 * @typedef Card
 */
const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
