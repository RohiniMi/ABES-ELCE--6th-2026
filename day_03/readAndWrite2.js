import { log } from "console";
import fs from "fs/promises";
const readFile = async(file)=>{
    try {
       const data = await fs.readFile(file,"utf-8");
       console.log(data);       
    } catch (error) {
       console.log("unable to read");        
    }
}

const appendFile = async(file,data)=>{
    try {
        await fs.appendFile(file,data);
        console.log("File has been appended successfully");        
    } catch (error) {
        console.log("Unable to append file");        
    }
}

const writeFile = async(file,data)=>{
    try {
        await fs.writeFile(file,data);
        console.log("File has been written successfully");        
    } catch (error) {
        console.log("Unable to write file");        
    }
}

console.log("before read");
readFile("./example2.txt");
console.log("after read");

console.log("before write");
writeFile("./example2.txt",`This data has been written via "fs.writeFile()"`);
console.log("after rwrite");

console.log("before append");
appendFile("./example2.txt",` appended data`);
console.log("after append");
