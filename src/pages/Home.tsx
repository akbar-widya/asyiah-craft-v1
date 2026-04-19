import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Hero from './home/Hero';
import ProductPreview from './home/ProductPreview';
import CaraOrder from './home/CaraOrder';
import CommunityPreview from './home/CommunityPreview';
import Testimonials from './home/Testimonials';
import CTASection from './home/CTASection';

export default function Home() {
  const [waNumber, setWaNumber] = useState('6281234567890');

  useEffect(() => {
    supabase
      .from('settings')
      .select('whatsapp_number')
      .eq('id', 1)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.whatsapp_number) setWaNumber(data.whatsapp_number);
      });
  }, []);

  return (
    <main>
      <Hero whatsappNumber={waNumber} />
      <ProductPreview />
      <CaraOrder />
      <CommunityPreview />
      <Testimonials />
      <CTASection whatsappNumber={waNumber} />
    </main>
  );
}
