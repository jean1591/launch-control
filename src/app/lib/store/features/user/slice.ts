import type { PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@/app/lib/interfaces/products'
import { createSlice } from '@reduxjs/toolkit'

export interface UserSlice {
  email: string | null
  products: Product[] | null
  selectedProduct: Product | null
}

const initialState: UserSlice = {
  email: null,
  products: null,
  selectedProduct: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload
    },
  },
})

export const { setSelectedProduct, setEmail, setProducts } = userSlice.actions

export default userSlice.reducer
