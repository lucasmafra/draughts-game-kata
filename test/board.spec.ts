import {Board} from "../src/board"
import {ColorEnum} from "../src/color"

describe('Board', () => {

    const LOWER_COL = 1
    const LOWER_ROW = 1

    let board: Board

    beforeEach(() => {
        board = new Board()
    })

    it('should have 10x10 squares', () => {
        const squares = board.squares
        expect(squares.cols).toBe(10)
        expect(squares.rows).toBe(10)
    })

    it('should have a dark square at the lower-leftmost square', () => {
        const square = board.squareAt(LOWER_COL, LOWER_ROW)
        expect(square.color).toBe(ColorEnum.DARK)
    })

    it('should alternate between dark and light pieces', () => {
        expect(board.squareAt(1, 1).color).toBe(ColorEnum.DARK)
        expect(board.squareAt(1, 2).color).toBe(ColorEnum.LIGHT)
        expect(board.squareAt(2, 1).color).toBe(ColorEnum.LIGHT)
        expect(board.squareAt(2, 2).color).toBe(ColorEnum.DARK)
    })


})


