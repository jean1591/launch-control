import { PiFilePlus } from 'react-icons/pi'
import { setDisplayAddProductModal } from '@/app/lib/store/features/interactions/slice'
import { useDispatch } from 'react-redux'

export const AddProductButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      type="button"
      className="flex w-full flex-col items-center justify-center rounded-lg border-[1px] border-dashed border-slate-800/25 px-4 py-10 text-center shadow-lg transition duration-500 hover:border-slate-500/50 hover:bg-slate-100 hover:text-slate-800/50 hover:shadow-none"
      onClick={() => dispatch(setDisplayAddProductModal(true))}
    >
      <PiFilePlus className="h-10 w-10" />
      <p className="mt-2 block text-base">Sync a new product</p>
    </button>
  )
}
