import AnimatedSection from '@/components/AnimatedSection';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';

const EmploymentPage = () => {
  const jobs = [
    'Sales Manager',
    'Business Development Specialist',
    'Business Development Manager',
    'Entry Level Sales Representative'
  ];

  return (
    <div>
      <PageHeader title="Employment Opportunities" />
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">Current Australia Wide Job Availabilities</h2>
            <ul className="list-disc list-inside text-primary-light mb-6 space-y-1">
              {jobs.map(job => <li key={job}>{job}</li>)}
            </ul>
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
                <label htmlFor="location" className="block text-sm font-medium text-gray-300">Location *</label>
                <input type="text" name="location" id="location" required className="mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm text-white" />
              </div>
              <div>
                <label htmlFor="job" className="block text-sm font-medium text-gray-300">Job *</label>
                <select id="job" name="job" required className="mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm text-white">
                  <option>Select Job</option>
                  {jobs.map(job => <option key={job} value={job}>{job}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" id="message" rows={4} maxLength={180} className="mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm text-white"></textarea>
              </div>
              <div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-md transition-colors duration-300">
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default EmploymentPage;
