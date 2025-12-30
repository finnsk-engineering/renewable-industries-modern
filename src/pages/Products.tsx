import AnimatedSection from '@/components/AnimatedSection';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { Sun, Battery, ThermometerSun } from 'lucide-react';

const products = [
    {
        icon: Sun,
        title: 'Solar',
        description: 'Turn sunshine into savings, make the switch to solar today!',
        link: '/solar'
    },
    {
        icon: Battery,
        title: 'Battery',
        description: 'Don\'t just go solar, go smarter with battery backup.',
        link: '/batteries'
    },
    {
        icon: ThermometerSun,
        title: 'Heat Pumps',
        description: 'Efficient, eco-friendly heating and cooling for your home.',
        link: '/heat-pumps'
    }
]

const ProductsPage = () => {
  return (
    <div>
      <PageHeader title="Our Products" subtitle="High-quality, reliable renewable energy solutions for every home and business." />
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <Link to={product.link} key={index} className="block p-8 bg-slate-900 border border-slate-800 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 hover:border-primary-light">
                    <product.icon className="w-16 h-16 text-primary-light mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-white">{product.title}</h3>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    <span className="font-semibold text-primary-light hover:text-primary-dark transition-colors">Learn More &rarr;</span>
                </Link>
            ))}
             {/* Placeholder for repeated items in screenshot */}
              {products.map((product, index) => (
                <Link to={product.link} key={`placeholder-${index}`} className="block p-8 bg-slate-900 border border-slate-800 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 hover:border-primary-light">
                    <product.icon className="w-16 h-16 text-primary-light mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-white">{product.title}</h3>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    <span className="font-semibold text-primary-light hover:text-primary-dark transition-colors">Learn More &rarr;</span>
                </Link>
            ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProductsPage;
