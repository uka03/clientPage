import SpeicalProduct from "./speical/SpeicalProduct";
import "../../style/main/Speical.css";
import SpeicalAbout from "./speical/SpeicalAbout";
import { useContext } from "react";
import { DataContext } from "../../App";

export default function Speical(prop) {
  const { data } = useContext(DataContext);
  let i = Math.floor(Math.random() * data.length);
  console.log(i);
  return (
    <div className="speical">
      <div className="left">
        <SpeicalProduct data={data[i]} />
      </div>

      <div className="right">
        <SpeicalAbout />
        <SpeicalAbout />
      </div>
    </div>
  );
}
