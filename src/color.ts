enum ColorEnum {
    DARK = 'dark',
    LIGHT = 'light'
}

export namespace Color {

    export const dark = () => ColorEnum.DARK

    export const light = () => ColorEnum.LIGHT

    export const toggle = (color: ColorEnum) => color === ColorEnum.DARK
        ? ColorEnum.LIGHT
        : ColorEnum.DARK

}