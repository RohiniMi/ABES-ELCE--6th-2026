import express from "express";
import { createUser, deleteUser, getData, updateUser } from "../controllers/crud.js";
const router = express.Router();
router.use((req,res,next)=>{
    console.log("Router-level middleware triggered");
    next();    
})
router.get("/users", getData)
router.post("/users", createUser)
router.put("/users/:email", updateUser)
router.delete("/users/:email", deleteUser)
export default router;