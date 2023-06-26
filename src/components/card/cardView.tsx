import React from 'react'
import { Card, CardActionArea, CardContent, Box, Button, MobileStepper, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { CSVData } from '../csvReader/csvReader.types'
import { classes } from './card.styles'

interface CardViewProps {
    data: CSVData['data']
    theme: Theme
    activeStep: number
    isHidden: boolean
    onClickNextButton: VoidFunction
    onClickBackButton: VoidFunction
    onClickCard: VoidFunction
}

export const CardView: React.FC<CardViewProps> = ({
    data, theme,
    activeStep,
    isHidden,
    onClickNextButton,
    onClickBackButton,
    onClickCard,
}) => {
    const isOpenTranslate = isHidden ? 0 : 1
    const maxSteps = data.length

    const renderNextButton: React.JSX.Element = (
        <Button
            size="small"
            onClick={onClickNextButton}
            disabled={activeStep === maxSteps - 1 || maxSteps === 0}
        >
            Next
            {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
        </Button>
    )

    const renderBackButton: React.JSX.Element = (
        <Button size="small" onClick={onClickBackButton} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
            Back
        </Button>
    )

    return (
        <Box sx={classes.box}>
            <Card sx={classes.card}>
                <CardActionArea onClick={onClickCard} sx={classes.cardActionArea}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            { data[activeStep]?.[isOpenTranslate] ?? 'Загрузите данные для воспользованием карточками' }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="progress"
                activeStep={activeStep}
                nextButton={renderNextButton}
                backButton={renderBackButton}
            />
        </Box>
    )
}

CardView.displayName = 'CardView'
