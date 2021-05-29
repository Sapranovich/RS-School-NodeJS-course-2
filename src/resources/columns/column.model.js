const { v4: uuidv4 } = require('uuid');

/**
 * Column class.
 */
class Column {
      /**
   * Column constructor.
   * @param {string} id - instance id.
   * @param {string} title - column title.
   * @param {number} order - column order.
   */
    constructor() {
      this.id = uuidv4();
      this.title = `Column`;
      this.order = 1
    }
}

module.exports = Column;