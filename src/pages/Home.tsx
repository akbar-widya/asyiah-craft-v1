import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './home/Hero';
import ProductPreview from './home/ProductPreview';
import CaraOrder from './home/CaraOrder';
import CommunityPreview from './home/CommunityPreview';
import Testimonials from './home/Testimonials';
import CTASection from './home/CTASection';
import { useSettings } from '../hooks/useSettings';

export default function Home() {
  const settings = useSettings();
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#cara-order') {
      const timer = setTimeout(() => {
        // Sistem akan mencari elemen dengan ID 'cara-order' yang berada di dalam komponen <CaraOrder />
        const element = document.getElementById('cara-order');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <main>
      <Hero whatsappNumber={settings.whatsapp_number} />
      <ProductPreview />
      <CaraOrder />
      <CommunityPreview />
      <Testimonials />
      <CTASection whatsappNumber={settings.whatsapp_number} />
    </main>
  );
}
