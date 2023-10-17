import Artist from "../models/Artist.js";

class ArtistsController {
  static getArtists = (req, res) => {
    Artist.find().then((result) => {
      res.status(200).json(result);
    });
  };

  static createArtist = async (req, res) => {
    const newArtist = new Artist(req.body);
    try {
      await newArtist.save();
      res.status(201).send(newArtist.toJSON());
    } catch (error) {
      res.status(500).send(`${err.message} - Failed in create Artist.`);
    }
  };

  static findById = (req, res) => {
    Artist
      .findById(req.params.id)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(`${err.message} - Failed to find Artist by id.`);
      });
  };

  static updateById = (req, res) => {
    Artist
      .findByIdAndUpdate(req.params.id, req.body)
      .then(async (result) => {
        res.status(200).send(await Artist.findById(req.params.id));
      })
      .catch((err) => {
        res.status(500).send(`${err.message} - Failed to updated Artist by id.`);
      });
  };


  static deleteById = (req, res) => {
    Artist
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.status(200).send('Artist deleted successfully!');
      })
      .catch((err) => {
        res.status(500).send(`${err.message} - Failed to delete Artist by id.`);
      });
  };

}

export default ArtistsController;
