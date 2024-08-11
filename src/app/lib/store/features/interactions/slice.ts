import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface InteractionsSlice {
  displayAddProductModal: boolean
  displayProductModal: boolean
}

const initialState: InteractionsSlice = {
  displayAddProductModal: false,
  displayProductModal: false,
}

export const interactionsSlice = createSlice({
  name: 'interactionsSlice',
  initialState,
  reducers: {
    setDisplayAddProductModal: (state, action: PayloadAction<boolean>) => {
      state.displayAddProductModal = action.payload
    },
    setDisplayProductModal: (state, action: PayloadAction<boolean>) => {
      state.displayProductModal = action.payload
    },
  },
})

export const { setDisplayAddProductModal, setDisplayProductModal } =
  interactionsSlice.actions

export default interactionsSlice.reducer
