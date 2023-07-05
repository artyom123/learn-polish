export interface BooleanCardItem {
    values: Array<string>,
    key: string,
    validValue: string
}

export type BooleanCardData = Array<BooleanCardItem>

export enum CONDITION {
    RIGHT = 'верно',
    WRONG = 'неверно',
}
