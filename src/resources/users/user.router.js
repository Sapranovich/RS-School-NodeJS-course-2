const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const { userId } = req.params;
  const user = await usersService.getUser(userId);
  res.status(200).json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.createUser(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const { body, params:{ userId } } = req;
  const user = await usersService.updateUser(userId, body);
  res.status(200).json(User.toResponse(user));
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;
  if(await usersService.removeUser(userId)) res.status(204).json();
});

module.exports = router;
