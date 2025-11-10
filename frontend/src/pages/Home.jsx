import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container my-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">🛍️ Featured Products</h2>
        <Link to="/cart" className="btn btn-outline-primary">
          View Cart 🛒
        </Link>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {products.length === 0 ? (
          <div className="text-center text-muted fs-5">
            No products available.
          </div>
        ) : (
          products.map((p) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p._id}>
              <ProductCard product={p} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
