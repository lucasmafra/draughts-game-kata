import {ColorEnum} from "../src/color"
import {Game} from "../src/game"
import {pos} from "../src/position"

describe('Game', () => {

    let game: Game

    beforeEach(() => {
        game = new Game()
    })

    it('should start with light pieces', () => {
        expect(game.whoseTurn()).toBe(ColorEnum.LIGHT)
    })

    it('should alternate turns after each move', () => {
        game.makeMove(pos(4, 2), pos(5, 3))
        expect(game.whoseTurn()).toBe(ColorEnum.DARK)
    })


})