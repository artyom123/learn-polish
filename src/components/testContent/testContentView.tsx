import React from 'react'
import BooleanCard from '../booleanCard/booleanCardContainer.tsx'
import { Button, Container } from '@mui/material'
import { BooleanCardData } from '../booleanCard/booleanCard.types.ts'
import { RESULT_KEYS, ResultData } from './testContent.types.ts'

interface TestContentViewProps {
    booleanCardData: BooleanCardData,
    booleanCardDataMulti: BooleanCardData,
    onClickGetOutCome: VoidFunction,
    onResult:  React.Dispatch<React.SetStateAction<ResultData>>,
    result: ResultData | NonNullable<unknown>,
    isDisabled: boolean,
}

export const TestContentView: React.FC<TestContentViewProps> = ({
    booleanCardData,
    booleanCardDataMulti,
    onClickGetOutCome,
    onResult,
    result,
    isDisabled,
}) => {
    const renderBooleanCards = booleanCardData.map(
        (data) => (
            <BooleanCard
                data={data}
                onResult={onResult}
                isDisabled={isDisabled}
                isValidated={result?.[RESULT_KEYS.CARD]?.[data.key]}
            />
        )
    )
    const renderBooleanCardsMulti = booleanCardDataMulti.map(
        (data) => (
            <BooleanCard
                data={data}
                onResult={onResult}
                isDisabled={isDisabled}
                isValidated={result?.[RESULT_KEYS.CARD_MULTI]?.[data.key]}
            />
        )
    )


    return (
        <Container maxWidth="sm">
            {renderBooleanCards}
            <span>----------</span>
            {renderBooleanCardsMulti}
            <Button
                variant="contained"
                color="primary"
                onClick={onClickGetOutCome}
                disabled={isDisabled}
            >
                Проверить
            </Button>
        </Container>
    )
}

TestContentView.displayName = 'TestContentView'
