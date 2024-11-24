import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-4">
      <aside className="grid-flow-col items-center">
        <p>Copyright {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
