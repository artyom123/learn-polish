import React from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import CSVReader from '../../components/csvReader/CSVReader'
import { TABS, TABS_TYPE } from './Home.constants'
import { RenderTabs } from './Home.types'

// import type { RootState } from '../../store/store.ts'
// import { useSelector } from 'react-redux'
// const data = useSelector((state: RootState) => state.csv.data)

const Home = () => {
    const [tabType, setTabType] = React.useState<TABS_TYPE>(TABS_TYPE.cards)
    const { renderTabs, renderTabsPanel } = Object.keys(TABS).reduce((acc, key) => {
        const Component = TABS[key as TABS_TYPE]?.component || <div>123</div>

        acc.renderTabs.push(<Tab label={TABS[key as TABS_TYPE].label} key={key} value={key} />)
        acc.renderTabsPanel.push(<TabPanel key={key} value={key}>{<Component />}</TabPanel>)

        return acc
    }, { renderTabs: [], renderTabsPanel: [] } as RenderTabs)

    const handleChangeTab = (event: React.SyntheticEvent, newValue: TABS_TYPE) => {
        setTabType(newValue)
    }

    return (
        <>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={tabType}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
                            {renderTabs}
                        </TabList>
                    </Box>
                    {renderTabsPanel}
                </TabContext>
            </Box>

            <CSVReader />
        </>
    )
}

Home.displayName = 'HomePage'
export default Home
