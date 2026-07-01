/*
Kiểu số Number trong JS
1. Tạo giá trị Number
    - Các cách tạo
    - Dùng cách nào? Tại sao?
    - Kiểm tra DataType
2. Làm việc với Number
    - To String
    - To Fixed 
 */

var age = 16;
var PI = 3000000000.57634

console.log(PI.toFixed())
// ví dụ bài tập về dữ liệu kiểu số Nan vẫn là kiểu số
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

