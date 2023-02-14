import { useContext, useState } from "react";
import { DataContext } from "../../App";
import "../../style/main/Navbar.css";

export default function Navbar(prop) {
  const { data, filter, setFilter } = useContext(DataContext);

  let tempCategory = [];

  return (
    <div className="navbar container">
      <h4 className="navbarTitle">Popular products</h4>
      <ul className="navbarList">
        <li className="navbarItem ">
          <button
            onClick={() => {
              setFilter("all");
            }}
          >
            All
          </button>
        </li>
        {data.map((e, i) => {
          if (!tempCategory.includes(e.category)) {
            tempCategory.push(e.category);
            return (
              <li className="navbarItem " key={i}>
                <button
                  onClick={() => {
                    setFilter(e.category);
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
