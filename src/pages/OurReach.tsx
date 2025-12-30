import AnimatedSection from '@/components/AnimatedSection';
import PageHeader from '@/components/PageHeader';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const locations = [
    {
        name: 'Newcastle (Head Office)',
        address: '2/43 Denison Street, Carrington, Newcastle, NSW',
        description: 'Our Newcastle headquarters serves as the central hub of our operations, reflecting our commitment to transforming Australia’s energy future, starting at the source.',
    },
    {
        name: 'Central Coast',
        address: 'Unit 8, 2 Warren Road, Warnervale, NSW',
        description: 'Our Central Coast office supports local customers and regional projects, contributing to the development of the Hunter-Central Coast Renewable Energy Zone (REZ).',
    },
    {
        name: 'Sydney',
        address: '364 Cleveland Street, Surry Hills, NSW',
        description: 'Located in the heart of the city, our Sydney office allows us to deliver tailored renewable energy solutions quickly and efficiently across the metropolitan area.',
    }
]

const OurReachPage = () => {
  return (
    <div>
      <PageHeader title="Our Reach" subtitle="Strategic Presence Across NSW" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg h-full">
                        <MapPin className='w-10 h-10 text-primary-light mb-4' />
                        <h3 className="text-2xl font-bold text-white mb-2">{loc.name}</h3>
                        <p className="font-semibold text-gray-400 mb-4">{loc.address}</p>
                        <p className="text-gray-400">{loc.description}</p>
                    </div>
                </AnimatedSection>
            ))}
        </div>

        <AnimatedSection>
            <img 
                src="https://renewableindustries.co/wp-content/uploads/2025/06/RI-Our-Reach-Map-1536x1126.png"
                alt="Map of Renewable Industries reach in NSW"
                className="w-full h-auto rounded-lg shadow-2xl"
            />
        </AnimatedSection>

        <AnimatedSection className="text-center">
            <h2 className="text-3xl font-bold text-white">Why Choose Renewable Industries?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-400">With established offices in Newcastle, Warnervale, and Surry Hills, and active projects across the state, we are positioned to deliver practical, localised energy solutions. We’re here to help you take control of your energy future.</p>
            <div className="mt-8">
                <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform duration-200 hover:scale-105">
                    Contact Us
                </Link>
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default OurReachPage;
