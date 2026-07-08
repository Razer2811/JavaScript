// DOM events
//1. attributes events
//2. assign event 
/*
 onclick
 */
// var h1Element = document.querySelectorAll('h1');

// for(var i = 0; i < h1Element.length; ++i){
//     h1Element[i].onclick = function(e){
//         console.log(e.target);
//     }
// }

// DOM events hay dùng trong thực tế
//1. Input/Output
//2. Key up/ down

var inputElement = document.querySelector('input[type="text"]');

inputElement.oninput = function(e){
    console.log(e.target.value);
}

var inputElement1 = document.querySelector('input[type="checkbox"]');

inputElement1.onchange = function(e){
    console.log(e.target.checked);
}

var inputElement = document.querySelector('select');

inputElement.onchange = function(e){
    console.log(e.target.value);
}