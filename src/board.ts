import {Square} from "./square"
import {ColorEnum} from "./color"
import {Matrix} from "./matrix"
import {Piece} from "./piece"
import {Position} from "./position"

export class Board {

    public readonly squares: Matrix<Square>
    private readonly ROWS = 10
    private readonly COLS = 10

    constructor() {
        this.squares = this.initializeSquares()
    }

    public squareAt(position: Position): Square {
        return this.squares.get(position.row, position.col)
    }

    public move(from: Position, to: Position) {
        const origin = this.squareAt(from)
        const destination = this.squareAt(to)
        const piece = this.clone(origin.piece!)
        origin.removePiece()
        destination.addPiece(piece)
    }

    private initializeSquares() {
        const squares: Matrix<Square> = Matrix.of(this.ROWS, this.COLS)
        squares.forEach((square, row, col) => {
            square = this.shouldBeDarkSquare({row,col})
                ? new Square(ColorEnum.DARK, this.initializePieceAt(row))
                : new Square(ColorEnum.LIGHT, undefined)
            squares.set(square, row, col)
        })
        return squares
    }

    private initializePieceAt(row: number): Piece | undefined {
        const belongsToFirstFourRows = row <= 4
        const belongsToLastFourRows = this.ROWS - row < 4
        if (belongsToFirstFourRows) {
            return new Piece(ColorEnum.LIGHT)
        } else if (belongsToLastFourRows) {
            return new Piece(ColorEnum.DARK)
        }
    }

    private shouldBeDarkSquare(position: Position) {
        return (position.row + position.col) % 2 === 0
    }

    private clone(piece: Piece) {
        return Object.assign({}, piece)
    }
}