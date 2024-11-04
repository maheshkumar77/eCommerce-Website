import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './context/Shopcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ShopContextProvider>
      <App/>
    </ShopContextProvider>
 
);

// Optional: Measure performance in your app
// reportWebVitals(console.log); // Uncomment to log results or send to an analytics endpoint
reportWebVitals();
