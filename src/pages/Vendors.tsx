import AnimatedSection from '@/components/AnimatedSection';
import PageHeader from '@/components/PageHeader';

const interestFreeVendors = [
    { name: 'Brighte', logo: 'https://renewableindustries.co/wp-content/uploads/2025/07/BrighteLogo_featured_Supplied_250x250-e1762403668114.png' },
    { name: 'Plenti', logo: 'https://renewableindustries.co/wp-content/uploads/2025/07/Logo-Plenti.png' },
    { name: 'Humm', logo: 'https://renewableindustries.co/wp-content/uploads/2025/11/Humm_Logo-e1762404818426.png' },
];

const greenLoanVendors = [
    { name: 'Brighte', logo: 'https://renewableindustries.co/wp-content/uploads/2025/07/BrighteLogo_featured_Supplied_250x250-e1762403668114-1024x296.png' },
    { name: 'Plenti', logo: 'https://renewableindustries.co/wp-content/uploads/2025/07/Logo-Plenti.png' },
    { name: 'Handypay', logo: 'https://renewableindustries.co/wp-content/uploads/2025/07/HandypayLogo.png' },
];

const VendorsPage = () => {
  return (
    <div>
      <PageHeader title="Our Vendors & Financing" subtitle="Make the switch to renewable energy more affordable with our flexible financing options." />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-8">0% Interest Loans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {interestFreeVendors.map((vendor, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-lg flex justify-center items-center h-40">
                <img src={vendor.logo} alt={vendor.name} className="max-h-20 max-w-full" />
              </div>
            ))}
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-8">Green Loans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {greenLoanVendors.map((vendor, index) => (
              <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-lg flex justify-center items-center h-40">
                <img src={vendor.logo} alt={vendor.name} className="max-h-20 max-w-full" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default VendorsPage;
