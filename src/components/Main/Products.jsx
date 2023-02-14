import Product from "./Product";
import "../../style/main/Products.css";
import { useContext } from "react";
import { DataContext } from "../../App";

export default function Products(prop) {
  const { data, login } = useContext(DataContext);
  const { filter } = prop;
  console.log(filter);

  return (
    <div className="Products ">
      {data.map((pro, index) => {
        if (filter === "all" || pro.category === filter) {
          return (
            <div className="" key={index}>
              <Product
                login={login}
                name={pro.name}
                title={pro.description}
                category={pro.category}
                price={pro.price}
                img={pro.image}
                id={pro.id}
              />
            </div>
          );
        }
      })}
    </div>
  );
}
