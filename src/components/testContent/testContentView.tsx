import React from 'react'
import BooleanCard from '../booleanCard/booleanCardContainer.tsx'
import { Box, Button, Container, Divider, Typography } from '@mui/material'
import { CardData } from '../booleanCard/booleanCard.types.ts'
import { CARD_SECTIONS } from './testContent.constants.ts'
import { ResultData } from './testContent.types.ts'

interface TestContentViewProps {
    cardData: CardData,
    onClickGetOutCome: VoidFunction,
    onResult:  React.Dispatch<React.SetStateAction<ResultData>>,
    result: ResultData,
    isDisabled: boolean,
}

export const TestContentView: React.FC<TestContentViewProps> = ({
    cardData,
    onClickGetOutCome,
    onResult,
    result,
    isDisabled,
}) => {
    const renderCardSections = CARD_SECTIONS.map(({ title, type }) => {
        return (
            <Box key={type} sx={{ mb: 10 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Divider sx={{ mb: 2 }}/>
                {
                    cardData[type].map((item) => (
                        <BooleanCard
                            key={item.key}
                            data={item}
                            onResult={onResult}
                            isDisabled={isDisabled}
                            isValidated={result[type][item.key]}
                        />
                    ))
                }
            </Box>
        )
    })


    return (
        <Container maxWidth="sm">
            {renderCardSections}
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
