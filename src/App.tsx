import React from "react";
import { useQuery, gql } from "@apollo/client";
import LoadingDialog from "./Components/LoadingDialog";
import Instructions from "./Components/Instructions";
import Table from "./Components/Table";
import { useAppSelector, useAppDispatch } from "./Store/hooks";
import { set_deck } from "./Store/dealer.slice";
import { GameState } from "../types";
import Winner from "./Components/Winner";

const NEW_DECK = gql`
  query deck {
    deck {
      id
    }
  }
`;

function App() {
  // New deck
  const { gameState, deck } = useAppSelector((state) => state.dealer);
  const dispatch = useAppDispatch();
  const gameNotStarted = gameState === GameState.NOT_STARTED;

  const { loading, error, data } = useQuery(NEW_DECK);

  if (data && !deck) {
    dispatch(set_deck(data.deck.id));
  }

  if (loading) return <LoadingDialog />;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      {gameState === GameState.NOT_STARTED && <Instructions />}
      {gameState === GameState.STARTED && <Table />}
      {gameState === GameState.OVER && <Winner />}
    </div>
  );
}

export default App;
