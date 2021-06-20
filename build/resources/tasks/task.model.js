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
exports.Task = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
/**
 * Task class.
 */
let Task = class Task extends typeorm_1.BaseEntity {
    /**
 * Task constructor.
 * @param {string} id - instance id.
 * @param {string} title - task name.
 * @param {string} order -  task order.
 * @param {string} description - task description.
 * @param {string} userId - user id created this task.
 * @param {string} boardId - board id where the task is located.
 * @param {string} columnId - column id.
 */
    constructor({ id = uuid_1.v4(), title = 'Task', order = 0, description = 'Description', userId = null, boardId = 'boardId', columnId = 'columnId' } = {}) {
        super();
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
};
__decorate([
    typeorm_1.PrimaryColumn('varchar', { length: 100 }),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", Number)
], Task.prototype, "order", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Task.prototype, "boardId", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], Task.prototype, "columnId", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: true }),
    __metadata("design:type", Object)
], Task.prototype, "userId", void 0);
Task = __decorate([
    typeorm_1.Entity({ name: 'Task' }),
    __metadata("design:paramtypes", [Object])
], Task);
exports.Task = Task;
