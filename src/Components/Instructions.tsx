import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useAppDispatch } from "../Store/hooks";
import { set_game_state } from "../Store/dealer.slice";
import { GameState } from "../../types";

const Instructions = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <Box sx={{ display: "flex", flexDirection: "column", padding: "30px" }}>
        <Typography variant="h3" gutterBottom component="div">
          Hi-Lo
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Players have to guess whether a certain card is higher or lower than
          one showing on the table. Each player gets 3 tries, after 3 successful
          guesses or one unsuccessful guess the dealer passes to the second
          player.
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          The winner is the one with the highest successful guesses.
        </Typography>
        <Box
          sx={{ alignSelf: "flex-end", mt: 2 }}
          onClick={() => {
            dispatch(set_game_state(GameState.STARTED));
          }}
        >
          <Button variant="contained">New Game</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Instructions;
