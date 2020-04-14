"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, email, birthDate, password = "", picture) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.password = password;
        this.picture = picture;
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
    getPicture() {
        return this.picture;
    }
}
exports.User = User;
