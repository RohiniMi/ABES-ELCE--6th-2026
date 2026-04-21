import { readFile, writeFile } from "./helper.js";
const register = async (userDetails, FILE) => {
    const { name, email, password, gender } = userDetails;
    if (!name || !email || !password || !gender)
        return { message: "All fields are required to register." };
    const users = await readFile(FILE);
    
    const existingUser = users.find((user)=>user.email.toLowerCase()===email.toLowerCase());
    if(existingUser) return {message:"User is already existing. Please try to login..."}
    let updatedUsers = [];

    users.length === 0
        ? updatedUsers = [userDetails]
        : updatedUsers = [...users, userDetails]
    const response = await writeFile(updatedUsers, FILE);
    return response;
}
register({ name: "xyz", email: "xyz@gmail.com", password: "12345", gender:"Female"}, "./users.json")
    .then((res) => console.log(res))