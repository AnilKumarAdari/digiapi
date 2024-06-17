const { Card } = require('../models');

const createCard = async (userBody) => {
  return Card.create(userBody);
};

module.exports = {
  createCard,
};
