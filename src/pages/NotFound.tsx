import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <PageHeader title="404 - Page Not Found" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <p className="text-xl text-gray-400 mb-8">The page you are looking for does not exist.</p>
        <Link to="/" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-colors">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
