
import React from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, Trash } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <MainLayout>
        <div className="section container mx-auto text-center">
          <h1 className="section-title text-farm-forest-green mb-6">Your Cart</h1>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-farm-terracotta mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-2xl font-bold mb-4 text-farm-forest-green">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">It looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn-primary inline-block">
              Browse Products
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="section container mx-auto">
        <h1 className="section-title text-farm-forest-green mb-8">Your Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <div className="hidden md:flex border-b border-gray-200 pb-4 mb-4">
                <div className="w-2/5 font-bold text-farm-forest-green">Product</div>
                <div className="w-1/5 text-center font-bold text-farm-forest-green">Price</div>
                <div className="w-1/5 text-center font-bold text-farm-forest-green">Quantity</div>
                <div className="w-1/5 text-right font-bold text-farm-forest-green">Subtotal</div>
              </div>

              {/* Cart Items */}
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-center py-4 border-b border-gray-200">
                  {/* Product Info */}
                  <div className="w-full md:w-2/5 flex items-center mb-4 md:mb-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-farm-forest-green">{item.name}</h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-farm-terracotta hover:text-red-600 text-sm flex items-center mt-1"
                      >
                        <Trash size={16} className="mr-1" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="w-full md:w-1/5 flex justify-between md:justify-center items-center mb-2 md:mb-0">
                    <span className="md:hidden text-gray-600">Price:</span>
                    <span>ksh{item.price.toFixed(2)}</span>
                  </div>

                  {/* Quantity */}
                  <div className="w-full md:w-1/5 flex justify-between md:justify-center items-center mb-2 md:mb-0">
                    <span className="md:hidden text-gray-600">Quantity:</span>
                    <div className="flex items-center border rounded">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-3 py-1 border-r hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-3 py-1 min-w-[40px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 border-l hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="w-full md:w-1/5 flex justify-between md:justify-end items-center">
                    <span className="md:hidden text-gray-600">Subtotal:</span>
                    <span className="font-medium">ksh{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}

              {/* Clear Cart Button */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={clearCart}
                  className="text-farm-terracotta hover:text-red-600 flex items-center"
                >
                  <Trash size={18} className="mr-2" />
                  <span>Clear Cart</span>
                </button>
              </div>
            </div>

            {/* Continue Shopping Button */}
            <div className="mt-6">
              <Link to="/products" className="text-farm-forest-green hover:text-farm-terracotta flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-6 text-farm-forest-green">Order Summary</h2>
              
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>ksh{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>ksh{totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">Shipping & taxes calculated at checkout</p>
              </div>
              
              <button className="btn-primary w-full py-3 mb-4">
                Proceed to Checkout
              </button>
              
              <div className="text-center text-sm text-gray-500 mt-4">
                <p>We accept:</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <div className="h-6 w-10 bg-gray-200 rounded"></div>
                  <div className="h-6 w-10 bg-gray-200 rounded"></div>
                  <div className="h-6 w-10 bg-gray-200 rounded"></div>
                  <div className="h-6 w-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
