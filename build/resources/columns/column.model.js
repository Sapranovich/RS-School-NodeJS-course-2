"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Column = void 0;
const uuid_1 = require("uuid");
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
    constructor({ id = uuid_1.v4(), title = '', order = 0 } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
    }
}
exports.Column = Column;
