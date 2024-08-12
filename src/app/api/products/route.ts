import { NewProduct } from '@/app/lib/interfaces/products'
import { createClient } from '@/utils/supabase/server'
import { isNil } from 'lodash'
import { NextResponse, type NextRequest } from 'next/server'

// TODO: get data from DB
export async function GET(request: NextRequest) {
  const supabase = createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (isNil(session?.user?.email)) {
    throw new Error('User is not connected')
  }

  const { email } = session.user

  const { data: products } = await supabase
    .from('products')
    .select('*, stats(app, upvotes, commentCount)')
    .eq('userEmail', email)

  return NextResponse.json(products)
}

// TODO: save in DB
export async function POST(request: NextRequest): Promise<NextResponse> {
  const { product }: { product: NewProduct } = await request.json()

  const productToSave = {
    name: product.name,
    hackerNews: product.hackerNews ? product.hackerNews : undefined,
    productHunt: product.productHunt ? product.productHunt : undefined,
    reddit: product.reddit ? product.reddit : undefined,
  }
  console.log('🚀 ~ API ~ productToSave:', productToSave)

  return NextResponse.json({ success: true })
}
