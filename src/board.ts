import {Square} from "./square"
import {ColorEnum} from "./color"
import {Matrix} from "./matrix"

export class Board {

    public readonly squares: Matrix<Square>
    private readonly ROWS = 10
    private readonly COLS = 10

    constructor() {
        this.squares = this.initializeSquares()
    }

    public squareAt(col: number, row: number): Square {
        return this.squares.get(col, row)
    }

    private initializeSquares() {
        const squares: Matrix<Square> = Matrix.of(this.ROWS, this.COLS)
        squares.forEach((square, row, col) => {
            square = this.isDarkPosition(row,col)
                ? new Square(ColorEnum.DARK)
                : new Square(ColorEnum.LIGHT)
            squares.set(square, row, col)
        })
        return squares
    }

    private isDarkPosition(row: number, col: number) {
        return (row + col) % 2 === 0
    }

}