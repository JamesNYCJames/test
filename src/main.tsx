import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';

// Import only the components you are using directly in your routes
// For example, if you have pages for Home, Dashboard, etc., import them here:
// import Home from './pages/Home'; // Example: Adjust path if needed

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/test/' : '/'}>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Define your routes here */}
          {/* <Route index element={<Home />} />  */}
          {/* Example: Assuming you have a Home page */}
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);