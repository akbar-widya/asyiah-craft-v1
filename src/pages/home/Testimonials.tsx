import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'Tasnya bagus banget! Rajutannya rapi dan bahannya berkualitas. Sudah dapat banyak pujian dari teman-teman. Pasti beli lagi.',
    name: 'Siti Rahayu',
    location: 'Jakarta',
  },
  {
    text: 'Pengiriman cepat, packing rapi, dan produk sesuai ekspektasi. Pouchnya cantik banget, warnanya persis seperti foto. Highly recommended!',
    name: 'Dewi Anggraeni',
    location: 'Surabaya',
  },
  {
    text: 'Beli gantungan kunci untuk oleh-oleh dan semua pada suka. Harganya terjangkau tapi kualitasnya premium. Terima kasih Asyiah Craft!',
    name: 'Rahma Putri',
    location: 'Bandung',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 px-4"
      style={{ background: 'linear-gradient(180deg, #EAD9CB 0%, #F2E8CC 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-warm-500 text-sm uppercase tracking-widest mb-2">Kata Mereka</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Testimoni Pelanggan
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200 relative"
            >
              <Quote
                size={32}
                className="text-cream-300 fill-cream-300 absolute top-4 right-4"
              />
              <p className="text-warm-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-warm-200 flex items-center justify-center text-warm-700 font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-warm-800 text-sm">{t.name}</p>
                  <p className="text-warm-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
