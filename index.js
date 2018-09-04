window.onload = function(){

    var items = document.getElementsByTagName("li");

    for(let x = 0; x < items.length; x++){
        items[x].onclick = () => console.log(x);
    }

    console.log(`Arrow Function Syntax: () => console.log(x)`);    
}
