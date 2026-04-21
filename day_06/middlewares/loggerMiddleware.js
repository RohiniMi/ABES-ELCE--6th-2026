import LoggedUser from "../models/loggedUser.js";
export const loggerMiddleware = async (req, res, next) => {
    try {
        await LoggedUser.create({
            ip: req.ip,
            url: req.url,
            method: req.method,
            header: req.headers["user-agent"]
        })     
        next();
    } catch (error) {
        console.log(error.message);
    }
}