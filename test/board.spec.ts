import {Board} from "../src/board";

describe('Board', () => {

    it('should have 10x10 squares', () => {
        const board = new Board()
        expect(board.rows).toBe(10)
        expect(board.cols).toBe(10)
    })

})