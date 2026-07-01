/*
Mảng trong JS
1. Tạo mảng
    - Cách tạo
    - Sử dụng cách nào?
    - Kiểm tra data type?
2. Truy xuất mảng
    - Độ dài mảng
    - Lấy phần tử theo index
*/

var languages = [
    'JavaScript',
    'PHP',
    'Ruby',
    'Dart'

]

console.log(languages) 
// cách kiểm tra thuộc dữ liệu array

//Làm việc với mảng

// 1. To String : chuyển 1 array thành chuỗi

console.log(languages.toString())

// 2. Join : chuyển 1 array thành chuỗi

console.log(languages.join(', '))

// 3. Pop: Xóa phần tử cuối mảng và trả về phần 
// tử đã xóa

console.log(languages.pop())

console.log(languages)

// 4. Push : Thêm 1 hoặc nhiểu phần tử ở cuối mảng 
// và trả về số phần tử có trong mảng

console.log(languages.push('C++'))

// 5. Shift : Xóa 1 phần tử ở đầu mảng và trả 
// về phần tử đã xóa

console.log(languages.shift())

// 6. Unshift : thêm 1 hoặc nhiều phần tử vào đầu mảng

console.log(languages.unshift('Java'))

// 7. Splicing : xóa, cắt, chèn phẩn tử trong mảng

languages.splice(1, 0, 'Golang') 
// vị trí đầu tiên, số phần tử muốn xóa, phần tử muốn truyền vào
console.log(languages)

// 8. Concat : Nối được array

var languages2 = [
    'Golang',
    'C++'
]

console.log(languages.concat(languages2))

// 9. Slicing : Cắt 1 vài phần tử của mảng
console.log(languages.slice(1))