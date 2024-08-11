import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { PiChatCircleDots, PiThumbsUp } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/app/lib/store/store'
import { setDisplayProductModal } from '@/app/lib/store/features/interactions/slice'

export const ProductModal = () => {
  const dispatch = useDispatch()

  const { displayProductModal } = useSelector(
    (state: RootState) => state.interactions
  )
  const { selectedProduct } = useSelector((state: RootState) => state.user)

  if (!selectedProduct) {
    return <></>
  }

  const { description, stats, name, tagline } = selectedProduct

  return (
    <Dialog
      className="relative z-10"
      open={displayProductModal}
      onClose={() => dispatch(setDisplayProductModal(false))}
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
              <DialogTitle className="text-2xl font-semibold leading-6 lg:text-3xl">
                {name}
              </DialogTitle>

              <div>
                <p className="mt-4 text-xl">{tagline}</p>
                <p className="mt-2 text-base">{description}</p>
              </div>
            </div>

            <div className="mt-8">
              {stats.map((stat) => (
                <div key={stat.app} className="grid grid-cols-3">
                  <p className="text-ellipsis text-nowrap text-left text-lg uppercase text-slate-500">
                    {stat.app}
                  </p>

                  <div className="flex items-center justify-end gap-x-2">
                    <p className="text-base">{stat.upvotes}</p>
                    <PiThumbsUp className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-end gap-x-2">
                    <p className="text-base">{stat.commentCount}</p>
                    <PiChatCircleDots className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
