// // src/app/[countryCode]/(main)/Blog/[id]/page.tsx
// import { BlogPost } from '@modules/blog/BlogPost';
// import postsData from '@modules/blog/blogPost.json';
// import { notFound } from 'next/navigation';

// interface BlogPostPageProps {
//   params: {
//     id: string;
//   };
// }

// // Fetch static parameters for dynamic routes
// export async function generateStaticParams() {
//   return postsData.map((post: BlogPost) => ({
//     id: post.id.toString(),
//   }));
// }

// const BlogPostPage = ({ params }: BlogPostPageProps) => {
//   // Find the blog post by the ID passed in the URL
//   const post = postsData.find((post) => post.id.toString() === params.id);

//   if (!post) {
//     // Handle not found case
//     notFound();
//   }

//   return (
//     <div className="container mx-auto px-5 py-10">
//       <h1 className="text-5xl font-bold mb-5 text-blue-900">{post.title}</h1>
//       <p className="text-gray-600 text-sm mb-8">{post.author} • {new Date(post.date).toDateString()}</p>
//       <img src={post.image} alt={post.title} className="w-full h-72 object-cover mb-8" />
//       <div className="prose">
//         {post.content.split('\n').map((paragraph, idx) => (
//           <p key={idx}>{paragraph}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogPostPage;


// export default BlogPostPage;
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