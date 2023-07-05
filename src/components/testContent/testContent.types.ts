export enum RESULT_KEYS {
    CARD = 'card',
    CARD_MULTI = 'cardMulti',
}
export type ResultData = Record<RESULT_KEYS, Record<string, boolean>>
