import AnimatedSection from '@/components/AnimatedSection';
import ContactForm from '@/components/ContactForm';
import PageHeader from '@/components/PageHeader';
import { CheckCircle } from 'lucide-react';

const products = [
  { name: 'Jinko Solar Tiger Neo', image: 'https://renewableindustries.co/wp-content/uploads/2025/11/Jinko-Panel.png', description: 'A premium-tier solar panel from a major global manufacturer, delivering above-average efficiency and backed by long-term warranties.', features: ['Excellent efficiency', 'Strong long-term warranty', 'Premium positioning'] },
  { name: 'REA Power Fusion 2', image: 'https://renewableindustries.co/wp-content/uploads/2025/11/REA-solar-panels.png', description: 'A premium, Australian-engineered option known for strong efficiency, and long-term reliability.', features: ['25-year product warranty', 'Designed for Australian conditions', 'High-quality and reliable'] },
  { name: 'Tindo Solar Walara Series', image: 'https://renewableindustries.co/wp-content/uploads/2025/11/Walara-475-G4P-720x720-1.png', description: 'A premium Australian-engineered solar panel line built for outstanding reliability, efficiency and durability under local conditions.', features: ['Excellent durability', 'Locally manufactured & supported', 'Long-term value'] },
];

const faqs = [
    { q: 'How much can I save with solar?', a: 'Most of our customers save between $1,000 and $2,000 per year, depending on their electricity usage and system size.' },
    { q: 'How long do solar panels last?', a: 'Our panels are built to last 25 to 30 years, retaining at least 80–85% of their original efficiency over that time.' },
    { q: 'Can solar work in cloudy weather?', a: 'Absolutely! Solar panels still generate electricity on cloudy days, although output will be lower than on sunny days.' },
    { q: 'Are there government incentives for solar?', a: 'Yes. Through federal STCs, you can get upfront discounts. Many states also offer additional rebates. We will guide you through all available incentives.' },
];

const SolarPage = () => {
  return (
    <div>
      <PageHeader title="Solar Solutions" subtitle="Turn sunshine into savings! Solar lets you harness clean, renewable energy while lowering your monthly bills." />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-8 text-center">Our Solar Panel Products</h2>
              <div className="space-y-12">
                {products.map((p, i) => (
                  <div key={i} className="grid md:grid-cols-3 gap-8 items-center bg-slate-900/50 border border-slate-800 p-6 rounded-lg">
                    <img src={p.image} alt={p.name} className="rounded-lg shadow-lg w-full md:w-auto" />
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                      <p className="text-gray-400 mt-2 mb-4">{p.description}</p>
                      <ul className="space-y-2 text-sm">
                        {p.features.map((f, fi) => <li key={fi} className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 mr-2 text-primary-light"/>{f}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
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
                <ContactForm title="Speak with a Specialist!" />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarPage;
