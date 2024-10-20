"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Ancient Tradition of Copper Vessels: 5 Proven Health Benefits",
    author: "Varun Kesharwani",
    date: "2024-09-14",
    description: "Discover the benefits of drinking water from copper vessels, backed by traditional and modern science.",
    image: "https://www.charandhul.com/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdgvwg1ikm%2Fimage%2Fupload%2Fv1725021794%2FIMG20240829165613_1725021793294.jpg&w=1920&q=75",
    content: `<div class="prose lg:prose-xl">
      <h2>Introduction</h2>
      <p>The practice of storing water in copper vessels dates back thousands of years, with its roots firmly planted in Ayurvedic medicine. This ancient Indian healing system recognized the unique properties of copper and its potential to enhance health and well-being...</p>
      <h3>The Science Behind Copper Water</h3>
      <p>When water is stored in a copper vessel, small amounts of copper ions leach into the water. These copper ions possess potent antimicrobial and anti-inflammatory properties...</p>
      <h3>Health Benefit #1: Boosts Immunity</h3>
      <p>Copper plays a crucial role in the production of white blood cells, which are essential for fighting infections...</p>
      <h3>Health Benefit #2: Improves Digestion</h3>
      <p>Copper water can stimulate the production of digestive enzymes, which are essential for breaking down food...</p>
      <h3>Health Benefit #3: Aids in Weight Loss</h3>
      <p>Copper can help support weight loss by promoting healthy metabolism...</p>
      <h3>Health Benefit #4: Anti-Aging Properties</h3>
      <p>Copper is known for its antioxidant and cell regeneration properties, which can help slow down the aging process...</p>
      <h3>Health Benefit #5: Supports Heart Health</h3>
      <p>Copper has been shown to have beneficial effects on heart health. It can help regulate blood pressure and lower cholesterol levels...</p>
      <h3>Conclusion</h3>
      <p>The ancient tradition of using copper vessels to store water offers a variety of health benefits, including improved immunity, digestion, weight loss, anti-aging, and heart health. By incorporating copper water into your daily routine, you can experience the natural and holistic benefits of this ancient practice.</p>
    </div>`
  },
  {
    id: 2,
    title: "7 Surprising Benefits of Drinking Herbal Teas: A Complete Guide",
    author: "Amit Sharma",
    date: "2024-08-20",
    description: "Unveil the health secrets of herbal teas. From improved sleep to better digestion, learn why herbal teas deserve a spot in your daily routine.",
    image: "https://www.charandhul.com/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdgvwg1ikm%2Fimage%2Fupload%2Fv1725021794%2FIMG20240829165613_1725021793294.jpg&w=1920&q=75",
    content: `<div class="prose lg:prose-xl">
      <h2>Introduction</h2>
      <p>Herbal teas have been consumed for centuries, not only for their soothing flavors but also for their numerous health benefits. In this guide, we'll explore some of the lesser-known advantages of herbal teas...</p>
      <h3>Benefit #1: Promotes Relaxation</h3>
      <p>Herbal teas such as chamomile and lavender are known to promote relaxation and reduce stress...</p>
      <h3>Benefit #2: Enhances Sleep Quality</h3>
      <p>Many herbal teas can help improve sleep quality, making them an ideal bedtime beverage...</p>
      <h3>Benefit #3: Supports Digestive Health</h3>
      <p>Certain herbal teas can aid digestion and alleviate digestive discomfort...</p>
      <h3>Conclusion</h3>
      <p>Incorporating a variety of herbal teas into your daily routine can provide numerous health benefits, from improved relaxation to better digestive health. Experiment with different herbal teas to find the ones that work best for you and enjoy their natural healing properties.</p>
    </div>`
  }
];

interface BlogPostProps {
  post: BlogPost;
  isExpanded: boolean;
  onToggle: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, isExpanded, onToggle }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src={post.image}
          alt={post.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">{post.title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          By {post.author} | {post.date}
        </p>
        <p className="text-xl text-gray-700 mb-6">{post.description}</p>
        {isExpanded ? (
          <div>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <button
              onClick={onToggle}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read Less
            </button>
          </div>
        ) : (
          <button
            onClick={onToggle}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Read More
          </button>
        )}
      </div>
    </article>
  );
};

const BlogSection: React.FC = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  useEffect(() => {
    if (expandedPost !== null) {
      const element = document.getElementById(`post-${expandedPost}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [expandedPost]);

  const handleToggle = (postId: number) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Blog</h1>
        <div className="max-w-3xl mx-auto">
          {blogPosts.map((post) => (
            <div key={post.id} id={`post-${post.id}`}>
              <BlogPost
                post={post}
                isExpanded={expandedPost === post.id}
                onToggle={() => handleToggle(post.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;