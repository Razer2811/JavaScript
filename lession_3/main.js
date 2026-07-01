/*
Tạo hàm đầu tiên
*/
function showDialog(){
    // alert("Xin chao cac ban nha")
}

showDialog()

/*
Tham số trong hàm
*/
function writeLog(message, message2){
    console.log(message);
    console.log(message2);

}

writeLog("Text message", "Text message 2");

function writeLog1(){
    var myString = "";
    for (var param of arguments){
        myString += `${param}-`
    }
    console.log(myString)
}

writeLog1("Text message", "Text message 2");

/*
Hàm có return
*/
function cong(a,b){
    return a+b;
}

console.log(cong(10,19));