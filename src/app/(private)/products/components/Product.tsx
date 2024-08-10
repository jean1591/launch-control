import Image from 'next/image'
import { Product as ProductType } from '@/app/lib/interfaces/products'

export const Product = ({ product }: { product: ProductType }) => {
  return (
    <div className="cursor-pointer rounded-lg border-[1px] border-slate-800/5 bg-slate-50 px-4 py-12 shadow-lg transition duration-500 hover:bg-slate-100 hover:shadow-none">
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
