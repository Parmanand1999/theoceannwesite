import React from 'react'

export default function OceannOperationsSection3Cart(props) {
  return (
    <div className="p-4 bg-white shadow-lg section-2-cart oceann-analytics-section3-carts">
      <div>
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="section3-cart-description">{props.description}</div>
    </div>
  )
}
