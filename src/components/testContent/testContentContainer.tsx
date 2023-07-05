import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store.ts'
import { ResultData, RESULT_KEYS } from './testContent.types.ts'
import { TestContentView } from './testContentView.tsx'
import TestContainerService from './testContainer.sevice.ts'

const TestContentContainer = () => {
    const csvData = useSelector((state: RootState) => state.csv.data)
    const [result, setResult] = React.useState<ResultData | NonNullable<unknown>>({})
    const [isDisabled, setIsDisabled] = React.useState(false)
    const [booleanCardData] = React.useState(TestContainerService.getBooleanCard(csvData))
    const [booleanCardDataMulti] = React.useState(TestContainerService.getBooleanCard(csvData, true))


    const handleClickGetOutCome = () => {
        setIsDisabled(true)
    }

    React.useEffect(() => {
        if (!Object.keys(result).length && booleanCardData && booleanCardDataMulti) {
            setResult(prev => ({
                ...prev,
                [RESULT_KEYS.CARD]: TestContainerService.getDataForResult(booleanCardData),
                [RESULT_KEYS.CARD_MULTI]: TestContainerService.getDataForResult(booleanCardDataMulti),
            }))
        }
    }, [booleanCardData, booleanCardDataMulti])

    return (
        <TestContentView
            booleanCardData={booleanCardData}
            booleanCardDataMulti={booleanCardDataMulti}
            onClickGetOutCome={handleClickGetOutCome}
            onResult={setResult}
            result={result}
            isDisabled={isDisabled}
        />
    )
}

TestContentContainer.displayName = 'TestContentContainer'

export default TestContentContainer
