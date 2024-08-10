import Image from 'next/image'
import { Product as ProductType } from '@/app/lib/interfaces/products'

export const Product = ({ product }: { product: ProductType }) => {
  return (
    <div className="rounded-md bg-secondary px-4 py-8 text-white shadow-md">
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
    </div>
  )
}
