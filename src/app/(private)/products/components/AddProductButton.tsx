import { PiFilePlus } from 'react-icons/pi'

export const AddProductButton = () => {
  return (
    <button
      type="button"
      className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-secondary p-4 text-center text-secondary hover:border-secondary/50 hover:text-secondary/75"
    >
      <PiFilePlus className="h-10 w-10" />
      <p className="mt-2 block text-base">Sync a new product</p>
    </button>
  )
}
