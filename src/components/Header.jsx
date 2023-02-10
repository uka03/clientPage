import "../style/Header.css";
import logo from "../img/logo.svg";
import user from "../img/user.svg";
import cart from "../img/shopping-cart.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "../App";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import emptyCart from "../img/empty-cart.png";
export default function Header() {
  const { setLogin, login, setCloseModal, data } = useContext(DataContext);
  const [offCanvas, setOffCanvas] = useState(false);

  const navigate = useNavigate();
  let ids = JSON.parse(localStorage.getItem("basket"));
  let basket = [];
  let totalPrice = 0;
  if (ids) {
    console.log(ids);

    data.find((e) => {
      ids.map((element) => {
        if (e.id === element) {
          basket.push(e);
        }
      });
    });
    console.log(basket);
  }
  basket.map((e) => {
    totalPrice = totalPrice + e.price;
  });
  let totalOrder = basket.length;
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

          <Button
            variant="primary"
            onClick={() => setOffCanvas(true)}
            className="me-2 d-flex bg-transparent border border-0"
          >
            <img src={cart} alt="" />
            <div className="number">{totalOrder}</div>
          </Button>
          <Offcanvas
            className="w-25 p-5 "
            show={offCanvas}
            onHide={() => setOffCanvas(false)}
            placement={"end"}
          >
            <Offcanvas.Header>
              <Offcanvas.Title className="text-royal">
                Таны сагс
              </Offcanvas.Title>
              <input
                type="button"
                value={"сагс хоослох"}
                className="text-royal  bg-transparent border-royal-bottom"
              />
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex h-100 w-100 align-items-center justify-content-between flex-column position-relative p-0">
              <div className="basketMain text-royal h-100 w-100 ">
                {ids ? (
                  basket.map((order) => {
                    return (
                      <div className="d-flex gap-5 border p-3 mb-4 rounded-4 align-items-center  position-relative h-10 w-100">
                        <div className="position-absolute top-0 end-0 me-3 fs-5">
                          X
                        </div>
                        <div className="w-25 h-100">
                          <img
                            src={order.image}
                            alt=""
                            className="w-100 h-100"
                          />
                        </div>
                        <div className="d-flex flex-column">
                          <p>{order.name}</p>
                          <p>Price : {order.price} </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className=" h-100 d-flex flex-column justify-content-center align-items-center">
                    <img src={emptyCart} alt="" />
                    <p className="text-secondary">сагс хоосон байна.</p>
                  </div>
                )}
              </div>

              <div className="basketFooter w-100">
                <div className="d-flex justify-content-between p-3 fs-5">
                  <p>Нийт дүн</p>
                  <p>{totalPrice}$</p>
                </div>
                <button
                  className={
                    login
                      ? "w-100 border-0  rounded-3 bg-royal p-3 fs-5 border border-0 text-white"
                      : "w-100 rounded-3 p-3 fs-5  text-secondary  border border-0"
                  }
                  // disabled
                >
                  захиалах
                </button>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </div>
  );
}
