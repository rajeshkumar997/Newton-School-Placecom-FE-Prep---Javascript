function handleCallback(callback) {
  // write your code here
  try {
    callback(); // `callback` may or may not be a function
    // if `callback` is a function, it will not throw an error
    // if `callback` is not a function, `callback()` would throw an error which should be caught in catch block
  }
  catch (error) {
    console.log("error thrown");
  }
}
