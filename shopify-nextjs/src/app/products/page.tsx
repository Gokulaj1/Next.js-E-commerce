'use client';
import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/fetchProducts';
import { ShopifyProduct } from '../types/shopify';
import Cart from '../componenets/Cart';
import AddToCartButton from '../componenets/AddToCartButton';
import ProductModal from '../componenets/ProductModal'; // ✅ Import updated modal
import { Loader2, Search } from 'lucide-react'; 

export default function ProductsPage() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<ShopifyProduct | null>(null); // ✅ Store entire product

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const result = await fetchProducts(searchTerm);
        setProducts(result);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [searchTerm]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-center mb-6 text-white">🛍️ Explore Our Products</h1>

      {/* 🔍 Search Bar */}
      <div className="flex items-center gap-2 w-full max-w-md mx-auto bg-white border rounded-lg p-2 shadow-md">
        <Search className="text-gray-500" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 outline-none text-gray-700"
        />
      </div>

      {/* 🔄 Loading Indicator */}
      {loading && (
        <div className="flex justify-center mt-8">
          <Loader2 className="animate-spin text-blue-500 w-8 h-8" />
        </div>
      )}

      {/* 🛒 Product List */}
      {!loading && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product: ShopifyProduct) => (
            <div
              key={product.id}
              className="bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg p-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* 🖼 Clickable Image */}
              <img
                src={product.images?.edges?.[0]?.node.url || '/placeholder.jpg'}
                alt={product.title}
                className="w-full h-56 object-cover rounded-md mb-4 cursor-pointer"
                onClick={() => setSelectedProduct(product)} // ✅ Pass entire product
              />
              <h2 className="text-xl font-semibold text-gray-900">{product.title}</h2>
              <p className="text-black line-clamp-2 font-semibold">{product.description}</p>
              <p className="text-lg font-bold text-blue- mt-2">
                ${product.variants?.edges?.[0]?.node.price.amount ?? 'N/A'}
              </p>
              <div className="mt-4 flex justify-center">
                <AddToCartButton product={product} />
              </div>
            </div>
          ))}
        </div>
      ) : !loading ? (
        <p className="text-center text-red-500 text-lg mt-6">No products found.</p>
      ) : null}

      {/* 🛒 Floating Cart */}
      <Cart />

      {/* 🖼 Show Modal if a Product is Selected */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}
