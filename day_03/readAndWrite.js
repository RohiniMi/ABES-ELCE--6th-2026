import fs from "fs";
const readFileSync = (file)=>{
    try {
        const data = fs.readFileSync(file,"utf-8");
        console.log(data);
    } catch (error) {
        console.log("unable to read file");        
    }
}

const appendFileSync = (file,data)=>{
    try {
        fs.appendFileSync(file,data);
        console.log("File has been appended successfully...");      
    } catch (error) {
        console.log("Unable to append file");       
    }
}

const writeFileSync = (file, data) => {
    try {
        fs.writeFileSync(file, data);
        console.log("File has been created successfully");
    } catch (error) {
        console.log("Unable to write file.")
    }
}
console.log("before read");
readFileSync("./example.txt");
console.log("after read");

console.log("before write");
writeFileSync("./example.txt", "This data has been written through sync function of fs module");
console.log("after write");

console.log("before append");
appendFileSync("./example.txt","Appended data");
console.log("after append");
