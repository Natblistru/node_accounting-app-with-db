const express = require('express');
const { asyncHandler } = require('../utils/asyncHandler');

const usersController = require('../controllers/usersController');

const router = express.Router();

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.delete('/:id', asyncHandler(usersController.removeUser));
router.patch('/:id', usersController.updateUser);

module.exports = { userRouter: router };
