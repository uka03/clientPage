import logo from "../img/logo.svg";
import google from "../img/google.svg";
import facebook from "../img/facebook.svg";
import whatsapp from "../img/whatsapp.svg";
import "../style/Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerTop">
          <img src={logo} alt="" />
          <div className="icons">
            <img src={google} alt="" />
            <img src={facebook} alt="" />
            <img src={whatsapp} alt="" />
          </div>
        </div>
        <div className="footerBottom">
          © 2023 Tuulai. Built using AQUA and Tuulai Theme. Terms and Conditions{" "}
        </div>
      </div>
    </div>
  );
}
