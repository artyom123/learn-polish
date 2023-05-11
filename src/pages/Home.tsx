import React from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import CSVReader from '../components/csvReader/CSVReader'

const Home = () => {
    const [value, setValue] = React.useState('1')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Карточки" value="1" />
                            <Tab label="Заучивание" value="2" />
                            <Tab label="Тест" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Карточки</TabPanel>
                    <TabPanel value="2">Заучивание</TabPanel>
                    <TabPanel value="3">Тест</TabPanel>
                </TabContext>
            </Box>

            <CSVReader />
        </>
    )
}

Home.displayName = 'HomePage'
export default Home
