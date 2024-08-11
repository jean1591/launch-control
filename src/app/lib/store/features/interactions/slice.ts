import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface InteractionsSlice {
  displayProductModal: boolean
}

const initialState: InteractionsSlice = { displayProductModal: false }

export const interactionsSlice = createSlice({
  name: 'interactionsSlice',
  initialState,
  reducers: {
    setDisplayProductModal: (state, action: PayloadAction<boolean>) => {
      state.displayProductModal = action.payload
    },
  },
})

export const { setDisplayProductModal } = interactionsSlice.actions

export default interactionsSlice.reducer
