export enum GameState {
  NOT_STARTED,
  STARTED,
  OVER,
}

export enum Players {
  player1 = "player1",
  player2 = "player2",
}

export enum Guesses {
  HIGH,
  LOW,
}

export interface Player {
  name: string;
  avatar?: string;
  score: number;
  roundOver: boolean;
}

export interface Deck {
  id: string;
}

export interface Card {
  code: string;
  image: string;
  value: string;
}

export interface AlertInterface {
  open: boolean;
  message?: string;
  type?: "success" | "error";
}
