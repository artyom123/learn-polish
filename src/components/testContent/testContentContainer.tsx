import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store.ts'
import { ResultData, RESULT_KEYS } from './testContent.types.ts'
import { TestContentView } from './testContentView.tsx'
import TestContainerService from './testContainer.sevice.ts'

const TestContentContainer = () => {
    const csvData = useSelector((state: RootState) => state.csv.data)
    const [isDisabled, setIsDisabled] = React.useState(false)
    const [cardData] = React.useState({
        [RESULT_KEYS.CARD]: TestContainerService.getBooleanCard(csvData),
        [RESULT_KEYS.CARD_MULTI]: TestContainerService.getBooleanCard(csvData, true),
    })
    const [result, setResult] = React.useState<ResultData>({
        [RESULT_KEYS.CARD]: TestContainerService.getDataForResult(cardData[RESULT_KEYS.CARD]),
        [RESULT_KEYS.CARD_MULTI]: TestContainerService.getDataForResult(cardData[RESULT_KEYS.CARD_MULTI]),
    })


    const handleClickGetOutCome = () => {
        setIsDisabled(true)
    }

    return (
        <TestContentView
            cardData={cardData}
            onClickGetOutCome={handleClickGetOutCome}
            onResult={setResult}
            result={result}
            isDisabled={isDisabled}
        />
    )
}

TestContentContainer.displayName = 'TestContentContainer'

export default TestContentContainer
