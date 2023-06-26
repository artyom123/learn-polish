import React from 'react'
import { useCSVReader } from 'react-papaparse'
import { useDispatch } from 'react-redux'
import { Box, Button, Typography } from '@mui/material'
import { CSVData } from './csvReader.types'
import { setData } from '../../store/features/csvSlice'
import { classes } from './csvReader.styles'

const CSVReader = () => {
    const { CSVReader } = useCSVReader()
    const [uploadedData, setUploadedData] = React.useState<CSVData['data']>([])
    const [isLoading, setIsLoading] = React.useState(false)
    const dispatch = useDispatch()
    const handleUploadAccepted = ({ data }: CSVData) => {
        setUploadedData(data)
        setIsLoading(true)
    }

    const handleClickButtonApply = () => {
        dispatch(setData(uploadedData))
    }

    const handleClickButtonRemove = () => {
        setIsLoading(false)
        setUploadedData([])
    }

    return (
        <CSVReader
            onUploadAccepted={handleUploadAccepted}
        >
            {({
                  getRootProps,
                  acceptedFile,
                  getRemoveFileProps,
                  ProgressBar,
              }: any) => (
                <>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <Typography variant="body1">
                            {acceptedFile && acceptedFile.name}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: '100%', mr: 1, mb: 1 }}>
                            <ProgressBar />
                        </Box>
                    </Box>
                    <Box sx={classes.boxButtons}>
                        {
                            isLoading ? (
                                <Button variant="contained" color="success" onClick={handleClickButtonApply}>Применить</Button>
                                ) : (
                                <Button variant="contained" {...getRootProps()}>Загрузить файл</Button>
                            )
                        }
                        <Button
                            variant="contained"
                            color="error"
                            disabled={!uploadedData.length}
                            {...getRemoveFileProps()}
                            onClick={(evt) => {
                                handleClickButtonRemove()
                                getRemoveFileProps()['onClick'](evt)
                            }}
                        >
                            Удалить
                        </Button>
                    </Box>
                </>
            )
            }
        </CSVReader>
    )
}

CSVReader.displayName = 'CSVReader'
export default CSVReader
