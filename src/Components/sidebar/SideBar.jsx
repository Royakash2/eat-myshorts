import React from "react";
import "./sidebar.css";
import backIcon from "../../assets/Images/Vector-5.svg";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, isClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="sidebar">
      <button className="back_btn font-style" onClick={() => isClose(true)}>
        <div>
          <img className="img-fluid" src={backIcon} alt="" />
          <span className="fw-semibold p-2">Back</span>
        </div>
      </button>
      <div className='add-to-cart-content font-style'>{children}</div>
      <div className="checkout-info w-100 px-2">
      <p className='subtotal d-flex justify-content-between'><span>Subtotal:</span> <span>$0</span></p>
      <Link to='checkout'> <button onClick={() => isClose(true)} className='checkout-btn fw-semibold w-100 p-2'>Checkout</button></Link>
      <p className="shipping-text text-center">Shipping and discount codes are added at checkout</p>
      </div>
    </div>
  );
};

export default SideBar;
