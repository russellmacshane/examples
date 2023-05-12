import React from "react";

type RussFooterProps = {
  background?: string;
};

const RussFooter = ({ background = "bg-gray-800" }: RussFooterProps) => {
  return (
    <footer className={background}>
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 flex-grow">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
          <div className="px-5 py-2">
            <a href="/" className="text-white hover:text-white">
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="/about" className="text-white hover:text-white">
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a href="/contact" className="text-white hover:text-white">
              Contact
            </a>
          </div>
        </nav>
        <p className="mt-8 text-center text-base text-white">
          &copy; 2023 My Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default RussFooter;
