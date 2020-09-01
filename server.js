const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8080;
const baseUrl = '/api/v1'

const app = express();
app.use(cors());
app.use(express.json());

app.locals.playlist = [
  {
    songName: 'Swear',
    artistName: 'Casiopea',
    link: 'https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s',
    id: 1
  },
  {
    songName: 'Autumn Leaves',
    artistName: 'Bill Evans Trio',
    link: 'https://www.youtube.com/watch?v=r-Z8KuwI7Gc',
    id: 2
  },
  {
    songName: 'Fair Weather',
    artistName: 'Art Farmer',
    link: 'https://www.youtube.com/watch?v=8-jfsUusSDQ',
    id: 3
  },
  {
    songName: 'Django',
    artistName: 'The Modern Jazz Quartet',
    link: 'https://www.youtube.com/watch?v=wXnkD7_5vqM',
    id: 4
  },
]

app.get(`${baseUrl}/playlist`, (req, res) => {
  res.status(200).json(app.locals.playlist);
});

app.post(`${baseUrl}/playlist`, (req, res) => {
  const { songName, artistName, link } = req.body;
  for (let prop of [songName, artistName, link]) {
    if (!prop) {
      return res.status(422).json({errorMesage: `Cannot POST: missing property ${prop} on request`});
    }
  }
  const newSong = { songName, artistName, link, id: Date.now() };
  app.locals.playlist.push(newSong);
  res.status(201).json(newSong);
});

app.delete(`${baseUrl}/playlist/:songId`, (req, res) => {
  const {songId} = req.params;
  if (!songId) {
    return res.status(422).json({errorMessage: 'No song id included in request'});
  };
  const shortenedPlaylist = app.locals.playlist.filter( song => song.id !== +songId );
  if ( shortenedPlaylist.length === app.locals.playlist.length ) {
    return res.status(404).json({errorMessage: `Cannot DELETE: no song with an id of ${songId} found`});
  }
  
  app.locals.playlist = shortenedPlaylist;
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
