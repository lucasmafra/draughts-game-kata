import {Position} from './position'

export class Matrix<T> {

    public readonly rows: number
    public readonly cols: number
    private INITIAL_ROW = 1
    private INITIAL_COL = 1
    private readonly matrix: Array<Array<T>>

    constructor(rows: number, cols: number) {
        this.rows = rows
        this.cols = cols
        this.matrix = Array.from(Array(rows), () => Array.from(Array(cols)))
    }

    static of<T>(rows: number, cols: number): Matrix<T> {
        return new Matrix<T>(rows, cols)
    }

    forEach(callbackFn: (position: Position) => void) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                callbackFn({ row: i+this.INITIAL_ROW, col: j+this.INITIAL_COL })
            }
        }
    }

    get(position: Position) {
        return this.matrix[position.row-this.INITIAL_ROW][position.col-this.INITIAL_COL]
    }

    set(element: T, position: Position) {
        this.matrix[position.row-1][position.col-1] = element
    }

}