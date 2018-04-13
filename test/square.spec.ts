import {Square} from "../src/square"
import {ColorEnum} from "../src/color"
import {Piece} from "../src/piece"

describe('Square', () => {

    it('should always have a color', () => {
        const square = new Square(ColorEnum.LIGHT)
        expect(square.color).toBe(ColorEnum.LIGHT)
    })

    it('should optionally have a piece', () => {
        let square = new Square(ColorEnum.DARK)
        expect(square.piece).toEqual(undefined)
        square = new Square(ColorEnum.DARK, new Piece(ColorEnum.LIGHT))
        expect(square.piece).toEqual(expect.anything())
    })

    it('should allow adding a piece after its creation', () => {
        const square = new Square(ColorEnum.DARK)
        square.addPiece(new Piece(ColorEnum.DARK))
        expect(square.piece).toEqual(expect.anything())
    })

    it('should allow removing it\'s piece', () => {
        const square = new Square(ColorEnum.DARK, new Piece(ColorEnum.LIGHT))
        square.removePiece()
        expect(square.piece).toEqual(undefined)
    })

})