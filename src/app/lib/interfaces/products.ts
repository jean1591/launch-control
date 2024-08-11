type Stat = {
  app: string
  upvotes: number
  commentCount: number
}

export interface Product {
  createdAt: string
  description: string
  name: string
  stats: Stat[]
  tagline: string
  thumbnail: string
}

export interface NewProduct {
  hackerNews: string
  name: string
  productHunt: string
  reddit: string
}
