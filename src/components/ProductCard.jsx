import { useState } from "react";
import { useParams } from "react-router-dom";
import "../style/ProductCard.css";

import Quantity from "./Quantity";
export default function ProductCard(prop) {
  const { data } = prop;
  const [desc, setdesc] = useState(true);
  const test = useParams();
  console.log(test);

  return data.map((product) => {
    if (product.id === test.id) {
      return (
        <div className="ProductCard container">
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
              <p className="quantity">
                Quantity:
                <Quantity stock={product.stock} />
              </p>
              <div className="productCardBtns">
                <button>Add to cart</button>
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
