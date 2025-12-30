import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import PageHeader from '@/components/PageHeader';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <PageHeader title="Contact Us" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-gray-400 mb-8">We're here to answer your questions and help you start your journey to sustainable energy. Reach out to us through any of the methods below.</p>
            <div className="space-y-6">
              <div className="flex items-center text-lg">
                <Mail className="w-6 h-6 mr-4 text-primary-light" />
                <a href="mailto:info@renewableindustries.co" className="text-gray-300 hover:text-primary-light transition-colors">info@renewableindustries.co</a>
              </div>
              <div className="flex items-center text-lg">
                <Phone className="w-6 h-6 mr-4 text-primary-light" />
                <a href="tel:0240627593" className="text-gray-300 hover:text-primary-light transition-colors">02 4062 7593</a>
              </div>
              <div className="flex items-start text-lg">
                <MapPin className="w-6 h-6 mr-4 text-primary-light mt-1" />
                <span className="text-gray-300">2/43 Denison Street, Carrington, Newcastle NSW Australia</span>
              </div>
            </div>
            <div className="mt-8 flex space-x-6">
                <a href="https://www.instagram.com/renewable.industries?igsh=aXZrcHpiY3ljejlw&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-light transition-colors"><Instagram size={28} /></a>
                <a href="https://www.facebook.com/profile.php?id=61561250176617&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-light transition-colors"><Facebook size={28} /></a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ContactForm />
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-16">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border-2 border-slate-800">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.756245350311!2d151.76362317556503!3d-32.90977717353926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b7314f3eaf3038f%3A0x72dec38cda074e06!2s48%20Gipps%20St%2C%20Carrington%20NSW%202294%2C%20Australia!5e0!3m2!1sen!2sus!4v1719280000000!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;
