// preventDefault
// stopPropagation

var aElement = document.querySelectorAll('a');

for(var i=0;i<aElement.length;i++){
    aElement[i].onclick =function(e){
        if(!aElement.href.startWith("https://f8.com.vn")){
            e.preventDefault();
        }else{
        console.log(e.target.href);
        }
    }
}