import "../../style/main/Slide.css";
export default function Slide(prop) {
  return (
    <div className="slide">
      <div className="container slide">
        <div className="slideContent">
          <h2 className="slideName">{prop.name}</h2>
          <h2 className="slideTitle">{prop.title}</h2>
          <div className="btns">
            <button className="shopNow">Shop now</button>
            <button className="viewMore">View more</button>
          </div>
        </div>
        <div className="slideImg">
          <img src={prop.img} alt="" />
          <div className="price">
            only <span>${prop.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
