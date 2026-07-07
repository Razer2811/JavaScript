// Map() trong mảng

const listSports = [
    { name: 'Bóng đá', like: 9 },
    { name: 'Bóng rổ', like: 4 },
    { name: 'Cầu lông', like: 8 },
    { name: 'Bơi lội', like: 5 }
];


function sportInsert(sport){
    return {
        name : `Môn ${sport.name}`,
        like : sport.like
    };
}
var newSport = listSports.map(sportInsert);

console.log(newSport);

// Reduce() trong Mảng

var totalLike = listSports.reduce(function likeHandler(accumulator, currentValue) {
    return accumulator + currentValue.like;
}, 0); // initial value : giá trị khởi đầu là không bắt buột

console.log(totalLike);


// Ví dụ Array reduce() method
// Flat - làm phẳng mảng từ mảng xâu : deptArray
var deptFlat = [1,2,[3,4],5,6,[7,8,9]]

var flatArray = deptFlat.reduce(function(flatOutput, deptindex){
    return flatOutput.concat(deptindex);
}, []);

console.log(flatArray);

// Bài tập về reduce()


 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(arr){
    return arr.reduce(function(obj, item){
        obj[item[0]] = item[1]
        return obj;
    }, {})
}

console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }
