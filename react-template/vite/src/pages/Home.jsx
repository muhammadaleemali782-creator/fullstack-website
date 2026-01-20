import ProductCard from "../components/ProductCard"

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      <ProductCard title="Shoes" price="999" />
      <ProductCard title="Watch" price="1999" />
      <ProductCard title="Bag" price="1499" />
    </div>
  )
}
