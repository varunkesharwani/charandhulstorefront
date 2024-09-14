
import BlogList from '@modules/blog/BlogList';
import postsData from '@modules/blog/blogPost.json';

const page = () => {
  return (
    <div>
      <BlogList posts={postsData} />
    </div>
  );
};

export default page;
