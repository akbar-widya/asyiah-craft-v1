export type Product = {
  id: string;
  name: string;
  note: string;
  image: string;
};

export type CartItem = {
  product: Product;
  qty: number;
};
