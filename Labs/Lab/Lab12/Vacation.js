
/* Noothi Vinun, Lab12*/

export default class Vacation{
    constructor (place, cost, date, comments) {
        this.place=place
        this.cost=cost
        this.date=date
        this.comments=comments
    }
}

export function getPlace(student) {
 return student.place
}

export function getCost(student) {
    return student.cost
}

export function getDate(student) {
    return student.date
}

export function getComments(student) {
    return student.comments
}


