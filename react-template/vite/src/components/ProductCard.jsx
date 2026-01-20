export default function ProductCard({ title, price }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src="https://via.placeholder.com/200" className="w-full rounded" />
      <h2 className="mt-2 font-bold text-lg">{title}</h2>
      <p className="text-green-600 font-semibold">₹{price}</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  )
}
