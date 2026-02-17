import fs from "fs/promises";
const readFile = async(file)=>{
    try {
       const data = await fs.readFile(file,"utf-8");
       console.log(data);       
    } catch (error) {
       console.log("unable to read");        
    }
}
readFile("./example2.txt");



const appendFile = async(file,data)=>{
    try {
       await fs.appendFile(file,data);
        console.log("File has been appended successfully");        
    } catch (error) {
        console.log("Unable to append file");        
    }
}
// appendFile("./example2.txt",` appended data`);


const writeFile = async(file,data)=>{
    try {
       await fs.writeFile(file,data);
        console.log("File has been written successfully");        
    } catch (error) {
        console.log("Unable to write file");        
    }
}
// writeFile("./example2.txt",`This data has been written via "fs.writeFile()"`);