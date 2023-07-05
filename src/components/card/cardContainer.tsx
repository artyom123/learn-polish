import React from 'react'
import { useTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { CSVData } from '../csvReader/csvReader.types'
import { CardView } from './cardView'
import { RootState } from '../../store/store'

const CardContainer = () => {
    const theme = useTheme()
    const csvData = useSelector((state: RootState) => state.csv.data)
    const [data, setData] = React.useState<CSVData['data']>([])
    const [activeStep, setActiveStep] = React.useState(0)
    const [isHidden, setIsHidden] = React.useState(true)

    const handleClickNextButton = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
        setIsHidden(true)
    }

    const handleClickBackButton = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
        setIsHidden(true)
    }

    const handleClickCard = () => {
        setIsHidden(prev => !prev)
    }

    React.useEffect(() => {
        if (csvData.length) {
            setData(csvData)
        }
    }, [csvData])

    return (
        <CardView
            data={data}
            theme={theme}
            activeStep={activeStep}
            isHidden={isHidden}
            onClickNextButton={handleClickNextButton}
            onClickBackButton={handleClickBackButton}
            onClickCard={handleClickCard}
        />
    )
}

CardContainer.displayName = 'CardContainer'
export default CardContainer
