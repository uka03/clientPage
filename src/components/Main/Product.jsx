import "../../style/main/Product.css";
import cart from "../../img/shopping-cart.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Product(prop) {
  const { login } = prop;

  const navigate = useNavigate();
  function productpage() {
    navigate(`/product/${prop.id}`);
    console.log("working");
  }
  function basketHandler() {
    let basket = [prop.id];
    let temp = JSON.parse(localStorage.getItem("basket"));
    if (temp) {
      basket = [...temp, prop.id];
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  }
  function alerthandler() {
    alert("та нэвтэрч орох хэрэгтэй ????");
  }
  return (
    <div className="pro">
      <div className="product" onClick={productpage}>
        <img src={prop.img} alt="" />
        <div className="productContent">
          <h5 className="productTitle">{prop.name}</h5>
          <p className="productName">{prop.category}</p>
          <p className="productPrice">${prop.price}</p>
        </div>
      </div>
      <button
        className="productCart"
        onClick={login ? basketHandler : alerthandler}
      >
        <img src={cart} alt="" />
      </button>
    </div>
  );
}
