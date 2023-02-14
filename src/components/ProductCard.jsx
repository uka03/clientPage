import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../App";
import "../style/ProductCard.css";

import Quantity from "./Quantity";
export default function ProductCard(prop) {
  const { data } = useContext(DataContext);

  const [desc, setdesc] = useState(true);
  const test = useParams();

  const [count, setCount] = useState(0);

  function counter(e, stock) {
    let oper = e.target.innerText;

    if (oper === "+" && count < stock) {
      setCount(count + 1);
    } else if (oper === "-" && count > 0) {
      setCount(count - 1);
    }
  }
  function basketHandler(id) {
    let login = JSON.parse(localStorage.getItem("login"));
    if (login) {
      let idGroup = [];
      for (let i = 0; i < count; i++) {
        // const element = array[index];
        console.log(id);
        idGroup.push(id);
      }
      let basket = JSON.parse(localStorage.getItem("basket"));
      basket && idGroup.push(...basket);
      localStorage.setItem("basket", JSON.stringify(idGroup));
    }
  }

  return data.map((product, index) => {
    if (product.id === test.id) {
      return (
        <div className="ProductCard container" key={index}>
          <p className="url">
            home{">"}all{">"}4-door flex
          </p>
          <div className="productCardMain">
            <div className="productCardImg">
              <img src={product.image} alt="" />
              <div className="proSmallImg">
                {/* gallery */}
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
              </div>
            </div>
            <div className="productCardContent">
              <h1 className="productCardName">{product.name}</h1>
              <p className="productCardPrice">${product.price}</p>
              <hr />
              <p>Product ID: {product.id}</p>
              <p>Product Stock: {product.stock}</p>
              <p>SALE: {product.sale}%</p>
              <div className="quantity">
                Quantity:
                <div className="quantity">
                  <button onClick={(e) => counter(e, product.stock)}>-</button>
                  <p>{count}</p>
                  <button onClick={(e) => counter(e, product.stock)}>+</button>
                </div>
              </div>
              <div className="productCardBtns">
                <button onClick={() => basketHandler(product.id)}>
                  Add to cart
                </button>
                <button>Buy it now</button>
              </div>
              <hr />
              <div className="reviewBtns">
                <button id="outlineBtn" onClick={() => setdesc(true)}>
                  Description
                </button>
                <button id="fillBtn" onClick={() => setdesc(false)}>
                  Specification
                </button>
              </div>
              {desc ? (
                <p>{product.description}</p>
              ) : (
                <ul>
                  {product.spec.map((spec, i) => {
                    return (
                      <li key={i}>
                        {Object.keys(spec)}: {Object.values(spec)}
                      </li>
                    );
                  })}
                </ul>
              )}

              <a href="/">back</a>
            </div>
          </div>
        </div>
      );
    }
  });
}
