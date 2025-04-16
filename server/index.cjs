const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
const envPath = path.resolve(__dirname, '../.env');
console.log('Loading .env file from:', envPath);
dotenv.config({ path: envPath });

// Verify environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const clientUrl = process.env.CLIENT_URL;

if (!stripeSecretKey) {
  console.error('ERROR: STRIPE_SECRET_KEY is not set in .env file');
  process.exit(1);
}

if (!stripeSecretKey.startsWith('sk_test_')) {
  console.error('ERROR: Invalid Stripe secret key format. Key should start with "sk_test_"');
  console.error('Current key:', stripeSecretKey);
  process.exit(1);
}

if (!clientUrl) {
  console.error('ERROR: CLIENT_URL is not set in .env file');
  process.exit(1);
}

console.log('Environment variables loaded:');
console.log('STRIPE_SECRET_KEY:', stripeSecretKey ? 'Present' : 'Missing');
console.log('CLIENT_URL:', clientUrl);

const stripe = require('stripe')(stripeSecretKey);

// Test Stripe connection
stripe.customers.list({ limit: 1 })
  .then(() => {
    console.log('Successfully connected to Stripe API');
  })
  .catch(error => {
    console.error('Failed to connect to Stripe API:', error.message);
    process.exit(1);
  });

const app = express();
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    console.log('=== New Payment Request ===');
    console.log('Request body:', JSON.stringify(req.body, null, 2));
    
    const { items, total } = req.body;

    if (!items || items.length === 0) {
      console.log('No items in cart');
      return res.status(400).json({ error: 'No items in cart' });
    }

    // Validate items
    items.forEach(item => {
      if (!item.title || !item.price) {
        console.log('Invalid item:', item);
        throw new Error('Invalid item data');
      }
    });

    console.log('Creating Stripe checkout session...');
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            images: [item.image || 'https://via.placeholder.com/150'],
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: `${clientUrl}/success`,
      cancel_url: `${clientUrl}/cart`,
      metadata: {
        items: JSON.stringify(items.map(item => ({ id: item.id, title: item.title })))
      }
    });

    console.log('Successfully created Stripe session:', session.id);
    console.log('Session URL:', session.url);
    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error('=== Payment Error ===');
    console.error('Error type:', error.type);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Raw error:', error);
    
    res.status(500).json({ 
      error: 'Payment processing failed',
      details: error.message,
      type: error.type
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Stripe key loaded:', stripeSecretKey ? 'Yes' : 'No');
}); 