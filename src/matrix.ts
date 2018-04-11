export class Matrix<T> {

    public readonly rows: number
    public readonly cols: number
    private readonly matrix: Array<Array<T>>

    constructor(rows: number, cols: number) {
        this.rows = rows
        this.cols = cols
        this.matrix = Array.from(Array(rows), () => Array.from(Array(cols)))
    }

    static of<T>(rows: number, cols: number): Matrix<T> {
        return new Matrix<T>(rows, cols)
    }

    forEach(callbackFn: (element: T, row: number, col: number) => void) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                callbackFn(this.matrix[i][j], i+1, j+1)
            }
        }
    }

    get(row: number, col: number) {
        return this.matrix[row-1][col-1]
    }

    set(element: T, row: number, col: number) {
        this.matrix[row-1][col-1] = element
    }
}