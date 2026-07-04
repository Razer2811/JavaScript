/*
Array Method : 
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
    */

// Mảng dữ liệu mẫu
const products = [
    { 
        id: 1,
         name: 'Điện thoại iPhone',
          price: 20000000,
           quantity: 5 
        },
    { 
        id: 2
        , name: 'Chuột máy tính',
         price: 500000, quantity: 0 
        },
    { 
        id: 3,
         name: 'Bàn phím cơ',
         price: 1500000,
          quantity: 2 
        },
    { 
        id: 4,
         name: 'Tai nghe Bluetooth',
          price: 2500000,
           quantity: 10 
        }
];

products.forEach(function(product) {
    console.log(`Sản phẩm: ${product.name} - Giá: ${product.price}đ`);
});

const isAllExpensive = products.every(function(product) {
    return product.price > 100000;
});
console.log(isAllExpensive);

const hasOutOfStock = products.some(function(product) {
    return product.quantity === 0;
});
console.log(hasOutOfStock); // true (vì Chuột máy tính có số lượng bằng 0)

const expensiveProduct = products.find(function(product) {
    return product.price > 2000000;
});
console.log(expensiveProduct); 
// Kết quả: { id: 1, name: 'Điện thoại iPhone', price: 20000000, quantity: 5 }
// (Tai nghe cũng trên 2 triệu nhưng 'find' chỉ lấy món đầu tiên nó tìm thấy)

const inStockProducts = products.filter(function(product) {
    return product.quantity > 0;
});
console.log(inStockProducts); 
// Kết quả: Trả về mảng mới gồm 3 sản phẩm: iPhone, Bàn phím, Tai nghe (loại bỏ Chuột).

const productNames = products.map(function(product) {
    return product.name;
});
console.log(productNames); 
// Kết quả: ['Điện thoại iPhone', 'Chuột máy tính', 'Bàn phím cơ', 'Tai nghe Bluetooth']

const totalQuantity = products.reduce(function(accumulator, product) {
    return accumulator + product.quantity;
}, 0);

console.log(totalQuantity); // Kết quả: 17 (5 + 0 + 2 + 10)

