import React from "react";

export default function Oceann_VM_Section16_Cart(props) {
  return (
    <div className="p-4 bg-white shadow-lg section-2-cart">
      <div>{/* <img src={props.img} alt={props.imgAlt} /> */}</div>
      <h1 className="platform-section2-cart-heading">{props.heading}</h1>
      <p className="platform-section2-cart-info">{props.info}</p>
    </div>
  );
}
