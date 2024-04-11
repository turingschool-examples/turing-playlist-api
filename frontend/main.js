// Query Selectors 

const titleInput = document.querySelector('#title-input')
const artistInput = document.querySelector('#artist-input')
const addSongButton = document.querySelector('#add-button')
const playlistContainer = document.querySelector('#playlist')

// Functions

function displaySongs(songs) {
  songs.forEach(song => {
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

// 1. Finish fetchSongs to get all songs from the endpoint and invoke function displaySongs(songs) {

const fetchSongs = () => {
  // fetch();
}

fetchSongs();



// 2. Finish createSong to add a new song to the dataset when a user fills out the form and addSong is invoked

const createSong = (event) => {
  event.preventDefault();

  // fetch();
}

addSongButton.addEventListener('click', function(event) {
  createSong(event);
});



// Extensions 

// 3. Add error handling so that if the form is incomplete, the POST is not sent and the user gets a helpful error message

// 4. Add a delete button to each card and use the endpoint to remove the song from the playlist