
// import { notFound } from 'next/navigation'
// import { BlogPost } from '@modules/blog/BlogPost'
// import postsData from '@modules/blog/blogPost.json'
// import BlogPostContent from './BlogPostContent'

// interface BlogPostPageProps {
//   params: {
//     id: string
//   }
// }

// export async function generateStaticParams() {
//   return postsData.map((post: BlogPost) => ({
//     id: post.id.toString(),
//   }))
// }

// export default function BlogPostPage({ params }: BlogPostPageProps) {
//   const post = postsData.find((post) => post.id.toString() === params.id)

//   if (!post) {
//     notFound()
//   }

//   return <BlogPostContent post={post} />
// }
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { BlogPost } from '@modules/blog/BlogPost'
import postsData from '@modules/blog/blogPost.json'

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
  const post = postsData.find((p) => p.id.toString() === params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-600">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">{post.author}</p>
              <p className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
          <hr className="my-6 border-t border-gray-200" />
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>
  )
}