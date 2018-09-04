window.onload = function(){

    const pi = 3.142;

    function calcArea(radius){
        console.log("The area is: " + pi * radius * radius);
        console.log("Using Template Literal Syntax -> ")
        console.log(`The area is ${pi * radius * radius}`);
    }

    calcArea(5);
}
