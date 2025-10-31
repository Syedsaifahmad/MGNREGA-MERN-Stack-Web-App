import express from "express";
import { fetchAndStoreData, getDistrictData } from "../controllers/mgnregaController.js";

const router = express.Router();

router.get("/data/:district", getDistrictData);
router.get("/:district", fetchAndStoreData);


export default router;
