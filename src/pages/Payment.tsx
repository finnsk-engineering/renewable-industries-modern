import AnimatedSection from '@/components/AnimatedSection';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

const PaymentPage = () => {
  return (
    <div>
      <PageHeader title="Secure Payment" />
      <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg shadow-xl">
            <div className="text-center mb-6">
              <CreditCard className="mx-auto h-12 w-12 text-primary-light" />
              <h2 className="mt-2 text-2xl font-bold text-white">Payment Details</h2>
              <p className="text-gray-400">Powered by Stripe</p>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="order-no" className="block text-sm font-medium text-gray-300">Order No. *</label>
                <input type="text" name="order-no" id="order-no" required className="mt-1 block w-full bg-slate-800 border-slate-700 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm text-white" />
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-300">Amount *</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-400 sm:text-sm">$</span>
                    </div>
                    <input type="text" name="amount" id="amount" required className="block w-full pl-7 pr-12 bg-slate-800 border-slate-700 rounded-md focus:ring-primary focus:border-primary sm:text-sm text-white" placeholder="0.00" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                         <span className="text-gray-400 sm:text-sm">AUD</span>
                    </div>
                </div>
              </div>
              <div>
                 <label htmlFor="card-details" className="block text-sm font-medium text-gray-300">Credit / Debit Card *</label>
                 {/* This would be replaced by Stripe Elements in a real application */}
                 <div className="mt-1 p-3 bg-slate-800 border border-slate-700 rounded-md text-gray-400">Stripe Card Element Placeholder</div>
              </div>
              <div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-md transition-colors duration-300">
                  Pay Now
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default PaymentPage;
