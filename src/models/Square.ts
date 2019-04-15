export default class Square {
  state: SquareState

  constructor(state: SquareState) {
    this.state = state
  }

  updateState(state: SquareState) {
    this.state = state
  }
}

export enum SquareState {
  empty = 0,
  white = 1,
  black = 2,
}
