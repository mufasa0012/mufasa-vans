import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; 2025 Mufasa Vans for Hire</p>
        <p>Call: +254 704 095 021 | WhatsApp | Email: mufasavansforhire@gmail.com</p>
        <div>
          <a href="#" className="text-warning me-3">Facebook</a>
          <a href="#" className="text-warning me-3">Instagram</a>
          <a href="#" className="text-warning">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
