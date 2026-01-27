const myPromise = new Promise((resolve, reject) => {
    let age = 5;
    try {
        if (age > 18) {
            resolve("eligible for vote")
        } else {
            reject("Not eligible")
        }
    } catch (error) {
        console.log("not running");

    }
})
// console.log(myPromise);

myPromise.then((msg) => console.log(msg))
    .then(() => console.log("yes successfully handled"))
    .catch((error) => console.log(error))
    .finally(()=>console.log("final")
    )
