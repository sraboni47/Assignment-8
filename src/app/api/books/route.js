import clientPromise from "@/lib/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("bookDB");

  const books = await db.collection("books").find().toArray();

  return Response.json(books);
}