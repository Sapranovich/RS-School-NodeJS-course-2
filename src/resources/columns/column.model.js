const { v4: uuidv4 } = require('uuid');

class Column {
    constructor() {
      this.id = uuidv4();
      this.title = `Column`;
      this.order = 1
    }
}

module.exports = Column;