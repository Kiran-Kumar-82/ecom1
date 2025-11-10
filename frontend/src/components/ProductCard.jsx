import { useCart } from "../context/CartContext.jsx";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const defaultImage =
    "https://via.placeholder.com/300x200?text=No+Image+Available";

  return (
    <div className="card h-100 border-0 shadow-sm hover-card">
      <img
        src={product.image || defaultImage}
        className="card-img-top rounded-top"
        alt={product.name}
        style={{
          objectFit: "cover",
          height: "200px",
          backgroundColor: "#f8f9fa",
        }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-semibold">{product.name}</h5>
        <p className="text-muted small">{product.description}</p>
        <p className="fw-bold text-success fs-5 mb-3">₹{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="btn btn-primary px-4 py-2 rounded-pill"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
