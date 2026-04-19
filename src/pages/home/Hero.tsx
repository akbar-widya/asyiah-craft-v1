import { MessageCircle, ChevronDown } from 'lucide-react';

type HeroProps = {
  whatsappNumber: string;
};

export default function Hero({ whatsappNumber }: HeroProps) {
  const scrollDown = () => {
    document.getElementById('product-preview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #F9F3E3 0%, #F2E8CC 40%, #E8D9B0 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237D5A2A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto animate-fade-in">
        <div className="inline-block bg-warm-100 text-warm-600 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-warm-200 tracking-wider uppercase">
          Handmade with Love
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-warm-900 leading-tight mb-4">
          Asyiah Craft
        </h1>

        <p className="text-warm-600 text-lg sm:text-xl leading-relaxed mb-3 font-medium">
          Kerajinan Rajut Handmade Penuh Cinta
        </p>

        <p className="text-warm-500 text-sm sm:text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Setiap produk dibuat dengan tangan menggunakan benang pilihan berkualitas tinggi.
          Temukan keindahan dalam setiap simpul rajutan kami.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessageCircle size={18} />
            Pesan via WhatsApp
          </a>
          <a
            href="/catalog"
            className="flex items-center gap-2 bg-warm-700 hover:bg-warm-800 text-cream-50 font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Lihat Katalog
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center gap-2">
          <p className="text-warm-400 text-xs uppercase tracking-widest">Scroll ke bawah</p>
          <button
            onClick={scrollDown}
            className="text-warm-400 hover:text-warm-600 transition-colors animate-bounce"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
