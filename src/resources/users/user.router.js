const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const {userId} = req.params;
  const user = await usersService.getUser(userId);
  res.json(User.toResponse(user));
});

router.route('/').post(async () => {
});

router.route('/:userId').put(async () => {
});

router.route('/:userId').delete(async () => {
});

module.exports = router;
