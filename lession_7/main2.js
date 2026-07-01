// Object Constructor

function User (firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User("Minh", 'Khanh', 'Avatar')
var user = new User("Do", 'Mixi', 'Avatar')

author.title = 'chia sẻ tại F8'
user.comment = 'liệu có phút giây nào'

// có thể chứa những phương thức, thuộc tính riêng cho mỗi đối tượng

console.log(author.getName())
console.log(user.getName())
