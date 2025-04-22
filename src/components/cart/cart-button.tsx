import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../store/cart';

export function CartButton() {
  const items = useCart((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
      <ShoppingCart size={20} />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}