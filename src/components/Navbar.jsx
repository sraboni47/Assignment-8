"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-100 shadow px-6 py-3 relative">
      
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-lg font-bold">BookApp</h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6">
          <Link href="/">Home</Link>
          <Link href="/all-books">All Books</Link>
          <Link href="/profile">My Profile</Link>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Login
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-3 bg-white p-4 shadow rounded">
          <Link href="/">Home</Link>
          <Link href="/all-books">All Books</Link>
          <Link href="/profile">My Profile</Link>
        </div>
      )}
    </nav>
  );
}