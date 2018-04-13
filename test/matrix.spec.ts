import {Matrix} from "../src/matrix"
import {Position} from '../src/position'

describe('Matrix', () => {

    const pos = (row: number, col: number):Position => ({row, col})

    it('should create a matrix with correct numbers of rows and cols', () => {
        const matrix = Matrix.of(5, 7)
        expect(matrix.rows).toBe(5)
        expect(matrix.cols).toBe(7)
    })

    it('should set and get an element in a position of the matrix', () => {
        const matrix = Matrix.of<string>(5, 7)
        matrix.set('hello', { row: 3, col: 3 })
        expect(matrix.get({ row: 3, col: 3 })).toBe('hello')
    })

    it('should iterate over each position of the matrix', () => {
        const matrix = Matrix.of<string>(2, 3)
        const expectedPositions = [
            pos(1,1), pos(1,2), pos(1,3),
            pos(2,1), pos(2,2), pos(2,3),
        ]
        const actualPositions: Position[] = []
        matrix.forEach((position) => {
             actualPositions.push(position)
        })
        expect(expectedPositions).toEqual(actualPositions)
    })

})