import AnimatedSection from '@/components/AnimatedSection';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Battery, ThermometerSun } from 'lucide-react';

const serviceCards = [
    { 
        title: 'Solar',
        description: 'Harness the power of the sun with our efficient, cost-saving solar energy solutions.',
        link: '/solar',
        icon: Sun,
        image: 'https://renewableindustries.co/wp-content/uploads/2024/06/8244680-1024x682.jpg'
    },
    { 
        title: 'Battery',
        description: 'Store your energy and power your future with our reliable, high-performance battery solutions.',
        link: '/batteries',
        icon: Battery,
        image: 'https://renewableindustries.co/wp-content/uploads/2025/07/Homepage_High-capacity_RESS.webp-scaled-e1762483851975-1024x681.jpeg'
    },
    { 
        title: 'Heat Pumps',
        description: 'Experience year-round comfort and efficiency with our advanced, eco-friendly heat pump systems.',
        link: '/heat-pumps',
        icon: ThermometerSun,
        image: 'https://renewableindustries.co/wp-content/uploads/2025/11/istore-270-black-2023-home-1-scaled.webp-e1762484047523.jpeg'
    }
];

const HomePage = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden">
         <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
         <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
             <source src="https://static.videezy.com/system/resources/previews/000/049/227/original/4K_20.mp4" type="video/mp4" />
             Your browser does not support the video tag.
         </video>
        <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter">
            <span className="text-white">renewable</span>
            <br />
            <span className="text-primary-light">industries</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-200">Powering Australia's sustainable future with innovative solar, battery, and heat pump solutions.</p>
          <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg shadow-primary/30">
              Contact Us
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>

      {/* Our Services Section */}
        <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-400">Sustainable energy solutions that help businesses and communities reduce their environmental impact and energy costs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCards.map((card, index) => (
                  <motion.div 
                    key={index} 
                    className="relative group overflow-hidden rounded-lg shadow-lg" 
                    whileHover={{ y: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                      <img src={card.image} alt={card.title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                          <card.icon className="w-10 h-10 mb-2 text-primary-light"/>
                          <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                          <p className="text-gray-300 mb-4">{card.description}</p>
                          <Link to={card.link} className="font-bold text-primary-light hover:text-primary-dark transition-colors">Learn More &rarr;</Link>
                      </div>
                  </motion.div>
              ))}
          </div>
        </AnimatedSection>


      {/* Latest News Section */}
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Latest News</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-400">Stay updated with the latest in renewable energy and our company's journey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

export default HomePage;
