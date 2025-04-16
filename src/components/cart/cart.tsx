import { useCartStore } from '../../store/cart';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { ThreeDBackground } from '../background/3d-background';
import { Trash2, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Cart() {
  const { items, removeItem, clearCart, total, processPayment } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    try {
      setIsProcessing(true);
      await processPayment();
    } catch (error) {
      console.error('Payment failed:', error);
      // TODO: Show error message to user
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <ThreeDBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Your Cart</h1>
          <p className="text-xl text-gray-300">Review and manage your selected courses</p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xl text-gray-300 mb-8">Your cart is empty</p>
            <Link to="/">
              <Button className="bg-blue-500 hover:bg-blue-400 text-white font-medium">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold text-white">${item.price}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-400 hover:text-red-300"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-white/20"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">Total</h3>
                <span className="text-2xl font-bold text-white">${total}</span>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <Button
                  variant="outline"
                  className="border-red-500 text-red-400 hover:bg-red-500/10"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
                <Button 
                  className="bg-blue-500 hover:bg-blue-400 text-white font-medium"
                  onClick={handleCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Proceed to Checkout'
                  )}
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
} 