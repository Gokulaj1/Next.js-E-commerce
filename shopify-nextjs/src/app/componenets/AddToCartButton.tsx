
'use client';
import { useCartStore } from '../store/cartStore';
import { ShopifyProduct } from '../types/shopify';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  product: ShopifyProduct;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCartStore();

  return (
    <button
      onClick={() =>
        addToCart({
          id: product.id,
          title: product.title,
          price: product.variants.edges[0].node.price.amount,
          quantity: 1,
        })
      }
      className="flex items-center gap-2 bg-gradient-to-r from-blue-400 to-yellow-600 text-white px-3 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
    >
      <ShoppingCart size={20} className="text-white" />
      Add to Cart
    </button>
  );
}
