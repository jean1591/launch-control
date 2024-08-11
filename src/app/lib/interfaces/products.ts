type Stat = {
  app: string
  upvotes: number
  commentCount: number
}

export type Product = {
  createdAt: string
  description: string
  name: string
  stats: Stat[]
  tagline: string
  thumbnail: string
}
