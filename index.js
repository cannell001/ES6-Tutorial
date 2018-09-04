window.onload = function(){

    var temp = `hello, my name is Ryu`;
    var temp2 = `hello,
                 my name is Ryu`;

    console.log(temp);
    console.log(temp2);
    console.log("");

    function logNinja(name, age){
        console.log("my name is " + name + " and my age is " + age);
        console.log(`my name is ${name} and my age is ${age}`);
        console.log(`my name is ${name} and my age is ${10 + 14}`);
    }

    logNinja("John", 25);
}
