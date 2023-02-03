import Product from "./Product";
import "../../style/main/Products.css";

export default function Products(prop) {
  const { data } = prop;
  const { category } = prop;

  return (
    <div className="Products container">
      {data.map((pro, index) => {
        if (category === "all" || pro.category === category) {
          return (
            <Product
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
