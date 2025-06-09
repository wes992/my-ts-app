import Link from 'next/link';
import React from 'react';

const Navbar = ({ }) => {

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href="/" className="text-xl font-bold">
        World Wise Web
      </Link>
      <div className="flex gap-4">
        <Link href="/services" className="hover:underline">
          Services
        </Link>
        <Link href="/book" className="hover:underline">
          Book
        </Link>
        <Link href="/admin" className="hover:underline">
          Admin
        </Link>
      </div>
    </nav>
  )
}

export { Navbar }