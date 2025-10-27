import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} Tour & Travel. All rights reserved.
      </p>
      <p className="text-xs mt-1">
        Built with ❤️ using React, Tailwind CSS, and Firebase.
      </p>
    </footer>
  );
}

export default Footer;
