/*
    Object protorype - Basic

    1. Prototype là gì ?
    2. Sử dụng khi nào?
 */

function User (firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

User.prototype.className = 'F8';
User.prototype.getClassName = function (){
    return this.className;
}

var user1 = new User("Minh", 'Khanh', 'Avatar')
var user2 = new User("Do", 'Mixi', 'Avatar')

console.log(user1.getClassName())
console.log(user2)

// Đối tượng Date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();


console.log(`${day}/${month}/${year}`);