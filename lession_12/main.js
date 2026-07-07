// Lấy element trong DOM
// elements : ID, class, tag, CSS seletor, HTML collection

// lấy element bằng ID/ class : 
var title = document.getElementById("title");
console.log(title);

var headingNodes = document.getElementsByClassName("heading");
console.log(headingNodes)

// lấy theo tag :
var paragraphNodes = document.getElementsByTagName("p");
console.log(paragraphNodes);

// Lấy theo CSS selector : lấy element đầu tiên

var heading = document.querySelector(".heading");
console.log(heading);
// Lấy tất cả element
var headings = document.querySelectorAll(".heading");
console.log(headings);

/**
Cho trước file HTML, các bạn hãy sử dụng các phương thức truy vấn đến các element trong DOM được học ở bài trước để lấy ra các element sau:

productsListElement: thẻ div có class là products-list.
firstProductElement: thẻ div đầu tiên có class là product.
buttonElements: tất cả các thẻ button.
Chú ý: Các bạn hãy viết code ở file main.js nhé.
*/

// Lấy thẻ div có class là products-list
var productsListElement = document.querySelector('.products-list');

// Lấy thẻ div đầu tiên có class là product
var firstProductElement = document.querySelector('.product');

// Lấy tất cả các thẻ button
var buttonElements = document.querySelectorAll('button');
