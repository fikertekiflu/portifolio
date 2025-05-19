import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // Your existing App component
import './index.css'; // Your global styles, including Tailwind imports

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap your entire App component with BrowserRouter */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
