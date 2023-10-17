import express from "express";
import songs from "./songsRoutes.js";
import artist from "./artistsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Node course");
  });

  app.use(express.json(), songs, artist);
};

export default routes;
