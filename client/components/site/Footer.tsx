import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-20 py-6">
      <div className="container-section flex flex-col md:flex-row items-center md:items-start justify-between gap-3 text-sm text-white/70">
        <p>© 2025 Salman Abid | All Rights Reserved</p>
        <p>
          Designed & Built by <span className="text-white font-semibold">Salman Abid</span>
        </p>
      </div>
    </footer>
  );
}
