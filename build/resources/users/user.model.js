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
exports.User = void 0;
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
/**
 * User class.
 */
let User = class User extends typeorm_1.BaseEntity {
    /**
   * User constructor.
   * @param {string} id - instance id.
   * @param {string} name - user name.
   * @param {string} login - user login.
   * @param {string} password - user password.
   */
    constructor({ id = uuid_1.v4(), name = 'USER_NAME', login = 'user_login', password = '123123' } = {}) {
        super();
        this.id = id;
        this.name = name;
        this.login = login;
        this.password = password;
    }
    /**
   * Takes a User object and returns only needed fields.
   * @param {Object} user - user instance.
   * @returns {{name, id, login}}
   * @static
   */
    static toResponse(user) {
        const { id, name, login } = user;
        return { id, name, login };
    }
};
__decorate([
    typeorm_1.PrimaryColumn('varchar', { length: 100 }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    typeorm_1.Column('varchar', { length: 100 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    typeorm_1.Entity({ name: 'User' }),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
