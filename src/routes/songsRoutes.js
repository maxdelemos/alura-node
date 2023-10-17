import express from "express";
import SongsController from "../controllers/songsController.js";

const router = express.Router();

router
  .get("/songs", SongsController.getSongs)
  .post("/songs", SongsController.createSong)
  .get("/songs/:id", SongsController.findById)
  .put("/songs/:id", SongsController.updateById)
  .delete("/songs/:id", SongsController.deleteById);

export default router;
