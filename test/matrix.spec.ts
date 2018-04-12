import {Matrix} from "../src/matrix";

describe('Matrix', () => {

    it('should create a matrix with correct numbers of rows and cols', () => {
        const matrix = Matrix.of(5, 7)
        expect(matrix.rows).toBe(5)
        expect(matrix.cols).toBe(7)
    })

    it('should set and get an element in a position of the matrix', () => {
        const matrix = Matrix.of<string>(5, 7)
        matrix.set('hello',3,3)
        expect(matrix.get(3, 3)).toBe('hello')
    })

    it('should not allow create a matrix with a number of rows or cols less than 0', () => {
        let throwable = () => Matrix.of<string>(-1, 0)
        expect(throwable).toThrow('Rows and cols must be greater than or equal to 0')
        throwable = () => Matrix.of<string>(0, -1)
        expect(throwable).toThrow('Rows and cols must be greater than or equal to 0')
    })

    it('should not allow getting or setting an element in a row index less than 1', () => {
        const matrix = Matrix.of<number>(2, 2)
        let throwable = () => matrix.set(10, 0, 1)
        expect(throwable).toThrow('Invalid index: (0, 1)')
        throwable = () => matrix.get(-1, 2)
        expect(throwable).toThrow('Invalid index: (-1, 2)')
    })

    it('should not allow getting or setting an element in a col index less than 1', () => {
        const matrix = Matrix.of<number>(2, 2)
        let throwable = () => matrix.set(10, 1, 0)
        expect(throwable).toThrow('Invalid index: (1, 0)')
        throwable = () => matrix.get(2, -1)
        expect(throwable).toThrow('Invalid index: (2, -1)')
    })

    it('should not allow getting or setting an element in a row index greater than ROWS', () => {
        const matrix = Matrix.of<number>(1, 2)
        let throwable = () => matrix.set(10, 3, 1)
        expect(throwable).toThrow('Invalid index: (3, 1)')
        throwable = () => matrix.get(5, 2)
        expect(throwable).toThrow('Invalid index: (5, 2)')
    })

    it('should not allow getting or setting an element in a col index greater than COLS', () => {
        const matrix = Matrix.of<number>(2, 1)
        let throwable = () => matrix.set(10, 1, 3)
        expect(throwable).toThrow('Invalid index: (1, 3)')
        throwable = () => matrix.get(2, 5)
        expect(throwable).toThrow('Invalid index: (2, 5)')
    })

})