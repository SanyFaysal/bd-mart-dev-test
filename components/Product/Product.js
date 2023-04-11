import Image from "next/image";
import React, { useState } from "react";

export default function Product({ item }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartQuantity, setCartQuantity] = useState();
  const handleAddToCart = (event, productId) => {
    setSelectedProduct(productId);
  };
  const handleQunatityIncrement = (id) => {
    toast(id);
  };
  const handleQunatityDecrement = (id) => {
    toast(id);
  };
  return (
    <section key={item._id} className="product-link">
      <div className="product p-3">
        <picture>
          <Image
            src={item.img}
            layout="responsive"
            width={1000}
            height={1000}
          />

        </picture>
        <div className="main-detail ">
          <div className="item-name">{item.name}</div>
        </div>
        <div className="item-price">{item.price}.00$</div>
        <div className="old-price">
          <del>{item.oldPrice}.00$</del>
        </div>
        <div className="save-price">{item.savedPrice}.00$</div>
        <div id="cart-btn" className="cart-btn">
          {selectedProduct === item._id ? (
            <div className="plus-btn">
              <span
                onClick={() => handleQunatityDecrement(item?._id)}
                className="remove-btn"
              >
                <i className="fas fa-minus"></i>
              </span>
              <span id="cart-num-3">1</span>

              <span
                onClick={() => handleQunatityIncrement(item?._id)}
                className="add-btn"
              >
                <i className="fas fa-plus"></i>
              </span>
            </div>
          ) : (
            <button onClick={(event) => handleAddToCart(event, item._id)}>
              Add to Cart<i className="far plus-ico fa-plus-square"></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
