export interface Position {
    row: number
    col: number
}

export const pos = (row: number, col: number): Position => ({row,col})