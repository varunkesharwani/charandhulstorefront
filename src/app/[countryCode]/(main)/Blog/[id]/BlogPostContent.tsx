// 'use client'

// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { BlogPost } from '@modules/blog/BlogPost'

// interface BlogPostContentProps {
//   post: BlogPost
// }

// export default function BlogPostContent({ post }: BlogPostContentProps) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="container mx-auto px-4 py-8 max-w-4xl"
//     >
//       <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//         <motion.div
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="relative h-96"
//         >
//           <Image
//             src={post.image}
//             alt={post.title}
//             layout="fill"
//             objectFit="cover"
//             priority
//           />
//         </motion.div>
//         <div className="p-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//             className="text-3xl font-bold mb-4"
//           >
//             {post.title}
//           </motion.h1>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//             className="flex items-center space-x-4 mb-6"
//           >
//             <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
//               <span className="text-xl font-semibold text-gray-600">
//                 {post.author.split(' ').map(n => n[0]).join('')}
//               </span>
//             </div>
//             <div>
//               <p className="text-sm font-medium">{post.author}</p>
//               <p className="text-sm text-gray-500">
//                 {new Date(post.date).toLocaleDateString('en-US', { 
//                   year: 'numeric', 
//                   month: 'long', 
//                   day: 'numeric' 
//                 })}
//               </p>
//             </div>
//           </motion.div>
//           <motion.hr
//             initial={{ opacity: 0, scaleX: 0 }}
//             animate={{ opacity: 1, scaleX: 1 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             className="my-6 border-t border-gray-200"
//           />
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             className="prose max-w-none"
//           >
//             {post.content.split('\n').map((paragraph, idx) => (
//               <motion.p
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
//                 className="mb-4 last:mb-0"
//               >
//                 {paragraph}
//               </motion.p>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </motion.article>
//   )
// }

'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import DOMPurify from 'dompurify'
import { BlogPost } from '@modules/blog/BlogPost'

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const sanitizeHTML = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html)
    }
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-96"
        >
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
        <div className="p-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            {post.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center space-x-4 mb-6"
          >
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
          </motion.div>
          <motion.hr
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="my-6 border-t border-gray-200"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="prose max-w-none"
            dangerouslySetInnerHTML={sanitizeHTML(post.content)}
          />
        </div>
      </div>
    </motion.article>
  )
}