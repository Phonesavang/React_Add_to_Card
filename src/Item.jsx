import React from "react";
import { useCart } from "react-use-cart";
// import { useState } from "react";

export default function () {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();
  if (isEmpty) return <p style={{ textAlign: "center",marginBottom:"2rem" }}>Your cart is empty</p>;
  return (
    <>
      <div className="container">
        <div>
          {items.map((elm) => {
            return (
              <div key={elm.id} id={elm.id}>
                <div className="box-item">
                  <img src={elm.img} alt="" />
                  <div className="box-item-1">
                    <h4>{elm.title}</h4>
                    <p>{elm.price} $</p>
                    <div className="add">
                      <p
                        onClick={() =>
                          updateItemQuantity(elm.id, elm.quantity - 1)
                        }
                      >
                        -
                      </p>
                      <span>({elm.quantity})</span>
                      <p
                        onClick={() =>
                          updateItemQuantity(elm.id, elm.quantity + 1)
                        }
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <button onClick={() => removeItem(elm.id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sum">
        <div className="total">
          <h2>title item = ({totalUniqueItems})</h2>
          <h2>sum = {cartTotal} $</h2>
        </div>
      </div>
    </>
  );
}
