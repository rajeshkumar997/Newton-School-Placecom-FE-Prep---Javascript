function printMultiplesOfThree(beginNum, endNum) {
  // write your code here
  for (let i = beginNum; i <= endNum; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
}
