// Callback là một hàm được truyền vào một hàm khác dưới dạng đối số, sau đó được gọi lại bên trong hàm đó.
function sayHello(name) {
    console.log('Xin chào ' + name);
}

function run(callback) {
    callback('Khánh');
}

run(sayHello);

function calculate(a, b, callback) {
    return callback(a, b);
}

function sum(a, b) {
    return a + b;
}

console.log(calculate(2, 3, sum)); // 5

/* CallBack thường  có các phương thức xử lý sau :
        map()
        forEach()
        filter()
        some()
        every()
        reduce()
        find()
*/
// Empty elements of array : mảng bị trống phần tử 
var arr = [1, , 3];
console.log(arr.length); // 3
console.log(arr[1]); // undefined là không có phần tử trong mảng trên

// Map()
var numbers = [1, 2, 3];

var result = numbers.myMap(function(number) {
    return number * 2;
});

console.log(result); // [2, 4, 6]

// forEach() : forEach() dùng để duyệt mảng, nhưng không trả về mảng mới.   

var courses = ['HTML', 'CSS', 'JS'];

courses.myForEach(function(course, index) {
    console.log(index, course);
}); // kết quả : 0 HTML
    //           1 CSS
    //           2 JS    

// filter() : Callback của filter phải trả về điều kiện true hoặc false.

var numbers = [1, 2, 3, 4];

var result = numbers.filter(function(number) {
    return number > 2;
});

console.log(result); // [3, 4]

// some() : some() dùng để kiểm tra có ít nhất một phần tử thỏa điều kiện hay không.

var numbers = [1, 2, 3, 4];

var result = numbers.some(function(number) {
    return number > 3;
});

console.log(result); // true

//every() : every() dùng để kiểm tra tất cả phần tử có thỏa điều kiện không.

var numbers = [2, 4, 6];

var result = numbers.every(function(number) {
    return number % 2 === 0;
});

console.log(result); // true

