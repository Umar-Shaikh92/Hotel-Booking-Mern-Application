import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel } from "../controllers/hotelController.js";
import { updateHotel } from "../controllers/hotelController.js";
import { deleatHotel } from "../controllers/hotelController.js";
import { getHotel } from "../controllers/hotelController.js";
import { getAllHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { countByCity } from "../controllers/hotelController.js";
import { countByType } from "../controllers/hotelController.js";
import { getHotelRooms } from "../controllers/hotelController.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel );

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleatHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;