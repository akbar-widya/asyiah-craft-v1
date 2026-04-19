import { useState } from 'react';
import { ShoppingBag, Plus, Minus, Check } from 'lucide-react';
import { products } from '../data/products';
import { addToCart } from '../lib/cart';
import type { Product } from '../lib/types';

type QtyMap = Record<string, number>;
type AddedMap = Record<string, boolean>;

export default function Catalog() {
  const [qtys, setQtys] = useState<QtyMap>(() =>
    Object.fromEntries(products.map((p) => [p.id, 1]))
  );
  const [added, setAdded] = useState<AddedMap>({});

  const changeQty = (id: string, delta: number) => {
    setQtys((prev) => ({
      ...prev,
      [id]: Math.max(1, Math.min(100, (prev[id] ?? 1) + delta)),
    }));
  };

  const handleAdd = (product: Product) => {
    const qty = qtys[product.id] ?? 1;
    addToCart(product, qty);
    window.dispatchEvent(new Event('cart-updated'));
    setAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAdded((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-cream-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-warm-500 text-sm uppercase tracking-widest mb-2">Semua Produk</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-warm-900 mb-4">
            Katalog Asyiah Craft
          </h1>
          <p className="text-warm-500 text-sm max-w-md mx-auto leading-relaxed">
            Pilih produk yang kamu suka, atur jumlah, lalu masukkan ke keranjang. Kami akan
            konfirmasi harga dan stok via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-200 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h2 className="font-serif font-bold text-warm-800 text-lg mb-1">
                  {product.name}
                </h2>
                <p className="text-warm-500 text-sm leading-relaxed mb-5 flex-1">
                  {product.note}
                </p>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 bg-cream-100 rounded-full px-2 py-1">
                    <button
                      onClick={() => changeQty(product.id, -1)}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-warm-600 hover:bg-cream-200 transition-colors"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="text-sm font-bold text-warm-800 w-6 text-center">
                      {qtys[product.id] ?? 1}
                    </span>
                    <button
                      onClick={() => changeQty(product.id, 1)}
                      disabled={(qtys[product.id] ?? 1) >= 100}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-warm-600 hover:bg-cream-200 transition-colors disabled:opacity-40"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  <button
                    onClick={() => handleAdd(product)}
                    className={`flex-1 flex items-center justify-center gap-2 font-semibold py-2.5 px-4 rounded-full text-sm transition-all duration-200 ${
                      added[product.id]
                        ? 'bg-green-600 text-white'
                        : 'bg-warm-700 hover:bg-warm-800 text-cream-50'
                    }`}
                  >
                    {added[product.id] ? (
                      <>
                        <Check size={15} />
                        Ditambahkan
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={15} />
                        Tambah
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
