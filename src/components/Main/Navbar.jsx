import { useState } from "react";
import "../../style/main/Navbar.css";

export default function Navbar(prop) {
  const { catolog, data } = prop;
  const [category, setCategory] = useState("all");
  catolog(category);
  let tempCategory = [];

  return (
    <div className="navbar container">
      <h4 className="navbarTitle">Popular products</h4>
      <ul className="navbarList">
        <li className="navbarItem ">
          <button
            onClick={() => {
              setCategory("all");
            }}
          >
            All
          </button>
        </li>
        {data.map((e, i) => {
          if (!tempCategory.includes(e.category)) {
            tempCategory.push(e.category);
            return (
              <li className="navbarItem ">
                <button
                  onClick={() => {
                    setCategory(e.category);
                  }}
                >
                  {e.category}
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
