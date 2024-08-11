import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/lib/store/store'
import { setDisplayAddProductModal } from '@/app/lib/store/features/interactions/slice'

interface Product {
  name: string
  productHunt?: string
  hackerNews?: string
  reddit?: string
}

// TODO: form does not work
export const AddProductModal = () => {
  const [product, setProduct] = useState<Product>({ name: '' })
  const dispatch = useDispatch()

  const { displayAddProductModal } = useSelector(
    (state: RootState) => state.interactions
  )

  const handleOnSubmit = () => {
    console.log('🚀 ~ AddProductModal ~ product:', product)
  }

  return (
    <Dialog
      className="relative z-10"
      open={displayAddProductModal}
      onClose={() => dispatch(setDisplayAddProductModal(false))}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-slate-500 bg-opacity-75"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center md:items-center md:p-0">
          <DialogPanel
            transition
            className="relative w-full transform overflow-hidden rounded-lg bg-slate-50 p-4 text-left shadow-xl md:w-3/4 md:p-8 lg:w-1/2"
          >
            <div className="text-left">
              <DialogTitle className="text-center text-2xl font-semibold leading-6 lg:text-3xl">
                New Product Launch 🚀
              </DialogTitle>

              <div className="mt-12 flex flex-col gap-y-8">
                <InputString
                  id="name"
                  label="Project Name"
                  product={product}
                  setProduct={setProduct}
                />
                <InputString
                  id="productHunt"
                  label="Product Hunt"
                  product={product}
                  setProduct={setProduct}
                />
                <InputString
                  id="reddit"
                  label="Reddit"
                  product={product}
                  setProduct={setProduct}
                />
                <InputString
                  id="hackerNews"
                  label="Hacker News"
                  product={product}
                  setProduct={setProduct}
                />

                <div className="flex items-center justify-end">
                  <button
                    onClick={handleOnSubmit}
                    type="button"
                    className="cursor-pointer rounded-lg border-[1px] border-green-400 bg-green-200 px-8 py-2 text-center font-medium uppercase text-green-700 shadow-lg transition duration-500 hover:bg-green-100 hover:shadow-none"
                  >
                    Add product
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

const InputString = ({
  id,
  label,
  product,
  setProduct,
}: {
  id: keyof Product
  label: string
  product: Product
  setProduct: (product: Product) => void
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [id]: event.target.value })
  }

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type="text"
        value={product[id]}
        onChange={(e) => handleChange(e)}
        className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-800/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
      />
    </div>
  )
}
