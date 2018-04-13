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
        return this.squares.get(position)
    }

    public move(from: Position, to: Position) {
        const origin = this.squareAt(from)
        const destination = this.squareAt(to)
        destination.addPiece(origin.piece!)
        origin.removePiece()
    }

    private initializeSquares() {
        const squares: Matrix<Square> = Matrix.of(this.ROWS, this.COLS)
        squares.forEach((position) => {
            const squareColor = this.colorForPosition(position)
            const piece = squareColor === ColorEnum.DARK ? this.pieceForPosition(position) : undefined
            squares.set(new Square(squareColor, piece), position)
        })
        return squares
    }

    private colorForPosition(position: Position): ColorEnum {
        const shouldBeDarkSquare = (position.row + position.col) % 2 === 0
        return shouldBeDarkSquare ? ColorEnum.DARK : ColorEnum.LIGHT
    }

    private pieceForPosition(position: Position): Piece | undefined {
        const shouldBeLightPiece = position.row <= 4
        const shouldBeDarkPiece = this.ROWS - position.row < 4
        return shouldBeDarkPiece ? new Piece(ColorEnum.DARK) :
               shouldBeLightPiece ? new Piece(ColorEnum.LIGHT) :
               undefined
    }

}