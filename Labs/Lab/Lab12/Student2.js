
/* Noothi Vinun, 2022.11.12, Lab12*/

export default class Student{
    constructor (name, id) {
        this.name=name
        this.id=id
    }
}

export function printStudent(student) {
 return student.name;
}

export function printID(student) {
    return student.id
}
