import {ColorEnum} from './color'
import {Position} from './position'

export class Game {

    private turn = ColorEnum.LIGHT

    public whoseTurn() {
        return this.turn
    }

    public makeMove(from: Position, to: Position) {
        this.switchTurn()
    }

    private switchTurn() {
        this.turn = this.turn === ColorEnum.LIGHT
            ? ColorEnum.DARK
            : ColorEnum.LIGHT
    }
}
