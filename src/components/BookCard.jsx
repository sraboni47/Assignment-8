import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300">
      
      <img
        src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
        className="w-full h-48 object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h2 className="font-bold text-lg text-gray-800">
          {book.title}
        </h2>

        <p className="text-gray-600 text-sm">
          {book.author}
        </p>

        <Link href={`/book/${book.id}`}>
          <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}