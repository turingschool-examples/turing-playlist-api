# Turing Playlist - Music Management API 

## Set Up
1. Clone down this repo
1. `cd` into the repo 
1. Run`npm install` to install dependencies
1. Run `npm start` to run the server locally

## Routes
The server should be running locally at `http://localhost:8080`.

| URL Path | Verb | Data to Send | Sample Sucessful Response | Sample Unsuccessful Response |
|----------|------|--------------|---------------------------|------------------------------|
| `/api/v1/playlist` | `GET` | n/a | Array of song objects, ex: `[ {songName: "Idle Momements", artistName: "Grant Green", link: "https://www.youtube.com/watch?v=aq0m0hbCjFQ", id:1234}]` | n/a |
|`/api/v1/playlist` | `POST` | A song object in the request bodfy, ex: `{songName: "Idle Momements", artistName: "Grant Green", link: "https://www.youtube.com/watch?v=aq0m0hbCjFQ"}` | 4xx level response with a body like: `{errorMessage: 'Cannot POST: missing property <property> on request'}`|
|`/api/v1/playlist/:songId` | `DELETE` | The `id` of the song you want to delete in the URL | Response object with a status code of `204` (**no body**)| `4xx` level resposne with a body like: `{errorMessage: Cannot DELETE: no song with an ID of <songId> found}`| 
