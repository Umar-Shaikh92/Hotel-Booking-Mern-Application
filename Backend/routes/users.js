import express from "express";
import {
//   createUser,
  updateUser,
  deleatUser,
  getUser,
  getAllUser
} from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();


// router.get("/checkauthentication", verifyToken, (req, res, next) => {
    // res.send("Logged in successfully!");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    // res.send("You're Logged in & you can deleat your account!");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    // res.send("Welcome Admin!");
    // });
    


// CREATE
// router.post("/", createUser );

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleatUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getAllUser);


export default router;