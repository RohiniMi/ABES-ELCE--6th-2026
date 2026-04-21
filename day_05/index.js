import http from 'http';
import { login } from "../day_04/login.js";
const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return;
    if (req.url === "/login" && req.method === "POST") {
        let body = "";
        req.on("data", (dataChunk) => {
            body += dataChunk.toString();
        })
        req.on("end", async () => {
            const userDetails = JSON.parse(body);
            const response = await login(userDetails, "../day_04/users.json");
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(JSON.stringify(response.message));
        })
    } else {
        res.end("Path is not matched");
    }
})
server.listen(8800,
    () => console.log("server is running at http://localhost:8800"))