'use client'

import { RootState } from '@/app/lib/store/store'
import { useSelector } from 'react-redux'

export default function Products() {
  const { username } = useSelector((state: RootState) => state.user)

  return <p>Hello {username}</p>
}
