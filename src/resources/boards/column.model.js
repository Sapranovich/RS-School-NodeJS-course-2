const { v4: uuidv4 } = require('uuid');

class Column {
    constructor(index) {
      this.id = uuidv4();
      this.title = `Column_${index}`;
      this.order = index
    }
}

module.exports = Column;