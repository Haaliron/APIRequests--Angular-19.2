interface Post {
  userId: number
  id: number
  title: string
  body: string
}

type Posts = Post[];

type CreatePost = Pick<Post, "body" | "title" | "userId">

export type { CreatePost, Post, Posts };

