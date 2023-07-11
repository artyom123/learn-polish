import { RESULT_KEYS } from '../testContent/testContent.types.ts'

export interface CardItem {
    values: Array<string>,
    key: string,
    validValue: string
}

export type CardData = Record<RESULT_KEYS, Array<CardItem>>

export enum CONDITION {
    RIGHT = 'верно',
    WRONG = 'неверно',
}
