import express from "express";
import { createRoom, updateRoom, deleatRoom, getRoom, getAllRoom, updateRoomAvailability } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

// DELETE
// router.delete("/:id", verifyAdmin, deleatRoom);

// gpt
router.delete("/:id/:hotelid", verifyAdmin, deleatRoom);


// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getAllRoom);


export default router;