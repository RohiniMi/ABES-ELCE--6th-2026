export const pathHandler = (req,res)=>{
    res.status(404).json({messsage:"Page not found"});
}