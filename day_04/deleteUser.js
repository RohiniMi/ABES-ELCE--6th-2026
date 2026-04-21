import { readFile, writeFile } from "./helper.js";
const deleteUser = async (userDetails, FILE) => {
    const { email, password } = userDetails;
    if (!email || !password)
        return { message: "All fields are required to delete the user", status: 402 };
    const users = await readFile(FILE);
    if (users.length === 0) return { message: "User is not existing" };

    const existingUser = users.find((user) => user.email.toLowerCase() === email.toLowerCase());
    if (!existingUser) return { message: "User is not existing." };

    if (existingUser.password !== password)
        return { message: "Incorrect password. we cant delete the user" };

    const updatedUsers = users.filter((user) => user.email.toLowerCase() !== email.toLowerCase());
    const response = await writeFile(updatedUsers, FILE);
    return response;
}
deleteUser({ email: "xyz@gmail.com", password: "12345" }, "./users.json")
    .then((res) => console.log(res))