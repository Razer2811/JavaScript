// var json = '["JavaScript", "PHP"]';
// var json = '{"name" : "Minh Khanh", "age" : "21"}';

// var json = '1';
// console.log(JSON.parse(json))
// console.log(JSON.stringify(json))

// // callback hell 
// setTimeout(function(){
//     console.log(1);
//     setTimeout(function(){
//         console.log(1);
//     }, 1000);
//         setTimeout(function(){
//             console.log(1);
//         }, 1000);
// }, 1000);

// promise
var promise = new Promise(
    // excutor 
    function(resolve, reject){
        //logic
        //suscces : resolve()
        //fail : reject()
        resolve();
    }
)
promise
    .then(function(){
        // được gọi khi trong promise resolve() được nhận
        console.log("Success")
    })
    .catch(function(){
        // được gọi khi trong promise reject() được nhận
        console.log("Failue")
    })
    .finally(function(){
        console.log("Done")
        // được gọi khi trong promise 1 trong 2 resolve() và reject() được được gọi
    })


// Promise(chain)

