import AnimatedSection from '@/components/AnimatedSection';
import BlogCard from '@/components/BlogCard';
import PageHeader from '@/components/PageHeader';
import { blogPosts } from '@/data/blogPosts';

const BlogPage = () => {
  return (
    <div>
      <PageHeader 
        title="Renewable Energy News & Insights"
        subtitle="Explore the latest articles, updates, and stories from the forefront of the renewable energy industry in Australia and beyond."
      />
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default BlogPage;
