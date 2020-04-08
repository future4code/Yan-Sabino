"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, email, birthDate, password = "") {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getBirthDate() {
        return this.birthDate;
    }
    getPassword() {
        return this.password;
    }
}
exports.User = User;
