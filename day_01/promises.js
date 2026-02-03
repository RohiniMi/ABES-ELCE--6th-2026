const myPromise = new Promise((resolve, reject) => {
    let age = 18;
    if (age > 18) {
        resolve("eligible for vote")
    } else {
        reject("Not eligible")
    }
})
const f1 = async () => {
    try {
        const msg = await myPromise;
        console.log(msg);
    } catch (error) {
        console.log("some error occured.");
    }
}
f1();
// myPromise.then((msg) => console.log(msg))
//     .catch((error) => console.log(error))
// console.log(myPromise);


