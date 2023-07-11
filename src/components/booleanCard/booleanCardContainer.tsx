import React from 'react'
import { ResultData, RESULT_KEYS } from '../testContent/testContent.types.ts'
import { CardItem, CONDITION } from './booleanCard.types.ts'
import { BooleanCardView } from './booleanCardView.tsx'

interface BooleanCardContainerProps {
    data: CardItem
    onResult: React.Dispatch<React.SetStateAction<ResultData>>,
    isDisabled: boolean,
    isValidated?: boolean,
}

const BooleanCardContainer: React.FC<BooleanCardContainerProps> = ({
    data,
    onResult,
    isDisabled,
    isValidated = true,
}) => {
    const isMulti = data.values.length > 1
    const [activeButton, setActiveButton] = React.useState('')

    const handleClick = (value: string) => {
        const key = isMulti ? RESULT_KEYS.CARD_MULTI : RESULT_KEYS.CARD

        setActiveButton(value)
        onResult(prev => {
            const isValidCondition = data.validValue === data.values[0]
            const isConditionRight = CONDITION.RIGHT === value && isValidCondition
            const isConditionWrong = CONDITION.WRONG === value && !isValidCondition
            const isValidValue = data.validValue === value

            return {
                ...prev,
                [key]: {
                    ...prev[key],
                    [data.key]: isValidValue || isConditionRight || isConditionWrong,
                }
            }
        })
    }

    return (
        <BooleanCardView
            data={data}
            isMulti={isMulti}
            isDisabled={isDisabled}
            isValidated={isValidated}
            activeButton={activeButton}
            onClick={handleClick}
        />
    )
}

BooleanCardContainer.displayName = 'BooleanCardContainer'

export default BooleanCardContainer
