//Callbacks, Promises, Thenables, and Async/Await
//Promises 3 states: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("Yes! resolved the promise!");
  } else {
    reject("No! rejected the promise.");
  }
});
//the console.log just gives the fulfillment of the promise
console.log(myPromise);

//you must use Thenables to extract the value of the promise
myPromise.then((value) => {
 return value + 1;
})
.then((newValue=> {
    console.log(newValue);
}))
.catch(err => {
    console.error(err);
})