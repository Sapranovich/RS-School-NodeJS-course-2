"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const uuid_1 = require("uuid");
const column_model_1 = require("../columns/column.model");
const typeorm_1 = require("typeorm");
/**
 * Board class.
 */
let Board = class Board extends typeorm_1.BaseEntity {
    /**
     * Board constructor.
     * @param {string} id - instance id.
     * @param {string} title - boadr name.
     * @param {Object} Column - Colunm instance.
     */
    constructor({ id = uuid_1.v4(), title = 'RS School', columns = new Array() } = {}) {
        super();
        this.id = id;
        this.title = title;
        this.columns = [...columns.map((item) => new column_model_1.Column(item))];
    }
};
__decorate([
    typeorm_1.PrimaryColumn('varchar', { length: 100 }),
    __metadata("design:type", String)
], Board.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", Array)
], Board.prototype, "columns", void 0);
Board = __decorate([
    typeorm_1.Entity({ name: 'Board' }),
    __metadata("design:paramtypes", [Object])
], Board);
exports.Board = Board;
