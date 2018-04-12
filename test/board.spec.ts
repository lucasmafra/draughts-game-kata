import {Board} from "../src/board"
import {ColorEnum} from "../src/color"

describe('Board', () => {

    let board: Board

    const piecesAt = (...positions: { row: number, col: number}[]) => positions
        .map(position => board.squareAt(position.row, position.col))
        .map(square => square.piece)

    const pos = (row: number, col: number) => ({row, col})

    beforeEach(() => {
        board = new Board()
    })

    it('should have 10x10 squares', () => {
        const squares = board.squares
        expect(squares.cols).toBe(10)
        expect(squares.rows).toBe(10)
    })

    it('should have a dark square at the lower-leftmost square', () => {
        const LOWER_ROW = 1
        const LEFT_COL = 1
        const square = board.squareAt(LOWER_ROW, LEFT_COL)
        expect(square.color).toBe(ColorEnum.DARK)
    })

    it('should alternate squares color between light and dark', () => {
        expect(board.squareAt(1, 1).color).toBe(ColorEnum.DARK)
        expect(board.squareAt(1, 2).color).toBe(ColorEnum.LIGHT)
        expect(board.squareAt(2, 1).color).toBe(ColorEnum.LIGHT)
        expect(board.squareAt(2, 2).color).toBe(ColorEnum.DARK)
    })

    it('should initialize 20 light pieces in the dark squares of the first 4 rows', () => {
        piecesAt(
            pos(1,1), pos(1,3), pos(1,5), pos(1,7), pos(1,9),
            pos(2,2), pos(2,4), pos(2,6), pos(2,8), pos(2,10),
            pos(3,1), pos(3,3), pos(3,5), pos(3,7), pos(3,9),
            pos(4,2), pos(4,4), pos(4,6), pos(4,8), pos(4,10),
        ).forEach((piece) => expect(piece!.color).toBe(ColorEnum.LIGHT))
    })

    it('should initialize 20 dark pieces in the dark squares of the last 4 rows', () => {
        piecesAt(
            pos(10,2), pos(10,4), pos(10,6), pos(10,8), pos(10,10),
            pos(9,1),  pos(9,3),  pos(9,5),  pos(9,7),  pos(9,9),
            pos(8,2),  pos(8,4),  pos(8,6),  pos(8,8),  pos(8,10),
            pos(7,1),  pos(7,3),  pos(7,5),  pos(7,7),  pos(7,9),
        ).forEach((piece) => expect(piece!.color).toBe(ColorEnum.DARK))
    })

    it('should initialize all light squares without any pieces', () => {
        piecesAt(
            pos(1,2),  pos(1,4),  pos(1,6),  pos(1,8),  pos(1,10),
            pos(2,1),  pos(2,3),  pos(2,5),  pos(2,7),  pos(2,9),
            pos(3,2),  pos(3,4),  pos(3,6),  pos(3,8),  pos(3,10),
            pos(4,1),  pos(4,3),  pos(4,5),  pos(4,7),  pos(4,9),
            pos(5,1),  pos(5,2),  pos(5,3),  pos(5,4),  pos(5,5), pos(5,6), pos(5,7), pos(5,8), pos(5,9), pos(5,10),
            pos(6,1),  pos(6,2),  pos(6,3),  pos(6,4),  pos(6,5), pos(6,6), pos(6,7), pos(6,8), pos(6,9), pos(6,10),
            pos(7,2),  pos(7,4),  pos(7,6),  pos(7,8),  pos(7,10),
            pos(8,1),  pos(8,3),  pos(8,5),  pos(8,7),  pos(8,9),
            pos(9,2),  pos(9,4),  pos(9,6),  pos(9,8),  pos(9,10),
            pos(10,1), pos(10,3), pos(10,5), pos(10,7), pos(10,9),
        ).forEach((piece) => expect(piece).toEqual(undefined))
    })

})


