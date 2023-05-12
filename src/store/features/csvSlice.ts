import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CSVData } from '../../components/csvReader/CSVReader.types'

export interface CSVSlice {
    data: CSVData['data']
}

const initialState: CSVSlice = {
    data: [],
}

export const csvSlice = createSlice({
    name: 'csv',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<CSVData['data']>) => {
            state.data = action.payload
        },
    },
})
export const { setData } = csvSlice.actions

export default csvSlice.reducer
