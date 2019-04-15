import Square, {SquareState} from './Square'

export default class Board {
  squares: Square[]

  constructor() {
    this.squares = this.initializeBoard()
    this.putBlackStone(27)
    this.putBlackStone(36)
    this.putWhiteStone(28)
    this.putWhiteStone(35)
  }

  initializeBoard(): Square[] {
    const squares: Square[] = [];
    for (let i = 0; i < 64; i++) {
      squares.push(new Square(SquareState.empty))
    }
    return squares
  }

  putBlackStone(place: number) {
    this.squares[place].updateState(SquareState.black)
  }

  putWhiteStone(place: number) {
    this.squares[place].updateState(SquareState.white)
  }
}
