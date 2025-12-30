import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import PageHeader from '@/components/PageHeader';
import { CheckCircle, Users, Target, Globe } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Reliable Service',
    description: 'From your first call to installation and beyond, our team works hard to deliver on every promise. You can count on us for honest communication and solutions that last.',
  },
  {
    icon: Users,
    title: 'Client Focused',
    description: 'We take the time to understand your goals and design solar solutions that fit your needs perfectly. Our team is here to guide and support you every step of the way.',
  },
  {
    icon: Target,
    title: 'Certified Experts',
    description: 'Our team of certified professionals brings expertise and experience to every project, following the highest industry standards to ensure safe, efficient, and reliable solutions.',
  },
  {
    icon: Globe,
    title: 'Greener Future',
    description: 'Every solution we provide helps reduce carbon footprints and protect the planet. By choosing us, you’re joining a movement toward a more sustainable world.',
  },
];

const AboutUsPage = () => {
  return (
    <div className="space-y-16">
      <PageHeader title="About Us" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-primary-light mb-4">Our Mission</h2>
            <div className="space-y-4 text-gray-300">
                <p>Founded in Carrington, Newcastle, Renewable Industries was created with a bold vision: to help Australians take back control of their energy. Empowering everyday Aussies to fight rising power costs, achieve grid independence, and move toward a brighter, more sustainable future.</p>
                <p>We’re proud to keep things simple — as it should be. With expertly designed solar and battery systems, no-upfront-cost options, and a commitment to honest advice, we make clean energy accessible to all.</p>
                <p>As demand grows, so do we, with new offices now serving the Central Coast and Sydney, we’re bringing our mission to more homes and businesses across NSW. Our goal remains the same: to deliver energy freedom, real savings, and lasting impact — one installation at a time.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
              <img src="https://renewableindustries.co/wp-content/uploads/2024/06/8244680.jpg" alt="Solar panels on a sunny day" className="rounded-lg shadow-2xl" />
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-lg">
        <ContactForm title="Get in Touch!" />
      </AnimatedSection>
    </div>
  );
};

export default AboutUsPage;
