//pre-ES6

function Student() {
    this.name = this.name

}

Student.prototype.getName = function() {
    return this.name;

}

//ES6

class Teacher {
    constructor(name) {
        this.name = name;

    }

    getName() {
        return this.name;

    }
}