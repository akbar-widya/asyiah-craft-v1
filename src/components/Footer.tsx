import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-warm-800 text-cream-200 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-lg font-bold text-cream-100 mb-2">Asyiah Craft</h3>
          <p className="text-sm text-cream-300 leading-relaxed">
            Kerajinan rajut handmade penuh cinta, dibuat dengan tangan dari bahan pilihan
            berkualitas tinggi.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-cream-100 mb-3 text-sm uppercase tracking-wider">
            Navigasi
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Beranda', to: '/' },
              { label: 'Katalog', to: '/catalog' },
              { label: 'Pricelist', to: '/pricelist' },
              { label: 'Komunitas', to: '/community' },
              { label: 'Tentang Kami', to: '/about' },
            ].map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-cream-300 hover:text-cream-100 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-cream-100 mb-3 text-sm uppercase tracking-wider">
            Kontak
          </h4>
          <p className="text-sm text-cream-300">
            Order & pertanyaan via WhatsApp
          </p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-full transition-colors"
          >
            Chat Sekarang
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-warm-600 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-cream-400">
        <p>© 2024 Asyiah Craft. Semua hak dilindungi.</p>
        <p className="flex items-center gap-1">
          Dibuat dengan <Heart size={12} className="text-red-400 fill-red-400" /> oleh Asyiah
        </p>
      </div>
    </footer>
  );
}
