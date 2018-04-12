import {Square} from "./square"
import {ColorEnum} from "./color"
import {Matrix} from "./matrix"
import {Piece} from "./piece"

export class Board {

    public readonly squares: Matrix<Square>
    private readonly ROWS = 10
    private readonly COLS = 10

    constructor() {
        this.squares = this.initializeSquares()
    }

    public squareAt(row: number, col: number): Square {
        return this.squares.get(row, col)
    }

    private initializeSquares() {
        const squares: Matrix<Square> = Matrix.of(this.ROWS, this.COLS)
        squares.forEach((square, row, col) => {
            square = this.isDarkPosition(row,col)
                ? new Square(ColorEnum.DARK, this.initializePieceAt(row))
                : new Square(ColorEnum.LIGHT, undefined)
            squares.set(square, row, col)
        })
        return squares
    }

    private initializePieceAt(row: number): Piece | undefined {
        if (this.belongsToFirstFourRows(row)) {
            return new Piece(ColorEnum.LIGHT)
        } else if (this.belongsToLastFourRows(row)) {
            return new Piece(ColorEnum.DARK)
        }
    }

    private isDarkPosition(row: number, col: number) {
        return (row + col) % 2 === 0
    }

    private belongsToFirstFourRows(row: number) {
        return row <= 4
    }

    private belongsToLastFourRows(row: number) {
        return this.ROWS - row < 4
    }
}