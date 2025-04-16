import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { loadStripe } from '@stripe/stripe-js';

export interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  processPayment: () => Promise<void>;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => set((state) => ({ 
        items: [...state.items, item],
        total: state.total + item.price
      })),
      removeItem: (id) =>
        set((state) => {
          const itemToRemove = state.items.find(item => item.id === id);
          return {
            items: state.items.filter((item) => item.id !== id),
            total: itemToRemove ? state.total - itemToRemove.price : state.total
          };
        }),
      clearCart: () => set({ items: [], total: 0 }),
      processPayment: async () => {
        try {
          console.log('Starting payment process...');
          const items = get().items;
          const total = items.reduce((sum, item) => sum + item.price, 0);
          
          console.log('Cart items:', items);
          console.log('Total amount:', total);

          if (items.length === 0) {
            throw new Error('Cart is empty');
          }

          // Check if Stripe public key is available
          const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
          if (!stripePublicKey) {
            throw new Error('Stripe public key is not configured');
          }

          // Initialize Stripe
          const stripe = await loadStripe(stripePublicKey);
          if (!stripe) {
            throw new Error('Failed to load Stripe');
          }

          console.log('Creating checkout session...');
          const response = await fetch('http://localhost:3001/api/create-checkout-session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              items: items.map(item => ({
                ...item,
                image: item.image || 'https://via.placeholder.com/150'
              })),
              total,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error('Server error:', errorData);
            throw new Error(errorData.details || 'Payment failed');
          }

          const session = await response.json();
          console.log('Checkout session created:', session);

          if (!session.id) {
            throw new Error('Invalid session ID received from server');
          }

          // Redirect to Stripe Checkout
          const result = await stripe.redirectToCheckout({
            sessionId: session.id,
          });

          if (result.error) {
            console.error('Stripe redirect error:', result.error);
            throw new Error(result.error.message);
          }

          // If we get here, the redirect was successful
          console.log('Redirected to Stripe checkout');
        } catch (error) {
          console.error('Payment process error:', error);
          throw error;
        }
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);