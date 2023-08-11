// async function f() {
//     return 1;
// }

// f().then((result) => {
//     console.log(result);
// })

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout (() => resolve("Done!"), 1000)
    });
    let result = await promise;
    console.log(result);
}
f();