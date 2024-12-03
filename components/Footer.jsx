import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10">
      <nav className="grid grid-flow-col gap-4">
        Nav Links go here
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          Social Buttons go here
        </div>
      </nav>
      <aside className="grid-flow-col items-center">
        <p>Copyright {new Date().getFullYear()} - All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
