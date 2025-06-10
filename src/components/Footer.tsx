import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-violet-800 mt-12 py-4 text-indigo-100 text-center">
    <span className="font-semibold">Lazy Schedule App</span> &copy; {new Date().getFullYear()} &middot; All rights reserved.
  </footer>
);

export default Footer;