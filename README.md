# Screenshot

![Screenshot!](/public/screenshot.png)

# Backend

The backend was created using [Express](https://expressjs.com/), [GraphQl](https://graphql.org/) and [Apollo Server](https://www.apollographql.com/docs/apollo-server/).

How the game works:

- It starts with a deck of cards and drawing the first card from that deck and adding it to a pile.
  The user then has to guess whether the next card's number will be a higher number or lower number than the latest card.
  If they are correct, we add that card to the pile.
- If they are incorrect, the user gets a point for every card that was in the pile at that time (for example, if 10 cards were in the pile, they would get 10 points). And the pile is cleared.
  After users have 3 successful guesses in a row, they can "pass" to the other player (you only need to support 2 players, and only one can guess at a time). By pass we mean that if you start as Player 1, you can change to Player 2. Player 2 can pass back to Player 1 once they get 3 successful guesses in a row.
- The player with the least number of points at the end wins.

# Frontend

> :warning: **Frontend WIP**: The frontend is still incomplete, a few bugs with guessing on the 3rd try.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) but changed to [Vite](https://vitejs.dev) as it's faster and easier to use, the app also uses [Redux](https://redux.js.org/), [Apollo Client](https://www.apollographql.com/docs/react/) and [Mui](https://mui.com/) react ui library

# How to run the app

In the project directory, after installing the dependencies you can run:

### `npm start`

Runs the app in the development mode using [Concurrently](https://www.npmjs.com/package/concurrently) to run both the client and server.

Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view the graphql server in the browser.
