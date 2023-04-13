function takeMultipleNumbersAndAdd (...nums){
    // write your code here

    // return the output using return keyword
    // do not console.log it

    return nums.reduce((acc,num) => acc+num, 0);
}
