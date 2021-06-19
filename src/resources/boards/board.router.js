const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAllBoards();
  res.status(200).json(boards);
})

router.route('/:boardId').get(async (req, res) => {
    const {boardId} = req.params;
    const board = await boardService.getBoard(boardId);
    if(board) {
      res.status(200).json(board);
    } else {
      res.status(404).json('Not Found');
    }

})

router.route('/').post(async (req, res) => {
  const board = await boardService.createBoard(req.body);
  res.status(201).json(board)
})

router.route('/:boardId').put(async (req, res) => {
  const { body, params:{ boardId } } = req;
  const board = await boardService.updateBoard(boardId, body);
  res.status(200).json(board);
})

router.route('/:boardId').delete(async (req, res) => {
  const {boardId} = req.params;
  if(await boardService.removeBoard(boardId)) res.status(204).json();
})

module.exports = router;