import Hero from './home/Hero';
import ProductPreview from './home/ProductPreview';
import CaraOrder from './home/CaraOrder';
import CommunityPreview from './home/CommunityPreview';
import Testimonials from './home/Testimonials';
import CTASection from './home/CTASection';
import { useSettings } from '../hooks/useSettings';

export default function Home() {
  const settings = useSettings();

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
