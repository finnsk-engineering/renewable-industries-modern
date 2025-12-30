import AnimatedSection from '@/components/AnimatedSection';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { Sun, Battery, ThermometerSun, Phone, PenSquare, Wrench, CheckCircle } from 'lucide-react';

const products = [
    { title: 'Solar', image: 'https://renewableindustries.co/wp-content/uploads/2024/06/8244680-1024x682.jpg', description: 'Harness the power of the sun with our efficient, cost-saving solar energy solutions.', link: '/solar' },
    { title: 'Battery', image: 'https://renewableindustries.co/wp-content/uploads/2025/07/Homepage_High-capacity_RESS.webp-scaled-e1762483851975-1024x681.jpeg', description: 'Store your energy and power your future with our reliable, high-performance battery solutions.', link: '/batteries' },
    { title: 'Heat Pumps', image: 'https://renewableindustries.co/wp-content/uploads/2025/11/istore-270-black-2023-home-1-scaled.webp-e1762484047523.jpeg', description: 'Experience year-round comfort and efficiency with our advanced, eco-friendly heat pump systems.', link: '/heat-pumps' },
];

const processSteps = [
    { icon: Phone, title: 'Getting in Touch', description: 'Contact us to schedule your free energy assessment and discover how you can save.' },
    { icon: PenSquare, title: 'System Design', description: 'Our experts design a tailored renewable energy solution that perfectly fits your needs.' },
    { icon: Wrench, title: 'Installation', description: 'Our certified installers complete the installation safely, efficiently, and to the highest standards.' },
    { icon: CheckCircle, title: 'Post Installation', description: 'We follow up to ensure your system is performing optimally and you are completely satisfied.' },
];

const ServicesPage = () => {
  return (
    <div className="space-y-16">
      <PageHeader 
        title="Our Services"
        subtitle="At Renewable Industries, we specialise in providing sustainable energy solutions that help businesses and communities reduce their environmental impact and energy costs."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
              <h2 className="text-3xl font-bold mb-4 text-white">Residential Solutions</h2>
              <p className="text-gray-300">Renewable Industries helps homeowners transition to clean, affordable energy through our range of solar, battery, and heat pump solutions. Our experts design and install systems tailored to each home’s energy needs, ensuring maximum efficiency and long-term savings.</p>
          </AnimatedSection>
           <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold mb-4 text-white">Commercial Solutions</h2>
              <p className="text-gray-300">We help businesses reduce energy costs and environmental impact with tailored renewable energy solutions. Our team designs and installs systems to meet the unique needs of each commercial property, ensuring maximum efficiency and reliability for sustainable operations.</p>
          </AnimatedSection>
      </div>

       <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
                <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                    <img src={product.image} alt={product.title} className="w-full h-56 object-cover"/>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-white">{product.title}</h3>
                        <p className="text-gray-400 mb-4">{product.description}</p>
                        <Link to={product.link} className="font-semibold text-primary-light hover:text-primary-dark transition-colors">Learn More &rarr;</Link>
                    </div>
                </div>
            ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
                <div key={index} className="text-center p-6 bg-slate-900 border border-slate-800 rounded-lg">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-primary-light" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
            ))}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;
