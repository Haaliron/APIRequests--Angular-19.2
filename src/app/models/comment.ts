interface Comment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

type Comments = Comment[]

export type { Comment, Comments }

