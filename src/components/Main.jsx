import Slide from "./Main/Slide";
import "../style/Main.css";
import Products from "./Main/Products";
import Navbar from "./Main/Navbar";
import Ads from "./Main/Ads";
import Speical from "./Main/Speical";
import { useContext, useState } from "react";
import { DataContext } from "../App";

export default function Main(prop) {
  const { data } = useContext(DataContext);
  let [category, setCategory] = useState("");
  function catolog(e) {
    setCategory(e);
  }

  return (
    data && (
      <div className="main">
        <Slide
          title={data[0].description}
          name={data[0].name}
          img={data[0].image}
          price={data[0].price}
        />
        <div className="container">
          <Navbar catolog={catolog} />
          <Products category={category} />
          <Ads />
          <Speical />
        </div>
      </div>
    )
  );
}
