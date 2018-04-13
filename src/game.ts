import {ColorEnum} from "./color"

export class Game {

    private turn = ColorEnum.LIGHT

    whoseTurn() {
        return this.turn
    }
}
