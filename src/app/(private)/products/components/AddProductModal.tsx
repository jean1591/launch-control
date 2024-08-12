import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { NewProduct } from '@/app/lib/interfaces/products'
import { RootState } from '@/app/lib/store/store'
import { isEmpty } from 'lodash'
import { setDisplayAddProductModal } from '@/app/lib/store/features/interactions/slice'
import toast from 'react-hot-toast'

const notifySuccess = () => toast.success('App added !', { duration: 5000 })

export const AddProductModal = () => {
  const [name, setName] = useState<string>('')
  const [productHunt, setProductHunt] = useState<string>('')
  const [hackerNews, setHackerNews] = useState<string>('')
  const [reddit, setReddit] = useState<string>('')
  const [disabled, setIsDisabled] = useState<boolean>(true)

  const dispatch = useDispatch()

  const { displayAddProductModal } = useSelector(
    (state: RootState) => state.interactions
  )

  const handleOnSubmit = () => {
    if (isEmpty(name)) {
      return
    }

    if (isEmpty(hackerNews) && isEmpty(productHunt) && isEmpty(reddit)) {
      return
    }

    const product: NewProduct = {
      hackerNews,
      name,
      productHunt,
      reddit,
    }

    ;(async function addProduct() {
      await fetch(`/api/products`, {
        method: 'POST',
        body: JSON.stringify({ product }),
        headers: { 'Content-Type': 'application/json' },
      })
    })()

    dispatch(setDisplayAddProductModal(false))
    notifySuccess()
  }

  useEffect(() => {
    if (isEmpty(name)) {
      setIsDisabled(true)

      return
    }

    if (isEmpty(productHunt) && isEmpty(hackerNews) && isEmpty(reddit)) {
      setIsDisabled(true)

      return
    }

    setIsDisabled(false)
  }, [name, productHunt, hackerNews, reddit])

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
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-800/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="productHunt"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium"
                  >
                    Product Hunt ID
                  </label>

                  <input
                    id="productHunt"
                    name="productHunt"
                    type="text"
                    value={productHunt}
                    onChange={(e) => setProductHunt(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-800/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="hackerNews"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium"
                  >
                    Hacker News ID
                  </label>

                  <input
                    id="hackerNews"
                    name="hackerNews"
                    type="text"
                    value={hackerNews}
                    onChange={(e) => setHackerNews(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-800/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="reddit"
                    className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium"
                  >
                    Reddit ID
                  </label>

                  <input
                    id="reddit"
                    name="reddit"
                    type="text"
                    value={reddit}
                    onChange={(e) => setReddit(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-800/5 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="flex items-center justify-end">
                  <button
                    disabled={disabled}
                    onClick={handleOnSubmit}
                    type="button"
                    className="cursor-pointer rounded-lg border-[1px] border-green-400 bg-green-200 px-8 py-2 text-center font-medium uppercase text-green-700 shadow-lg transition duration-500 hover:bg-green-100 hover:shadow-none disabled:border-slate-400 disabled:bg-slate-200 disabled:text-slate-700"
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
