import "../../style/main/Product.css";
import cart from "../../img/shopping-cart.svg";
import { useNavigate } from "react-router-dom";
export default function Product(prop) {
  const { key } = prop;
  const navigate = useNavigate();
  function productpage() {
    navigate(`/product/${prop.id}`);
    console.log("working");
  }
  return (
    <div className="product" onClick={productpage} key={key}>
      <img src={prop.img} alt="" />
      <div className="productContent">
        <h5 className="productTitle">{prop.name}</h5>
        <p className="productName">{prop.category}</p>
        <p className="productPrice">${prop.price}</p>
        <button className="productCart">
          <img src={cart} alt="" />
        </button>
      </div>
    </div>
  );
}
