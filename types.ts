export enum GameState {
  NOT_STARTED,
  STARTED,
  OVER,
}

export enum players {
  player1,
  player2,
}

export enum Guesses {
  HIGH,
  LOW,
}

export interface Player {
  name: string;
  avatar?: string;
  score: number;
  pile: number;
}

export interface Deck {
  id: string;
}

export interface Card {
  code: string;
  image: string;
  value: string;
}
