
/* Noothi Vinun, 2022.11.12, Lab12*/

class Student{
    constructor (name, id) {
        this.name=name
        this.id=id
    }
}

function printStudent(student) {
 return student.name;
}

function printID(student) {
    return student.id;
}

export default Student
export {printID, printStudent}