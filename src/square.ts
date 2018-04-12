import {ColorEnum} from "./color"
import {Piece} from "./piece";

export class Square {

    public readonly color: ColorEnum
    private _piece: Piece | undefined

    constructor(color: ColorEnum, piece?: Piece) {
        this.color = color
        this._piece = piece
    }

    public get piece(): Piece | undefined {
        return this._piece
    }

    public addPiece(piece: Piece) {
        this.ensureHasNoPiece()
        this._piece = piece
    }

    public removePiece() {
        this.ensureHasPiece()
        this._piece = undefined
    }

    private ensureHasNoPiece() {
        if (this.piece) {
            throw new Error('Already have a piece')
        }
    }

    private ensureHasPiece() {
        if (!this.piece) {
            throw new Error('No piece to remove')
        }
    }
}
