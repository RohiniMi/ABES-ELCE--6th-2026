import fs from "fs";
const readFileSync = (file)=>{
    try {
        const data = fs.readFileSync(file,"utf-8");
        console.log(data);
    } catch (error) {
        console.log("unable to read file");        
    }
}
readFileSync("./example.txt");



const appendFileSync = (file,data)=>{
    try {
        fs.appendFileSync(file,data);
        console.log("File has been appended successfully...");      
    } catch (error) {
        console.log("Unable to append file");       
    }
}
// appendFileSync("./example.txt","Appended data");

const writeFileSync = (file, data) => {
    try {
        fs.writeFileSync(file, data);
        console.log("File has been created successfully");
    } catch (error) {
       console.log("Unable to write file.")
    }
}
// writeFileSync("./example.txt", "This data has been written through sync function of fs module");