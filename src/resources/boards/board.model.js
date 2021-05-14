const { v4: uuidv4 } = require('uuid');
const Column = require('./column.model');

class Board {
  constructor({
    id = uuidv4(),
    title = 'ButterBoard',
    columns = [new Column()]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

  
  module.exports = Board;