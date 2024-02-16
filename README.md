# Turing Playlist - Music Management API 

## Set Up
1. Clone down this repo.
1. `cd` into the repo.
1. Run`npm install` to install dependencies.
1. Run `npm start` to run the server locally.
2. Navigate to `http://localhost:8080/api/v1/playlist` in your browser and you should see the data from the server. (Hint: As you POST and DELETE, you can refresh this page to see the updates!)
1. In a new tab in your terminal (`command + T`), use `open frontend/index.html` to run the frontend.
2. Navigate to `frontend/main.js` in VS Code and begin working through the challenges.

## Routes
The server should be running locally at `http://localhost:8080`.

| URL Path | Verb | Data to Send | Sample Sucessful Response | Sample Unsuccessful Response |
|----------|------|--------------|---------------------------|------------------------------|
| `/api/v1/playlist` | `GET` | n/a | `200` level rsponse with an array of song objects as the body, ex: `[ {songName: "Idle Momements", artistName: "Grant Green", id:1234}]` | n/a |
|`/api/v1/playlist` | `POST` | A song object in the request body, ex: `{songName: "Idle Momements", artistName: "Grant Green"}`| A `201` level response with the new song object as the body, ex: `{songName: "Idle Momements", artistName: "Grant Green", id:1234}` | `4xx` level response with a body like: `{errorMessage: 'Cannot POST: missing property <property> on request'}`|
|`/api/v1/playlist/:songId` | `DELETE` | The `id` of the song you want to delete in the URL | Response object with a status code of `204` (**no body**)| `4xx` level resposne with a body like: `{errorMessage: Cannot DELETE: no song with an ID of <songId> found}`| 
