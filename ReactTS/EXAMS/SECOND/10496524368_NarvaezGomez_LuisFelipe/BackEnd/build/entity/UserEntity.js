"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserEntity {
    constructor(name, email, pass, state, date, id) {
        this.nameUser = name;
        this.emailUser = email;
        this.passUser = pass;
        this.stateUser = state;
        this.dateCreated = date;
        this.idProfile = id;
    }
}
;
exports.default = UserEntity;
