import { AddProductButton } from './AddProductButton'
import { Product } from '@/app/lib/interfaces/products'
import { Product as ProductComponent } from './Product'

export const Products = () => {
  const products: Product[] = [
    {
      name: 'Codectibles',
      tagline: 'Enhance your coding journey',
      thumbnail:
        'https://ph-files.imgix.net/d64d0279-7c8e-4f72-a778-75fff7c18634.x-icon?auto=format',
    },
    {
      name: 'Launch-Control',
      tagline: 'Monitor your product launch',
      thumbnail:
        'https://ph-files.imgix.net/d64d0279-7c8e-4f72-a778-75fff7c18634.x-icon?auto=format',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <AddProductButton />
      {products.map((product) => (
        <ProductComponent key={product.name} product={product} />
      ))}
    </div>
  )
}
