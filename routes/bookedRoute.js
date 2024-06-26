const express=require("express");
const { getBookeDTicket, BookeDTicket, cancelBookeDTicket, getABookeDTicket } = require("../controllers/bookedControler");
const bookedRouter=express.Router();
const authenticate=require("../middlewares/authMiddleware")


bookedRouter.get("/",authenticate,getBookeDTicket);

bookedRouter.get("/:id",authenticate,getABookeDTicket);

bookedRouter.post("/bookTicket",authenticate,BookeDTicket);

bookedRouter.delete("/:id",authenticate,cancelBookeDTicket);
module.exports=bookedRouter