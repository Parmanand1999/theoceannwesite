import React from "react";

export default function Platform_Section3_Carts(props) {
  return (
    // <div className="p-4 bg-white shadow-lg section-2-cart">
    //   <div className="flex items-center flex-col">
    //     <div className="flex items-center">
    //       <div className="section-3-img">
    //         <img src={props.img} alt={props.imgAlt} />
    //       </div>
    //       <div className="platform-section3-cart-heading">{props.heading}</div>
    //     </div>
    //     <div>
    //     Harnessing the latest tech trends to enhance and simplify maritime commercial operations.
    //     </div>
    //   </div>
    // </div>

    <div className="p-4 bg-white shadow-lg section-2-cart">
      <div className="flex items-center">
        <div className="section-3-img ">
          <img src={props.img} alt={props.imgAlt} />
        </div>
        <div className="flex flex-col items-start ml-0">
          <div className="platform-section3-cart-heading">
            <h1>{props.heading}</h1>
          </div>

          <h4>{props.info}</h4>
        </div>
      </div>
    </div>
  );
}
