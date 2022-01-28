import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Player,
  Guesses,
  Card,
  Deck,
  GameState,
  Players,
  AlertInterface,
} from "../../types";
import { RootState } from "./store";

interface DealerState {
  gameState: GameState;
  roundOver: boolean;
  currentPlayer: Players;
  currentCard: Card | null;
  deck: Deck | null;
  players: { [index: string]: Player };
  guess: Guesses | null;
  alert: AlertInterface;
}

const initialState = {
  gameState: GameState.NOT_STARTED,
  guess: null,
  roundOver: false,
  currentPlayer: Players.player1,
  currentCard: null,
  deck: null,
  players: {
    player1: {
      name: "Player 1",
      avatar:
        "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      score: 0,
      roundOver: false,
    },
    player2: {
      name: "Player 2",
      avatar:
        "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      score: 0,
      roundOver: false,
    },
  },
  alert: {
    open: false,
    message: "Ops Wrong guess! Next player's turn now",
    type: "error",
  },
} as DealerState;

export const dealerSlice = createSlice({
  name: "dealer",
  initialState,
  reducers: {
    set_deck: (state, { payload }: PayloadAction<string>) => {
      state.deck = { id: payload };
    },
    set_game_state: (state, { payload }: PayloadAction<GameState>) => {
      state.gameState = payload;

      if (payload === GameState.OVER) {
        state.currentPlayer = Players.player1;
      }
    },
    set_current_player: (state, { payload }: PayloadAction<Players>) => {
      state.currentPlayer = payload;
    },
    set_round_over: (state, { payload }: PayloadAction<boolean>) => {
      state.players[state.currentPlayer].roundOver = payload;
    },
    set_current_card: (state, { payload }: PayloadAction<Card>) => {
      state.currentCard = payload;
    },
    increase_score: (state) => {
      state.players[state.currentPlayer].score++;
    },
    set_alert: (state, { payload }: { payload: AlertInterface }) => {
      state.alert = payload;
    },
    reset_game: (state) => {
      state.currentPlayer = Players.player1;
      state.players[Players.player1].score = 0;
      state.players[Players.player1].roundOver = false;
      state.players[Players.player2].score = 0;
      state.players[Players.player1].roundOver = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  set_deck,
  set_game_state,
  set_current_card,
  increase_score,
  set_round_over,
  set_current_player,
  set_alert,
  reset_game,
} = dealerSlice.actions;

// Selectors
export const currentPlayerSelector = ({ dealer }: RootState) => {
  return dealer.players[dealer.currentPlayer];
};

export const winningPlayerSelector = ({ dealer }: RootState) => {
  const firstPlayer = dealer.players[Players.player1];
  const secondPlayer = dealer.players[Players.player2];

  if (firstPlayer.score === secondPlayer.score) {
    return {
      message: `The game is a draw between the 2 players`,
    };
  }

  const winner =
    firstPlayer.score > secondPlayer.score ? firstPlayer : secondPlayer;

  return {
    message: `${winner.name} has won the game`,
  };
};

export default dealerSlice.reducer;
