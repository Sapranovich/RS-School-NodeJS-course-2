const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsers();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async () => {
});

router.route('/').post(async () => {
});

router.route('/:userId').put(async () => {
});

router.route('/:userId').delete(async () => {
});

module.exports = router;
