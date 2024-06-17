/* eslint-disable no-unused-vars */
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { cardService } = require('../services');

const getCard = catchAsync(async (req, res) => {
  const card = await cardService.getCardByUserId(req.params.userId);
  if (!card) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Card not found');
  }
  res.send(card);
});

module.exports = {
  getCard,
};
