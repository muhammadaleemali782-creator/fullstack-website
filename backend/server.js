const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

let products = [
  { title: "Shoes", price: 999, img: "https://source.unsplash.com/300x200/?shoes" },
  { title: "Watch", price: 1999, img: "https://source.unsplash.com/300x200/?watch" },
  { title: "Bag", price: 1499, img: "https://source.unsplash.com/300x200/?bag" }
]

// GET products
app.get("/products", (req, res) => {
  res.json(products)
})

// ADD product
app.post("/products", (req, res) => {
  products.push(req.body)
  res.json({ success: true })
})

// DELETE product
app.delete("/products/:index", (req, res) => {
  products.splice(req.params.index, 1)
  res.json({ success: true })
})

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000")
})
