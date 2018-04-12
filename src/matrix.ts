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
        this.ensureNonNegativeRowsAndCols(rows,cols)
        return new Matrix<T>(rows, cols)
    }

    forEach(callbackFn: (element: T, row: number, col: number) => void) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                callbackFn(this.matrix[i][j], i+this.INITIAL_ROW, j+this.INITIAL_COL)
            }
        }
    }

    get(row: number, col: number) {
        this.ensureValidIndex(row,col)
        return this.matrix[row-this.INITIAL_ROW][col-this.INITIAL_COL]
    }

    set(element: T, row: number, col: number) {
        this.ensureValidIndex(row,col)
        this.matrix[row-1][col-1] = element
    }


    private ensureValidIndex(row: number, col: number) {
        if (!this.isValidIndex(row, col)) {
            throw new Error(`Invalid index: (${row}, ${col})`)
        }
    }

    private isValidIndex(row: number, col: number) {
        return this.isBetweenInterval(row, this.INITIAL_ROW, this.rows) &&
            this.isBetweenInterval(col, this.INITIAL_COL, this.cols)
    }

    private isBetweenInterval(n: number, a: number, b: number) {
        return a <= n && b >= n
    }

    private static ensureNonNegativeRowsAndCols(rows: number, cols: number) {
        if (rows < 0 || cols < 0) {
            throw new Error('Rows and cols must be greater than or equal to 0')
        }
    }
}