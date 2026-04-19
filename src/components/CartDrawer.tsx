import { useEffect, useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import type { CartItem } from '../lib/types';
import { getCart, updateQty, removeFromCart, buildWhatsAppMessage } from '../lib/cart';
import { supabase } from '../lib/supabase';

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [waNumber, setWaNumber] = useState('62895325673255');

  useEffect(() => {
    setItems(getCart());
    const update = () => setItems(getCart());
    window.addEventListener('cart-updated', update);
    return () => window.removeEventListener('cart-updated', update);
  }, [open]);

  useEffect(() => {
    if (!supabase) return;

    supabase
      .from('settings')
      .select('whatsapp_number')
      .eq('id', 1)
      .maybeSingle()
      .then(({ data }) => {
        if (data?.whatsapp_number) setWaNumber(data.whatsapp_number);
      });
  }, []);

  const handleQty = (id: string, qty: number) => {
    const updated = updateQty(id, qty);
    setItems(updated);
    window.dispatchEvent(new Event('cart-updated'));
  };

  const handleRemove = (id: string) => {
    const updated = removeFromCart(id);
    setItems(updated);
    window.dispatchEvent(new Event('cart-updated'));
  };

  const handleOrder = () => {
    if (items.length === 0) return;
    const url = buildWhatsAppMessage(items, waNumber);
    window.open(url, '_blank');
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream-50 z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-cream-200">
          <div className="flex items-center gap-2 text-warm-800">
            <ShoppingBag size={20} />
            <h2 className="font-serif font-bold text-lg">Keranjang</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-cream-200 transition-colors text-warm-600"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <ShoppingBag size={48} className="text-cream-400" />
              <p className="text-warm-500 text-sm">Keranjang masih kosong.</p>
              <button
                onClick={onClose}
                className="text-sm text-warm-600 underline underline-offset-2"
              >
                Lihat Katalog
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-3 items-start bg-white rounded-xl p-3 shadow-sm border border-cream-200"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-warm-800 leading-tight line-clamp-2">
                      {item.product.name}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleQty(item.product.id, item.qty - 1)}
                        className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center text-warm-600 hover:bg-cream-200 transition-colors"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="text-sm font-bold text-warm-800 w-6 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => handleQty(item.product.id, item.qty + 1)}
                        disabled={item.qty >= 100}
                        className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center text-warm-600 hover:bg-cream-200 transition-colors disabled:opacity-40"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.product.id)}
                    className="p-1.5 text-red-400 hover:text-red-600 transition-colors flex-shrink-0"
                    aria-label="Hapus"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-cream-200 bg-cream-50">
            <p className="text-xs text-warm-500 mb-3 text-center">
              Harga dikonfirmasi via WhatsApp setelah pesan dikirim.
            </p>
            <button
              onClick={handleOrder}
              className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition-colors duration-200 shadow-md"
            >
              <MessageCircle size={18} />
              Pesan via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
