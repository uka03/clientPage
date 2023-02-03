import "../style/Header.css";
import logo from "../img/logo.svg";
import user from "../img/user.svg";
import cart from "../img/shopping-cart.svg";
import { useNavigate } from "react-router-dom";

export default function Header(prop) {
  const { login, closeModal, setLogin } = prop;

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="headerContent">
        <a href="/">
          <img src={logo} className="logo" alt="" />
        </a>

        <div className="search">
          <input
            type="text"
            className="searchInput"
            placeholder="Search any things"
          />
          <button className="searchBtn">Search</button>
        </div>
        <div className="profile">
          {login ? (
            <button
              className="signIn"
              onClick={() => {
                navigate("/");
                closeModal(false);
                setLogin(false);
              }}
            >
              <img src={user} alt="" /> Log out
            </button>
          ) : (
            <button
              className="signIn"
              onClick={() => {
                closeModal(true);
              }}
            >
              <img src={user} alt="" /> Sign in
            </button>
          )}

          <button className="cart">
            <img src={cart} alt="" />
            <div className="number">0</div>
          </button>
        </div>
      </div>
    </div>
  );
}
