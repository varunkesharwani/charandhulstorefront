
import { notFound } from 'next/navigation'
import { BlogPost } from '@modules/blog/BlogPost'
import postsData from '@modules/blog/blogPost.json'
import BlogPostContent from './BlogPostContent'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return postsData.map((post: BlogPost) => ({
    id: post.id.toString(),
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = postsData.find((post) => post.id.toString() === params.id)

  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}