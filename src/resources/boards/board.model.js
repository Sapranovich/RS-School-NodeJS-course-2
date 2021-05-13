const { v4: uuidv4 } = require('uuid');
const Column = require('./column.model');

class Board {
    constructor() {
      this.id = uuidv4();
      this.title = `MyBoard`;
      this.columns = [new Column(1)];
    }
  }

  
  module.exports = Board;