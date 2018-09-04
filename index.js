window.onload = function(){

    var nums1 = [1,2,3];
    var nums2 = [...nums1,3,4,5];

    console.log(nums2);
    console.log("");

    var nums = [3,5,7];

    function addNums(a,b,c){
        console.log(a+b+c)
    }

    addNums(nums);
    addNums(...nums);

    console.log("");

    addNums = function(a,b,c){
        console.log(a+b+c)
    }

    addNums(...nums);

    console.log("");

    addNums = (a,b,c) => console.log(a+b+c);

    addNums(...nums);

}
