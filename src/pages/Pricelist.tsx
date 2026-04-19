import { useEffect, useState } from 'react';
import { ImageOff } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useSettings } from '../hooks/useSettings';

export default function Pricelist() {
  const settings = useSettings();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    supabase
      .from('settings')
      .select('pricelist_image_url')
      .eq('id', 1)
      .maybeSingle()
      .then(({ data }) => {
        setImageUrl(data?.pricelist_image_url ?? null);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-warm-500 text-sm uppercase tracking-widest mb-2">Harga Terkini</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Pricelist
          </h1>
          <p className="text-warm-500 text-sm leading-relaxed">
            Harga dapat berubah sewaktu-waktu. Konfirmasi harga terbaru via WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-cream-200 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-2 border-warm-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt="Pricelist Asyiah Craft"
              className="w-full h-auto object-contain"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-64 gap-4 text-center px-6">
              <ImageOff size={48} className="text-cream-400" />
              <div>
                <p className="font-semibold text-warm-700 mb-1">Pricelist belum tersedia</p>
                <p className="text-warm-500 text-sm">
                  Hubungi kami via WhatsApp untuk mendapatkan informasi harga terbaru.
                </p>
              </div>
              <a
                href={`https://wa.me/${settings.whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Chat WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
