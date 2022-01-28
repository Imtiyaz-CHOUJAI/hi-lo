import React, { useEffect, useState } from "react";
import { Box, Fab } from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import Image from "./Image";
import { useLazyQuery, gql } from "@apollo/client";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import {
  currentPlayerSelector,
  increase_score,
  set_alert,
  set_current_card,
  set_current_player,
  set_game_state,
  set_round_over,
} from "../Store/dealer.slice";
import { GameState, Guesses, Players } from "../../types";

const DRAW_CARD = gql`
  query draw($input: DrawInput!) {
    draw(input: $input) {
      code
      image
      value
    }
  }
`;

export default function Deck() {
  const { deck, currentCard, currentPlayer } = useAppSelector(
    (state) => state.dealer
  );
  const { score } = useAppSelector(currentPlayerSelector);
  const dispatch = useAppDispatch();
  const [drawCardQuery] = useLazyQuery(DRAW_CARD);

  // Get the first card
  useEffect(() => {
    drawCard();
  }, [currentPlayer]);

  const drawCard = async () => {
    if (!deck) return;

    const { data } = await drawCardQuery({
      variables: { input: { id: deck.id } },
    });

    if (data) {
      dispatch(set_current_card({ ...data.draw }));
      return data.draw.value;
    }
  };

  const handleGuess = async (guess: Guesses) => {
    if (!currentCard) return;

    // Store the current card value
    const previousValue = currentCard.value;

    // Draw a new card
    drawCard().then((currentValue) => {
      if (previousValue === currentValue) return;

      const correctGuess =
        guess === Guesses.HIGH
          ? previousValue < currentValue
          : previousValue > currentValue;

      if (correctGuess && score < 3) {
        dispatch(
          set_alert({
            open: true,
            message: "Correct! next guess",
            type: "success",
          })
        );
        dispatch(increase_score());
        return;
      }

      // Set current player's round to over
      dispatch(set_round_over(true));

      dispatch(
        set_alert({
          open: true,
          message: "Ops Wrong guess! Next player's turn now",
          type: "error",
        })
      );

      // If the second player made a wrong guess end game
      if (currentPlayer === Players.player2) {
        dispatch(set_game_state(GameState.OVER));
        return;
      }

      // Pass to next player
      dispatch(set_current_player(Players.player2));
    });
  };

  return (
    <Box sx={{ margin: "auto", display: "flex", alignItems: "center" }}>
      <Fab
        color="primary"
        aria-label="high"
        variant="extended"
        onClick={() => handleGuess(Guesses.HIGH)}
      >
        <ArrowUpwardOutlinedIcon />
        High
      </Fab>
      <Box sx={{ padding: "0 20px" }}>
        {currentCard && (
          <Image src={currentCard.image} width={226} height={314} />
        )}
      </Box>
      <Fab
        color="primary"
        aria-label="low"
        variant="extended"
        onClick={() => handleGuess(Guesses.LOW)}
      >
        <ArrowDownwardOutlinedIcon />
        Low
      </Fab>
    </Box>
  );
}
