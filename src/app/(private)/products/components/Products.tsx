'use client'

import { AddProductButton } from './AddProductButton'
import { AddProductModal } from './AddProductModal'
import { ProductItem } from './ProductItem'
import { ProductModal } from './ProductModal'
import { RootState } from '@/app/lib/store/store'
import { products } from '@/app/lib/constants/products'
import { useSelector } from 'react-redux'

export const Products = () => {
  const { displayAddProductModal, displayProductModal } = useSelector(
    (state: RootState) => state.interactions
  )

  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <AddProductButton />
        {products.map((product) => (
          <ProductItem key={product.name} product={product} />
        ))}
      </div>

      {displayProductModal && <ProductModal />}
      {displayAddProductModal && <AddProductModal />}
    </div>
  )
}
