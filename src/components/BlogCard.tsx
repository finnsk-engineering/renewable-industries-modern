import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
    category: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-800 flex flex-col"
    >
      <Link to={post.slug}>
        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
            <p className="text-xs text-primary-light font-semibold uppercase tracking-wider">{post.category}</p>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white flex-grow">
          <Link to={post.slug} className="hover:text-primary-light transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
        <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center text-xs text-gray-500">
            <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2"/>
                <span>{post.date}</span>
            </div>
            <Link to={post.slug} className="font-semibold text-primary-light hover:text-primary-dark transition-colors">
                Read More &rarr;
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
