"use client";

import { useState } from "react";
import { books } from "@/lib/data";
import BookCard from "@/components/BookCard";

export default function AllBooks() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
  
  {/* Search */}
  <input
    type="text"
    placeholder="Search books..."
    className="border p-3 w-full mb-6 rounded-lg shadow-sm"
    onChange={(e) => setSearch(e.target.value)}
  />

  {/* Books */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {filteredBooks.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>

</div>
    
  );
}