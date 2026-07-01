// Object trong JavaScript

var myInfor = {
    name : 'Minh Khánh',
    age : 21,
    address :  'Hue, VN',
    getName: function(){
        return this.name;
    }
}

// Thêm 1 key : value mới cho 1 Object

myInfor['my-email'] = "tranleminhkhanh5734@gmail.com"

// xóa 1 cặp key value 

delete myInfor.age;

console.log(myInfor)
console.log(myInfor.name)

// Function --> Phương thức / method
// Other --> Thuộc tính / property
console.log(myInfor.getName())