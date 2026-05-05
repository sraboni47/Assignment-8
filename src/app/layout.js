import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Book App",
  description: "Book Borrow Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-black">
        {/* NAVBAR */}
       <nav className="relative bg-gray-100 shadow px-6 py-3 flex items-center justify-between">
  
  {/* LEFT */}
  <h1 className="text-lg font-bold">BookApp</h1>

  {/* CENTER MENU */}
  <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-6 items-center">
    <Link href="/">Home</Link>
    <Link href="/all-books">All Books</Link>
    <Link href="/profile">My Profile</Link>
  </div>

  {/* RIGHT */}
  <Link
    href="/login"
    className="bg-blue-500 text-white px-4 py-1 rounded"
  >
    Login
  </Link>

</nav>

        {/* MAIN CONTENT */}
        <main className="flex-grow p-6">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-200 text-center p-4">
          <p>© 2026 Book Library</p>
          <p>Contact: example@email.com</p>
        </footer>
      </body>
    </html>
  );
}
