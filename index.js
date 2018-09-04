window.onload = function(){

    var x = 10;

    if(x > 5){
        let x = 5;
        console.log(`inside block: ${x}`);
    }

    console.log(`outside block: ${x}`);
}
