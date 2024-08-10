import { Hero } from './components/Hero'
import { Products } from './components/Products'

// TODO: get data from API
export default function ProductsPage() {
  return (
    <div>
      <Hero />

      <div className="mt-20">
        <Products />
      </div>
    </div>
  )
}
