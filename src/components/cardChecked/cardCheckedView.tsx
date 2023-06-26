import { Button, Grid, Card, CardActions, CardContent, Divider, Typography } from '@mui/material'
import { classes } from './cardChecked.styles.ts'

export const CardCheckedView = () => (
    <Card>
        <CardContent>
            <Grid container justifyContent="space-between" alignItems="center" sx={classes.gridContent}>
                <Typography variant="h6" gutterBottom>
                    h6. Heading
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="h6" gutterBottom>
                    h6. Heading
                </Typography>
            </Grid>

            <Typography variant="subtitle1" gutterBottom>
                Выберите ответ
            </Typography>
        </CardContent>

        <CardActions sx={classes.cardActions}>
            <Button sx={classes.button} size="large" variant="outlined">Верно</Button>
            <Button sx={classes.button} size="large" variant="outlined">Неверно</Button>
        </CardActions>
    </Card>
)

CardCheckedView.displayName = 'CardCheckedView'
