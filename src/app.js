import express from 'express';
import db from './config/dbConnect.js';
import songs from './models/Song.js';

db.on('error', console.log.bind(console, 'Error de conexão'));

db.once('open', () => {
    console.log('conexão com o banco feita com sucesso!');
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Node course');
});

app.get('/songs', (req, res) => {
    songs.find().then((result)=> {
        res.status(200).json(result);
    });
});

app.post('/songs', (req, res) => {
    songs.push(req.body);
    res.status(201).send('Song registered with success!');
});

app.put('/songs/:id', (req, res) => {
    const song = findBookById(req.params.id);
    song.titulo = req.body.titulo;
    res.json(songs);
});

app.get('/songs/:id', (req, res) => {
    const song = findBookById(req.params.id);
    res.json(song);
});

app.delete('/songs/:id', (req, res) => {
    songs.splice(songs.findIndex(song => song.id === Number(req.params.id)), 1);
    res.send('Song removed with success!');
});

const findBookById = (id) => {
    const bookIndex = songs.findIndex(song => song.id === Number(id));
    if (bookIndex !== -1) {
        return songs[bookIndex];
    }

    throw 'Song not found!';
};

export default app;
