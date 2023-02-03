import "../../../style/main/speical/speicalProduct.css";
import cart from "../../../img/shopping-cart.svg";
export default function SpeicalProduct(prop) {
  const { data } = prop;
  return (
    <div className="speicalProduct">
      <div className="SProductImg">
        <img src={data.image} alt="" />
      </div>
      <div className="SProductContent">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <p>${data.price}</p>
        <button>
          Add to cart <img src={cart} alt="" />
        </button>
      </div>
    </div>
  );
}
