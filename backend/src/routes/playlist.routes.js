import express from "express";
import { generatePlaylist } from "../controllers/playlist.controller.js";

const router = express.Router();

// playlist routes
router.get("/", generatePlaylist);

export default router;