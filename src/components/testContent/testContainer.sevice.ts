import { CSVData } from '../csvReader/csvReader.types.ts'
import { CardData, CardItem } from '../booleanCard/booleanCard.types.ts'
import { AMOUNT_WORDS_BOOLEAN_CARD } from '../../config/config.constants.ts'
import RandomData from '../../utils/randomData.utils.ts'
import { ResultData, RESULT_KEYS } from './testContent.types.ts'

export default class TestContainerService {
    private static getItemBooleanCard(item: CSVData['data'][0], data: CSVData['data'], isMulti: boolean): CardItem {
        const index = Math.round(Math.random())
        const key = item[index]
        const valueIndex = item.length - 1 - index
        const validValue = item[valueIndex]
        const filteredData = data.filter((d) => d.toString() !== item.toString())
        const values: Array<string> = RandomData.getNewArray(
            filteredData, isMulti ? 3 : 1).map(item => item[valueIndex]
        )



        return {
            values: RandomData.mixArray([...values, validValue]).slice(0, isMulti ? Infinity : 1),
            key,
            validValue,
        }
    }
    static getBooleanCard(data: CSVData['data'], isMulti = false): CardData[RESULT_KEYS.CARD] {
        const updatedData = RandomData.getNewArray([...data], AMOUNT_WORDS_BOOLEAN_CARD)

        return updatedData.map((item, _, arr) => this.getItemBooleanCard(item, arr, isMulti))
    }

    static getDataForResult(data: CardData[RESULT_KEYS.CARD]): ResultData[RESULT_KEYS.CARD] {
        return data.reduce((acc, { key }) => ({
            ...acc,
            [key]: false
        }), {})
    }
}
