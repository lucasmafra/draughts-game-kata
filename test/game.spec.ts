import {ColorEnum} from "../src/color"
import {Game} from "../src/game"

describe('Game', () => {

    it('should start with light pieces', () => {
        const game = new Game()
        expect(game.whoseTurn()).toBe(ColorEnum.LIGHT)
    })

})