import { readFile } from "./helper.js";
const FILE = "./users.json";

const login = async (userDetails, FILE) => {
    try {
        const users = await readFile(FILE);
        if (users.length === 0) return { message: "User is not existing" };

        const user = users.find((user) => user.email === userDetails.email);
        if (!user) return { message: "User is not Registered..." };

        return (user.password === userDetails.password)
            ? { message: "Login Successful" }
            : { message: "Incorrect Password" };
    } catch (error) {
        return { message: "Login service is not working" }
    }
}
login({ email: "rmccurt0@dailymail.co.uk", password: "cK9?16kqi2`z" }, FILE)
    .then((output) => console.log(output))