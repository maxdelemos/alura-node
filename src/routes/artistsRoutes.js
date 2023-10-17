import express from "express";
import ArtistController from "../controllers/artistsController.js";

const router = express.Router();

router
  .get("/artists", ArtistController.getArtists)
  .post("/artists", ArtistController.createArtist)
  .get("/artists/:id", ArtistController.findById)
  .put("/artists/:id", ArtistController.updateById)
  .delete("/artists/:id", ArtistController.deleteById);

export default router;
