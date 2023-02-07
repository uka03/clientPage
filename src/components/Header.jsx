import "../style/Header.css";
import logo from "../img/logo.svg";
import user from "../img/user.svg";
import cart from "../img/shopping-cart.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";

export default function Header() {
  const { setLogin, login, setCloseModal } = useContext(DataContext);

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
                setCloseModal(false);
                setLogin(false);
              }}
            >
              <img src={user} alt="" /> Log out
            </button>
          ) : (
            <button
              className="signIn"
              onClick={() => {
                setCloseModal(true);
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
