import song from "../models/Song.js";

class SongsController {
  static getSongs = (req, res) => {
    let filter = {};
    if (req.query.name) {
      filter = { name: req.query.name };
    }
    song
      .find(filter)
      .populate("artist")
      .exec()
      .then((result) => {
        res.status(200).json(result);
      });
  };

  static createSong = async (req, res) => {
    const newSong = new song(req.body);
    try {
      await newSong.save();
      res.status(201).send(newSong.toJSON());
    } catch (error) {
      res.status(500).send(`${err.message} - Failed in create song.`);
    }
  };

  static findById = (req, res) => {
    song
      .findById(req.params.id)
      .populate("artist", "name")
      .exec()
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(`${err.message} - Failed to find song by id.`);
      });
  };

  static updateById = (req, res) => {
    song
      .findByIdAndUpdate(req.params.id, req.body)
      .then(async (result) => {
        res.status(200).send(await song.findById(req.params.id));
      })
      .catch((err) => {
        res.status(500).send(`${err.message} - Failed to updated song by id.`);
      });
  };

  static deleteById = (req, res) => {
    song
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.status(200).send("Song deleted successfully!");
      })
      .catch((err) => {
        res.status(500).send(`${err.message} - Failed to delete song by id.`);
      });
  };
}

export default SongsController;
