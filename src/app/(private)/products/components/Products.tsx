'use client'

import { useDispatch, useSelector } from 'react-redux'

import { AddProductButton } from './AddProductButton'
import { AddProductModal } from './AddProductModal'
import { Product } from '@/app/lib/interfaces/products'
import { ProductItem } from './ProductItem'
import { ProductModal } from './ProductModal'
import { RootState } from '@/app/lib/store/store'
import { isNil } from 'lodash'
import { setProducts } from '@/app/lib/store/features/user/slice'
import { useEffect } from 'react'

export const Products = () => {
  const dispatch = useDispatch()

  const { products } = useSelector((state: RootState) => state.user)
  const { displayAddProductModal, displayProductModal } = useSelector(
    (state: RootState) => state.interactions
  )

  useEffect(() => {
    ;(async function getUserProducts() {
      const productsResponse = await fetch('/api/products')
      const products = (await productsResponse.json()) as Product[]

      dispatch(setProducts(products))
    })()
  }, [])

  // TODO: add skeleton
  if (isNil(products)) {
    return <>Loading</>
  }

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
