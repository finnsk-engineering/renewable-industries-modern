import { motion } from 'framer-motion';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-lg shadow-xl">
        {title && <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>}
        {subtitle && <p className="text-gray-400 mb-6">{subtitle}</p>}
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name *</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm text-white" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address *</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm text-white" />
            </div>
             <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
                <input type="tel" name="phone" id="phone" className="mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm text-white" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" id="message" rows={4} className="mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm text-white"></textarea>
            </div>
            <div>
                 <motion.button 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-md transition-colors duration-300">
                    Send Message
                </motion.button>
            </div>
        </form>
    </div>
  );
}

export default ContactForm;
