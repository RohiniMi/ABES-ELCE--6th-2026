import User from "../models/user.js";
export const getData = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ data: users });
    } catch (error) {
        next(error)
    }
}
export const createUser = async (req, res, next) => {
    try {
        await User.create(req.body);
        res.status(201).json({ message: "User has been created Successfully" });
    } catch (error) {
        next(error)
    }
}
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.updateOne({ email: req.params.email }
            , { $set: req.body });
        updatedUser.modifiedCount !== 0 ?
            res.status(200).json({ message: "User has been updtaed successfully" })
            : res.status(404).json({ message: "Not update" })
    } catch (error) {
        next(error)
    }
}
export const deleteUser = async (req, res, next) => {
    try {
        const deletedUser = await User.deleteOne({ email: req.params.email });
        deletedUser.deletedCount !== 0
            ? res.status(200).json({ message: "User has been deleted successfully" })
            : res.status(404).json({ message: "NOT FOUND" });
    } catch (error) {
        next(error)
    }
}