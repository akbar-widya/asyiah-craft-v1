import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/products';

export default function ProductPreview() {
  const preview = products.slice(0, 6);

  return (
    <section id="product-preview" className="py-20 px-4 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-warm-500 text-sm uppercase tracking-widest mb-2">Koleksi Kami</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Produk Pilihan
          </h2>
          <p className="text-warm-500 max-w-md mx-auto text-sm leading-relaxed">
            Dibuat satu per satu dengan penuh perhatian dan detail. Setiap produk unik dan
            berkualitas.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {preview.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-serif font-semibold text-warm-800 text-sm sm:text-base">
                  {product.name}
                </h3>
                <p className="text-warm-500 text-xs mt-1 line-clamp-2 leading-relaxed">
                  {product.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 bg-warm-700 hover:bg-warm-800 text-cream-50 font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md"
          >
            Lihat Semua Produk
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
