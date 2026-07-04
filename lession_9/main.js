// For Loop

for (var i =i; i <= 1000; i++){
    console.log(i);
}
// Tạo mảng danh sách ngẫu nhiên
// Làm bài
function getRandNumbers(min, max, length) {
    var arr = [];

    for (var i = 0; i < length; i++) {
        var randomNumber = Math.random() * (max - min) + min;
        arr.push(randomNumber);
    }

    return arr;
}
// Tính tổng các phần tử của Mảng
function getTotal(arr) {
    var total = 0;
    for(var i = 0; i < arr.length ; i++){
        total += arr[i];
    }
    return total;
}
// Tính tổng giá trị đơn hàng
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders){
    var total =0;
    var length = orders.length;
    for(var i = 0; i < length; i++){
        total += orders[i].price;
    };
    return total;
}


// Expected results:
getTotal(orders) // Output: 8700000
 
// Vòng lặp For-in
function run(object) {
    var result = [];

    for (var key in object) {
        result.push("Thuộc tính " + key + " có giá trị " + object[key]);
    }

    return result;
}
// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

// Vòng lặp While
var myArr = [
    'JavaScript',
    'Php',
    'Ruby'
]
 var i =0;
 while(i < myArr.length){
    console.log(myArr[i]);
    i++;
 }

 // Vòng lặp do...While

var i = 0;
var isSuccess  = false; 

 do{
    i++;

    console.log('Nap the lan ' + i );
    // Thanh cong
    if(true){
        isSuccess = true;
    }


 }while(!isSuccess && i < 3);