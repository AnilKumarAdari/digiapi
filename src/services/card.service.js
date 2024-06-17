const { Card } = require('../models');

const createCard = async (userBody) => {
  return Card.create(userBody);
};

const getCardByUserId = async (userId) => {
  return Card.findOne({ userId }).exec();
};

module.exports = {
  createCard,
  getCardByUserId,
};
