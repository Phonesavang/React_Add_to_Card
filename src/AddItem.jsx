import React from "react";
import data from "./data";
import { useState } from "react";
import { useCart } from "react-use-cart";
export default function AddItem() {
  const { addItem } = useCart();
  const [item, setItem] = useState(data);
  console.log(addItem);
  return (
    <div>
      <div className="box">
        {item.map((elm) => {
          return (
            <div className="styleItem" id={elm.id} key={elm.id}>
              <div>
                <h3>{elm.title}</h3>
                <img src={elm.img} alt={elm.title} />
                <h3>{elm.price} $</h3>
                <button onClick={() => addItem(elm)}>AddItem</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
