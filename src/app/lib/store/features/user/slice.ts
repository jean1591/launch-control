import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/app/lib/interfaces/products'
import { createSlice } from '@reduxjs/toolkit'

export interface UserSlice {
  username: string
  selectedProduct: Product | null
}

const initialState: UserSlice = { username: '', selectedProduct: null }

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload
    },
  },
})

export const { setSelectedProduct, setUsername } = userSlice.actions

export default userSlice.reducer
