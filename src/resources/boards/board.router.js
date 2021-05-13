const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAllBoards();
  res.json(boards);
})

router.route('/:boardId').get(async (req, res) => {
  const {boardId} = req.params;
  const board = await boardService.getBoard(boardId);
  res.json(board);
})

router.route('/').post(async () => {

})

router.route('/:boardId').put(async () => {

})

router.route('/:boardId').delete(async () => {

})

module.exports = router;