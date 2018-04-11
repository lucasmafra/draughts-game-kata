import {Square} from "./square"
import {Color} from "./color"
const ROWS = 10
const COLS = 10

export class Board {

    private readonly positions: Array<Array<Square>>

    constructor() {
        this.positions = this.initializePositions()
    }

    public squareAt(col: number, row: number): Square {
        return this.positions[col - 1][row - 1]
    }

    public get cols(): number {
        return COLS
    }

    public get rows(): number {
        return ROWS
    }

    private initializePositions() {
        const positions: Array<Array<Square>> = this.createMatrix()
        let currentColor = Color.dark()
        for (let i = 0; i < COLS; i++) {
            for (let j = 0; j < ROWS; j++) {
                positions[i][j] = new Square(currentColor)
                currentColor = Color.toggle(currentColor)
            }
            currentColor = Color.toggle(currentColor)
        }
        return positions
    }

    private createMatrix() {
        return Array.from(Array(COLS), () => Array.from(Array(ROWS)))
    }
}