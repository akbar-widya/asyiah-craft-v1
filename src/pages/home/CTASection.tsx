import { MessageCircle } from 'lucide-react';

type CTASectionProps = {
  whatsappNumber: string;
};

export default function CTASection({ whatsappNumber }: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-warm-800">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-cream-400 text-sm uppercase tracking-widest mb-3">Siap Memesan?</p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream-100 mb-4 leading-tight">
          Hubungi Kami Sekarang
        </h2>
        <p className="text-cream-300 text-sm sm:text-base leading-relaxed mb-8">
          Punya pertanyaan tentang produk, custom order, atau ingin tahu lebih banyak?
          Kami siap membantu via WhatsApp.
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:-translate-y-0.5 text-lg"
        >
          <MessageCircle size={22} />
          Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}
