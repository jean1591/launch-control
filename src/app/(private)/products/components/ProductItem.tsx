'use client'

import Image from 'next/image'
import { Product } from '@/app/lib/interfaces/products'
import { setDisplayProductModal } from '@/app/lib/store/features/interactions/slice'
import { setSelectedProduct } from '@/app/lib/store/features/user/slice'
import { useDispatch } from 'react-redux'

export const ProductItem = ({ product }: { product: Product }) => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(setDisplayProductModal(true))
    dispatch(setSelectedProduct(product))
  }

  return (
    <button
      className="cursor-pointer rounded-lg border-[1px] border-slate-800/5 bg-slate-50 px-4 py-12 text-start shadow-lg transition duration-500 hover:bg-slate-100 hover:shadow-none"
      onClick={handleOnClick}
    >
      <div className="flex items-center justify-start gap-x-2">
        <Image
          src={product.thumbnail}
          width={20}
          height={20}
          alt={`${product.name} app thumbnail`}
          className="rounded-full"
        />
        <p className="text-xl font-bold">{product.name}</p>
      </div>
      <p className="text-base">{product.tagline}</p>
    </button>
  )
}
