import {Board} from "../src/board"
import {Color} from "../src/color"

describe('Board', () => {

    const LOWER_COL = 1
    const LOWER_ROW = 1

    let board: Board

    beforeEach(() => {
        board = new Board()
    })

    it('should have 10x10 squares', () => {
        expect(board.rows).toBe(10)
        expect(board.cols).toBe(10)
    })

    it('should have a dark square at the lower-leftmost square', () => {
        const square = board.squareAt(LOWER_COL, LOWER_ROW)
        expect(square.color).toBe(Color.dark())
    })

    it('should alternate between dark and light pieces', () => {
        expect(board.squareAt(1, 1).color).toBe(Color.dark())
        expect(board.squareAt(1, 2).color).toBe(Color.light())
        expect(board.squareAt(2, 1).color).toBe(Color.light())
        expect(board.squareAt(2, 2).color).toBe(Color.dark())
    })

})


