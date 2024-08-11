import { NewProduct } from '@/app/lib/interfaces/products'
import { NextResponse, type NextRequest } from 'next/server'

// TODO: get data from DB
export async function GET(request: NextRequest) {
  return NextResponse.json([])
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
