import React from "react";
import Score from "./Score";
import Deck from "./Deck";
import Player from "./Player";
import Guesses from "./Guesses";
import { Slide, Box } from "@mui/material";
import { useAppSelector } from "../Store/hooks";
import { GameState } from "../../types";
import AlertDialog from "./AlertDialog";

const Table = () => {
  const gameStarted =
    useAppSelector((state) => state.dealer.gameState) === GameState.STARTED;

  return (
    <>
      <div className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Score />
          <Guesses />
        </Box>
        <Deck />
      </div>
      <Slide direction="left" in={gameStarted} mountOnEnter unmountOnExit>
        <Box sx={{ zIndex: -1 }}>
          <Player />
        </Box>
      </Slide>

      <AlertDialog />
    </>
  );
};

export default Table;
