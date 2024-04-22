import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { createRouter,RouterProvider } from '@tanstack/react-router'

import './index.css';

console.log('VITE_TEST_VAR', import.meta.env.VITE_TEST_VAR); // env var

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


const rootElement = document.getElementById('app')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
