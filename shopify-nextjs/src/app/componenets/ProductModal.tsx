import { X } from 'lucide-react';
import { ShopifyProduct } from '../types/shopify';

interface ProductModalProps {
  product: ShopifyProduct | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          <X size={24} />
        </button>

       
        <img 
          src={product.images?.edges?.[0]?.node.url || '/placeholder.jpg'} 
          alt={product.title} 
          className="w-full h-64 object-cover rounded-md"
        />

       
        <h2 className="text-2xl font-bold text-gray-900 mt-4">{product.title}</h2>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-lg font-bold text-blue-600 mt-2">
          ${product.variants?.edges?.[0]?.node.price.amount ?? 'N/A'}
        </p>
      </div>
    </div>
  );
}
