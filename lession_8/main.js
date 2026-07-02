// Câu lệnh rẽ nhánh If - Else

function run(a) {
    if (a % 15 === 0) {
        return 3;
    }
    if (a % 3 === 0) {
        return 1;
    }
    if (a % 5 === 0) {
        return 2;
    }
}
run(6);   // 1 vì 6 chia hết cho 3
run(10);  // 2 vì 10 chia hết cho 5
run(30);  // 3 vì 30 chia hết cho 15

// Câu lệnh rẽ nhánh Switch

function run(fruits) {
    var result;

    switch(fruits) {
        case "Banana":
            result = "This is a Banana";
            break;
        case "Apple":
            result = "This is an Apple";
            break;
        default:
            result = "No fruits";
    }

    return result;
}

//Toán tử 3 ngôi 

var course = {
    name : JavaScript,
    coin : 0
}

if (course.coin > 0){
    console.log(`${course.coin} Coins`)
}else {
    console.log('Miễn phí')
}