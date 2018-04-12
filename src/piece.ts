import {ColorEnum} from "./color"

export class Piece {
    public readonly color: ColorEnum

    constructor(color: ColorEnum) {
        this.color = color
    }
}