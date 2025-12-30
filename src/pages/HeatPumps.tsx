import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import PageHeader from '@/components/PageHeader';
import { CheckCircle } from 'lucide-react';

const faqs = [
    { q: 'What is a heat pump?', a: 'A heat pump is an energy-efficient system that extracts heat from the air, ground, or water to provide heating, cooling, or hot water.' },
    { q: 'Are heat pumps energy-efficient?', a: 'Yes. Heat pumps can deliver up to 3–4 times more energy than the electricity they consume, making them one of the most efficient solutions available.' },
    { q: 'How long do heat pumps last?', a: 'With minimal maintenance, a heat pump typically lasts 10–15 years. Manufacturers usually provide 5–10 year warranties.' },
    { q: 'Can I use a heat pump with solar panels?', a: 'Yes. Heat pumps complement solar PV systems perfectly, using excess solar energy to heat water and maximize your renewable energy use.' },
];

const HeatPumpsPage = () => {
  return (
    <div>
      <PageHeader title="Heat Pumps" subtitle="Efficient and consistent heating and cooling for your home. Designed for comfort and sustainability." />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8 text-center">Our Heat Pump Products</h2>
              <div className="grid md:grid-cols-3 gap-8 items-center bg-slate-900/50 border border-slate-800 p-6 rounded-lg">
                  <img src="https://renewableindustries.co/wp-content/uploads/2025/11/istore-270-L-.png" alt="iStore Heat Pump" className="rounded-lg shadow-lg w-full md:w-auto" />
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-white">iStore Heat Pump</h3>
                    <p className="text-gray-400 mt-2 mb-4">An energy-efficient hot water system that extracts heat from the air to provide reliable, eco-friendly hot water while reducing electricity usage.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 mr-2 text-primary-light"/>Up to 70% energy savings</li>
                      <li className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 mr-2 text-primary-light"/>Solar PV compatible</li>
                      <li className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 mr-2 text-primary-light"/>Eligible for government rebates</li>
                    </ul>
                  </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-lg cursor-pointer group">
                            <summary className="font-semibold text-white list-none flex justify-between items-center">{faq.q} <span className="transition-transform duration-300 group-open:rotate-45">+</span></summary>
                            <p className="text-gray-400 mt-2 pt-2 border-t border-slate-800">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <AnimatedSection>
                <ContactForm title="Get a Quote!" />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatPumpsPage;
