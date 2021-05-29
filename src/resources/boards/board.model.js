const { v4: uuidv4 } = require('uuid');
const Column = require('../columns/column.model');

/**
 * Board class.
 */
class Board {
  /**
   * Board constructor.
   * @param {string} id - instance id.
   * @param {string} title - boadr name.
   * @param {Object} Column - Colunm instance.
   */
  constructor({
    id = uuidv4(),
    title = 'RS School',
    columns = [new Column()],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
