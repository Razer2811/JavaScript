// var array = ['a', 'b', 'c','a', 'b', 'c']
// console.log(new Set(array));


// ví dụ countdown

function counDown(num){
    if(num > 0){
        console.log(num)
        return counDown(num - 1)
    }
    return num;
}

counDown(3)

//Ví dụ vòng lặp đệ quy

function loop(start, end, cb){
    if (start <= end ){
        cb(start);
        return loop(start + 1, end, cb);
    }
}
var array = ['JS', 'C++', "PHP"]

loop(0, array.length - 1, function(index){
    console.log("index: ", index);
})

// Tính giai thừa

function giaiThua(number){
    if (number > 0){
        return number * giaiThua(number - 1);
    }
    return 1;
}

console.log(giaiThua(3));