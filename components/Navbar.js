import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#3271B8] mt-2 ">
      <div className="flex space-x-4 p-2">
        <Link href="/" className="text-white hover:underline font-serif">
          होम
        </Link>
        <Link href="/" className="text-white hover:underline font-serif">
        परिचय
        </Link>
        <Link href="/" className="text-white hover:underline font-serif">
        नियम और प्रक्रिया
        </Link>
        <Link href="/results" className="text-white hover:underline font-serif">
          परिणाम
        </Link>
        <Link href="/" className="text-white hover:underline font-serif">
          नियम और प्रक्रिया
        </Link>
        <Link href="/" className="text-white hover:underline font-serif">
          संपर्क करें
        </Link>
        <Link href="/admin" className="text-white hover:underline font-serif">
          प्रशासन
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
