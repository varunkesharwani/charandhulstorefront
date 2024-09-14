// // components/BlogList.tsx
// import { BlogPost } from './BlogPost';
// import Link from 'next/link';

// const BlogList = ({ posts }: { posts: BlogPost[] }) => {
//   return (
//     <section className="py-10 bg-gray-50">
//       <div className="container mx-auto px-5">
//         <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Latest Blogs</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post) => (
//             <div key={post.id} className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden">
//               <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
//               <div className="p-5">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
//                 <p className="text-gray-600 text-sm mb-4">{post.description}</p>
//                 <Link href={`/Blog/${post.id}`}>
//                   <p className="text-blue-600 hover:text-blue-800 font-semibold">Read More →</p>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogList;


'use client'

import { BlogPost } from './BlogPost'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BlogList = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Latest Blogs
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={post.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300 ease-in-out"
            >
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <Link href={`/Blog/${post.id}`} className="inline-flex items-center">
                    <span className="text-primary hover:text-primary-dark font-semibold transition-colors duration-200">
                      Read More
                    </span>
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
