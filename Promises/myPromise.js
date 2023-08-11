const myPromise = new Promise((resolve, reject) => {
  const condition = true;

  if (condition) {
    resolve("Success");
  } else {
    reject("Failure");
  }
});

myPromise
.then((value) => {
    console.log(value);//Outputs 'Success'
})
.catch ((error) => {
    console.log(error);//Outputs 'Failure'
});
