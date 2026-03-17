import { readFile, writeFile } from "./helper.js"
const FILE = "./users.json"
const changePassword = async (userDetails, FILE) => {
    const users = await readFile(FILE);
    if (users.length === 0)
        return { message: "User is not existing. PLease register" };

    const user = users.find((user) => user.email === userDetails.email);
    if (!user) return { message: "User is not existing. PLease register" };

    const updatedData = users.map((user) =>
        user.email === userDetails.email ? { ...user, ...userDetails } : user);

    const response = await writeFile(updatedData, FILE);
    return response;

}
changePassword({ email: "rmccurt0@dailymail.co.uk", password: "12345678" }, FILE)
    .then((res) => console.log(res));