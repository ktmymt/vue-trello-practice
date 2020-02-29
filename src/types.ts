export interface ListI {
  readonly id: number;
  name: string;
  cards: CardI[];
}

export interface CardI {
  readonly id: number;
  text: string;
}
