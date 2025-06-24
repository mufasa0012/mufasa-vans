import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';            // Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js';        // Enables Navbar toggler, dropdowns, etc.
import 'bootstrap-icons/font/bootstrap-icons.css';         // Bootstrap Icons
=======
import 'bootstrap/dist/css/bootstrap.min.css'; // already likely added
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ this enables toggler
import 'bootstrap-icons/font/bootstrap-icons.css';
>>>>>>> 9ce5eece53e82ac57f3680925f259fc8f28b68f6

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
