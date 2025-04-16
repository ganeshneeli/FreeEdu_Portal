# FreeEdu - Online Learning Platform

A modern online learning platform built with React, TypeScript, and Tailwind CSS.

## Features

- Course categories and listings
- Live mentoring sessions
- Shopping cart functionality
- User authentication
- Responsive design
- Beautiful animations

## Deployment Instructions

### Deploying to Netlify

1. Push your code to a GitHub repository
2. Go to [Netlify](https://www.netlify.com/) and sign in
3. Click "Add new site" > "Import an existing project"
4. Connect to your GitHub repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Environment Variables

Make sure to set up the following environment variables in your Netlify dashboard:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Supabase
- Stripe
- Three.js 