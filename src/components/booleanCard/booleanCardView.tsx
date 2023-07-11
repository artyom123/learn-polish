import { Grid, Card, CardActions, CardContent, Divider, Typography } from '@mui/material'
import { classes } from './booleanCard.styles.ts'
import { CardItem, CONDITION } from './booleanCard.types.ts'
import Button from '../button/buttonContainer.tsx'

interface BooleanCardViewProps {
    data: CardItem
    isMulti: boolean
    isDisabled: boolean
    isValidated: boolean
    activeButton: string
    onClick: (value: string) => void
}

export const BooleanCardView: React.FC<BooleanCardViewProps> = ({
    data,
    isMulti,
    isDisabled,
    isValidated,
    activeButton,
    onClick,
}) => {
    const renderButtons = () => {
        switch (data.values.length) {
            case 1: {
                const buttonsName = [CONDITION.RIGHT, CONDITION.WRONG]

                return buttonsName.map(
                    (title) => (
                        <Button
                            key={title}
                            title={title}
                            onClick={onClick}
                            isActive={activeButton === title}
                            isDisabled={isDisabled}
                        />
                    )
                )
            }
            default: {
                return data.values.map(
                    value => (
                        <Button
                            key={value}
                            title={value}
                            onClick={onClick}
                            isActive={activeButton === value}
                            isDisabled={isDisabled}
                        />
                    )
                )
            }
        }
    }

    const cardStyles = {
        true: isDisabled ? classes.cardGreen : {},
        false: isDisabled ? classes.cardRed : {},
    } as const

    return (
        <Card sx={{...classes.card, ...cardStyles[isValidated.toString() as keyof typeof cardStyles]}}>
            <CardContent>
                <Grid container sx={classes.gridContent}>
                    <Typography variant="h6" gutterBottom>
                        {data.key}
                    </Typography>
                    {
                        !isMulti &&  (
                            <>
                                <Divider orientation="vertical" flexItem />
                                <Typography variant="h6" gutterBottom>
                                    {data.values[0]}
                                </Typography>
                            </>
                        )
                    }
                </Grid>

                <Typography variant="subtitle1" gutterBottom>
                    Выберите ответ
                </Typography>
            </CardContent>

            <CardActions sx={classes.cardActions}>
                {/* TODO: replace on radio buttons */}
                {renderButtons()}
            </CardActions>
        </Card>
    )
}

BooleanCardView.displayName = 'BooleanCardView'
