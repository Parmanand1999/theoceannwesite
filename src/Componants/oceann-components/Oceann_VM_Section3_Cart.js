import React from "react";

export default function Oceann_VM_Section3_Cart(props) {
  return (
    <div className="p-4 bg-white shadow-lg section-2-cart oceann-vm-section3-carts">
      <div>
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="section3-cart-description text-[black]">{props.description}</div>
    </div>
  );
}
