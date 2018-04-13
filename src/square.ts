import {ColorEnum} from "./color"
import {Piece} from "./piece"

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
        this._piece = Object.assign(piece) // create a new instance of the object
    }

    public removePiece() {
        this._piece = undefined
    }

}
