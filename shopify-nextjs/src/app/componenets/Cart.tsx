'use client';
import { useState } from 'react';
import { useCartStore } from '../store/cartStore';
import { CartItem } from '../types/cart';
import { createCheckout } from '../utils/createCheckout';
import { X, ShoppingCart } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = async () => {
    alert('Work in Progress...');
  };

  return (
    <>
      {/* Cart Toggle Button (Only on Mobile) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-2 p-3 bg-white/30 text-white rounded-full shadow-lg lg:hidden"
      >
        <ShoppingCart size={24} />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )}
      </button>

      {/* Cart Drawer (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black/50 backdrop-blur-md transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden flex justify-end`}
      >
        <div className="w-80 h-full bg-gray-900 p-5 border-l border-white/20 rounded-l-xl shadow-xl">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-red-600 hover:bg-red-800 transition duration-300"
          >
            <X size={20} className="text-white" />
          </button>

          <h2 className="text-2xl font-bold mb-4 text-white">🛒 Your Cart</h2>

          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item: CartItem) => (
                <div key={item.id} className="flex items-center justify-between bg-white/10 p-3 rounded-lg shadow">
                  <div>
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <div className="flex items-center mt-1">
                      <input
                        type="number"
                        value={item.quantity}
                        min="1"
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 p-1 text-center bg-gray-900 text-white border border-gray-500 rounded-lg"
                      />
                      <span className="ml-2 text-gray-300">x ₹{item.price}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 rounded-full bg-red-600 hover:bg-red-800 transition duration-300"
                  >
                    <X size={20} className="text-white" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-300">Your cart is empty.</p>
          )}

          {/* Checkout Button */}
          {cart.length > 0 && (
            <button
              onClick={handleCheckout}
              className="w-full bg-emerald-600 text-white font-bold py-2 mt-4 rounded-lg hover:bg-emerald-700 transition"
            >
              Proceed to Checkout
            </button>
          )}
        </div>
      </div>

      {/* Cart Sidebar (Large Screens) */}
      <div className="fixed top-4 right-4 w-80 bg-white/10 backdrop-blur-lg p-5 border border-white/20 rounded-xl shadow-xl max-h-[80vh] overflow-y-auto hidden lg:block">
        <h2 className="text-2xl font-bold mb-4 text-white">🛒 Your Cart</h2>

        {cart.length > 0 ? (
          <div className="space-y-4">
            {cart.map((item: CartItem) => (
              <div key={item.id} className="flex items-center justify-between bg-white/10 p-3 rounded-lg shadow">
                <div>
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <div className="flex items-center mt-1">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 p-1 text-center bg-gray-900 text-white border border-gray-500 rounded-lg"
                    />
                    <span className="ml-2 text-gray-300">x ₹{item.price}</span>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 rounded-full bg-red-600 hover:bg-red-800 transition duration-300"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300">Your cart is empty.</p>
        )}

        {/* Checkout Button */}
        {cart.length > 0 && (
          <button
            onClick={handleCheckout}
            className="w-full bg-emerald-600 text-white font-bold py-2 mt-4 rounded-lg hover:bg-emerald-700 transition"
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </>
  );
}
