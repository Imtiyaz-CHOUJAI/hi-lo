import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import {
  set_game_state,
  winningPlayerSelector,
  reset_game,
} from "../Store/dealer.slice";
import { GameState } from "../../types";

const Winner = () => {
  const dispatch = useAppDispatch();
  const { message } = useAppSelector(winningPlayerSelector);

  return (
    <div className="container">
      <Box sx={{ display: "flex", flexDirection: "column", padding: "30px" }}>
        <Typography variant="h3" gutterBottom component="div">
          Hi-Lo
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          {message}
        </Typography>
        <Box
          sx={{ alignSelf: "flex-end", mt: 2 }}
          onClick={() => {
            dispatch(set_game_state(GameState.STARTED));
            dispatch(reset_game());
          }}
        >
          <Button variant="contained">New Game</Button>
        </Box>
      </Box>
    </div>
  );
};

export default Winner;
