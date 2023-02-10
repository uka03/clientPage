import Product from "./Product";
import "../../style/main/Products.css";
import { useContext } from "react";
import { DataContext } from "../../App";

export default function Products(prop) {
  const { data, login } = useContext(DataContext);
  const { category } = prop;

  return (
    <div className="Products ">
      {data.map((pro, index) => {
        if (category === "all" || pro.category === category) {
          return (
            <Product
              login={login}
              key={index}
              name={pro.name}
              title={pro.description}
              category={pro.category}
              price={pro.price}
              img={pro.image}
              id={pro.id}
            />
          );
        }
      })}
    </div>
  );
}
