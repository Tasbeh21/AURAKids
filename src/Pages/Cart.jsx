import { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>

      <div className="cart-container">

        <div className="cart-items">

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((product) => (
              <div className="cart-item" key={product.id}>

                <img
                  src={product.thumbnail}
                  alt={product.title}
                />

                <div>
                  <h2>{product.title}</h2>
                  <p>Quantity: 1</p>
                  <p>${product.price}</p>
                </div>

              </div>
            ))
          )}

        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>

            <span>
              $
              {cart.reduce(
                (total, product) => total + product.price,
                0
              )}
            </span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>${cart.length > 0 ? 100 : 0}</span>
          </div>

          <hr />

          <div className="summary-row total">
            <span>Total</span>

            <span>
              $
              {cart.reduce(
  (total, product) => total + product.price,
  0
) + (cart.length > 0 ? 100 : 0)}
            </span>
          </div>

          <button className="checkout-button">
            Proceed to Payment
          </button>
        </div>

      </div>
    </section>
  );
}