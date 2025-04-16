import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import { useNavigate } from 'react-router-dom';

export function CartButton() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate('/cart')}
      className="relative p-2 text-white hover:text-gray-300 transition-colors"
    >
      <ShoppingCart className="h-6 w-6" />
      {items.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {items.length}
        </span>
      )}
      {total > 0 && (
        <span className="absolute -bottom-1 -right-1 text-xs font-medium text-white">
          ${total.toFixed(2)}
        </span>
      )}
    </button>
  );
}