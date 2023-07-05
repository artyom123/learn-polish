import React from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { useSelector } from 'react-redux'
import Dialog from '../../components/dialog/dialogContainer.tsx'
import CSVReader from '../../components/csvReader/csvReader.tsx'
import { RootState } from '../../store/store'
import { TABS, TABS_TYPE } from './home.constants'
import { RenderTabs } from './home.types'

const Home = () => {
    const csvData = useSelector((state: RootState) => state.csv.data)
    const [tabType, setTabType] = React.useState<TABS_TYPE>(TABS_TYPE.CARDS)
    const { renderTabs, renderTabsPanel } = Object.keys(TABS).reduce((acc, key) => {
        const Component = TABS[key as TABS_TYPE]?.component || <div>123</div>

        acc.renderTabs.push(<Tab label={TABS[key as TABS_TYPE].label} key={key} value={key} />)
        acc.renderTabsPanel.push(<TabPanel key={key} value={key}>{<Component />}</TabPanel>)

        return acc
    }, { renderTabs: [], renderTabsPanel: [] } as RenderTabs)

    // @ts-expect-error event doesn't used
    const handleChangeTab = (event: React.SyntheticEvent, newValue: TABS_TYPE) => {
        setTabType(newValue)
    }

    return (
        <>
            {
                csvData.length ? (
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
                ) : (
                    <Dialog>
                        <Dialog.Title title="Загрузите CSV"/>
                        <Dialog.Content text="Пожалуйста, загрузите файл формата .CSV">
                            <Dialog.Content.Action>
                                <CSVReader />
                            </Dialog.Content.Action>
                        </Dialog.Content>
                    </Dialog>
                )
            }
        </>
    )
}

Home.displayName = 'HomePage'
export default Home
