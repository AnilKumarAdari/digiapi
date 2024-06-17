const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const cardController = require('../../controllers/card.controller');

const router = express.Router();

router.route('/:userId').get(auth('getUsers'), validate(userValidation.getUser), cardController.getCard);

module.exports = router;
