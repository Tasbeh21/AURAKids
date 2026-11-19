import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/c/d87f-57e2-4025-9ee6")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.products.find(
          (item) => item.id === Number(id),
        );

        setProduct(foundProduct);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="product-details">
      <div className="product-details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-details-info">
        <p>{product.category}</p>

        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>${product.price}</h2>
        <button
          onClick={() => {
            console.log("Button clicked");
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}
