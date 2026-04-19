import type { CartItem, Product } from './types';

const CART_KEY = 'asyiah_cart';
const MAX_QTY = 100;

export function getCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCart(cart: CartItem[]): void {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product: Product, qty: number): CartItem[] {
  const cart = getCart();
  const existing = cart.find((item) => item.product.id === product.id);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, MAX_QTY);
  } else {
    cart.push({ product, qty: Math.min(qty, MAX_QTY) });
  }
  saveCart(cart);
  return cart;
}

export function updateQty(productId: string, qty: number): CartItem[] {
  const cart = getCart();
  const item = cart.find((i) => i.product.id === productId);
  if (item) {
    item.qty = Math.max(1, Math.min(qty, MAX_QTY));
  }
  saveCart(cart);
  return cart;
}

export function removeFromCart(productId: string): CartItem[] {
  const cart = getCart().filter((i) => i.product.id !== productId);
  saveCart(cart);
  return cart;
}

export function buildWhatsAppMessage(
  items: CartItem[],
  whatsappNumber: string
): string {
  const lines = items
    .map((i) => `- ${i.product.name} x${i.qty}`)
    .join('\n');
  const message = `Halo, saya ingin pesan:\n\n${lines}\n\nMohon info:\n- stok\n- harga terbaru\n\nTerima kasih`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
