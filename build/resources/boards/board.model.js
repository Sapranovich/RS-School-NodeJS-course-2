"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = require("uuid");
const column_model_1 = require("../columns/column.model");
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
    constructor({ id = uuid_1.v4(), title = 'RS School', columns = new Array() } = {}) {
        this.id = id;
        this.title = title;
        this.columns = [...columns.map((item) => new column_model_1.Column(item))];
    }
}
exports.Board = Board;
