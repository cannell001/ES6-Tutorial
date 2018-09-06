window.onload = function(){

    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    // filter

    // Get 21 and older

     const canDrink = ages.filter(function(age) {
       if(age >= 21) {
         return true;
       }
     })

    console.log(canDrink);
}
