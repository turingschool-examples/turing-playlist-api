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
    link: 'https://www.youtube.com/watch?v=6GEI3PpXEAo&t=1771s'
  },
  {
    songName: 'Autumn Leaves',
    artistName: 'Bill Evans Trio',
    link: 'https://www.youtube.com/watch?v=r-Z8KuwI7Gc'
  },
  {
    songName: 'In Your Eyes',
    artistName: 'BADBADNOTGOOD',
    link: 'https://www.youtube.com/watch?v=-PCauQozne0'
  },
]

app.get(`${baseUrl}/playlist`, (req, res) => {
  res.status(200).json(app.locals.playlist);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
