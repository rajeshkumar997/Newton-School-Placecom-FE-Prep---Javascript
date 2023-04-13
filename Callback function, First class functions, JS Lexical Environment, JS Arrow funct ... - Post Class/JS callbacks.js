function callThisFnBack(num, callback) {
        // return the output using return keyword
    // do not console.log it

    const res = callback(num);
    return res;
}
