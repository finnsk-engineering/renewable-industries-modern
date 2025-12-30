import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutUsPage from './pages/AboutUs';
import ServicesPage from './pages/Services';
import BlogPage from './pages/Blog';
import GoHardAndGoBig from './pages/posts/GoHardAndGoBig';
import AustraliaBestSolar from './pages/posts/AustraliaBestSolar';
import BatteryStorage from './pages/posts/BatteryStorage';
import ContactPage from './pages/Contact';
import EmploymentPage from './pages/Employment';
import OurReachPage from './pages/OurReach';
import PaymentPage from './pages/Payment';
import ProductsPage from './pages/Products';
import SolarPage from './pages/Solar';
import BatteriesPage from './pages/Batteries';
import HeatPumpsPage from './pages/HeatPumps';
import VendorsPage from './pages/Vendors';
import WhoWeArePage from './pages/WhoWeAre';
import MeetTheTeamPage from './pages/MeetTheTeam';
import WaterFiltrationPage from './pages/WaterFiltration';
import InsightsPage from './pages/Insights';
import NotFoundPage from './pages/NotFound';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-services" element={<ServicesPage />} />
        
        {/* Blog related routes */}
        <Route path="/category/blog" element={<BlogPage />} />
        <Route path="/author/rob" element={<BlogPage />} />
        <Route path="/industry-news" element={<BlogPage />} />
        <Route path="/go-hard-and-go-big-how-australia-got-solar-panels-onto-one-in-every-three-houses" element={<GoHardAndGoBig />} />
        <Route path="/australia-has-the-best-solar-resources-in-the-world-we-should-learn-how-to-make-our-own-panels" element={<AustraliaBestSolar />} />
        <Route path="/battery-storage-comes-to-the-fore-as-solar-power-generation-reaches-new-highs-across-australia" element={<BatteryStorage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/employment" element={<EmploymentPage />} />
        <Route path="/our-reach" element={<OurReachPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/solar" element={<SolarPage />} />
        <Route path="/batteries" element={<BatteriesPage />} />
        <Route path="/heat-pumps" element={<HeatPumpsPage />} />
        <Route path="/our-vendors" element={<VendorsPage />} />
        
        {/* Placeholder Pages */}
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
        <Route path="/water-filtration" element={<WaterFiltrationPage />} />
        <Route path="/insights" element={<InsightsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
