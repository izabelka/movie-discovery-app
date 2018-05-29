My solution for a coding challenge.
The assignment was to create a movie discovery web app using [The Movie Database API](https://developers.themoviedb.org/3).

## How to run the app
1. Clone this repository
2. Add the `TMDB_API_KEY` constant to `.env` file. If there is no `.env` file in the main directory, you should create one. The content of file should look like: ```TMDB_API_KEY=${your_tmdb_api_key}```
3. In the cloned repository directory run the command:
`npm install`
(if you don't have npm installed, [get npm](https://www.npmjs.com/get-npm))
4. run servers:
`npm run dev`

## About the app
- This App was created using [Create React App](https://github.com/facebookincubator/create-react-app) and a [Node.js](https://nodejs.org) back-end API with [Express](https://expressjs.com) framework.
- When first loaded, the app displays a list of the popular movies and a search bar.
- When user searches for a movie, a list of movies with matching title appears.
- If user clicks on a movie, a page with movie details is displayed.

## What I could do better
If I had more time I would make some changes to the app, such as:
- Responsive views (currently not optimised for mobile, but it is easy to fix)
- Tests (currently there are no tests)
