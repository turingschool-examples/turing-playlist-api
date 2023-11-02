// Query Selectors 

const titleInput = document.querySelector('#title-input')
const artistInput = document.querySelector('#artist-input')
const addSongButton = document.querySelector('#add-button')
const playlistContainer = document.querySelector('#playlist')

let songList = [];

// Functions

function displaySongs() {
  playlistContainer.innerHTML = '';

  songList.forEach(song => {
   addSong(song);
  })
}

function addSong(song) {
  playlistContainer.innerHTML += `
    <section class="card">
      <h2>${song.songName}</h2>
      <p>${song.artistName}<p>
    </section>
    `
}

// Challenges - Network Requests

// 1. Finish fetchSongs to get all songs from the endpoint and invoke function displaySongs(songs)

const fetchSongs = () => {
  fetch('http://localhost:8080/api/v1/playlist')
  .then(response => response.json())
  .then(songs => {
    songList = songs;
    displaySongs()
  })
  .catch(error => {
    playlistContainer.innerHTML = '<p>Oops! Something went wrong!</p>';
    console.log(error)
  })
}

fetchSongs();



// 2. Finish createSong to add a new song to the dataset when a user fills out the form and addSong is invoked
  // 1 -- post to API 
  // 2 -- show to user
  // 3 -- allow the user to send their own song (instead of hard coding Grant Green)

const createSong = (event) => {
  event.preventDefault();

  fetch('http://localhost:8080/api/v1/playlist', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({songName: titleInput.value, artistName: artistInput.value})
  })
  .then(response => response.json())
  .then(newSong => {
    fetchSongs()
  })

}

addSongButton.addEventListener('click', function(event) {
  createSong(event);
});



// Extensions 

// 3. Add a delete button to each card and use the endpoint to remove the song from the playlist

// 4. Add error handling so that if the form is incomplete, the POST is not sent and the user gets a helpful error message



// NOTES:

// JSON.stringify -> turns JS into JSON 
// .json() --> unJSONS into JS

// A POST/DELETE/GET does NOT automatically update local or global variables 

// every time you fetch:
// update the API
// update YOUR data model (global variables)
// show the user the changes