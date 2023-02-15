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
import axios from "axios";
import { useEffect } from "react";

export default function Header() {
  const { setLogin, login, setCloseModal, data, setFilter } =
    useContext(DataContext);
  const [offCanvas, setOffCanvas] = useState(false);
  const navigate = useNavigate();
  const [render, setRender] = useState(false);
  const [totalOrder, setTotalOrder] = useState(0);

  let basketItems = JSON.parse(localStorage.getItem("basket"));
  let basket = [];
  let totalPrice = 0;

  if (basketItems) {
    data.find((product) => {
      basketItems.map((item) => {
        if (product.id === item.id) {
          basket.push(product);
          totalPrice = (totalPrice + product.price) * item.stock;
        }
      });
    });
  }

  useEffect(() => {
    setTotalOrder(ordernumber);
  }, [basket.length]);

  function orderHandler() {
    let fullDate = new Date();
    let date = `${fullDate.getDate()}/${
      fullDate.getMonth() + 1
    }/${fullDate.getFullYear()}`;
    let userId = localStorage.getItem("userId");
    let newOrder = {
      totalPrice,
      date: date,
      userId: userId,
      status: false,
      products: basketItems,
      pay: 1,
    };

    axios
      .post("http://localhost:2020/order", newOrder)
      .then((res) => console.log(res));
    basketItems.map((item) => {
      axios.put(`http://localhost:2020/products/${item.id}`, {
        stock: item.stock,
      });
    });
    localStorage.removeItem("basket");
    setRender(!render);
  }

  function deleteOrderPro(index) {
    if (basketItems.length > 1) {
      basketItems.splice(index, 1);
      localStorage.setItem("basket", JSON.stringify(basketItems));
    } else {
      localStorage.removeItem("basket");
    }
    setRender(!render);
  }

  function searchHandler(e) {
    e.preventDefault();
    let searchInput = e.target.search.value;
    setFilter(searchInput);
  }

  return (
    <div className="header">
      <div className="headerContent">
        <a href="/">
          <img src={logo} className="logo" alt="" />
        </a>

        <form className="search" onSubmit={searchHandler}>
          <input
            type="text"
            name="search"
            className="searchInput"
            placeholder="Search any things"
          />
          <button className="searchBtn" type="submit">
            Search
          </button>
        </form>
        <div className="profile">
          {login ? (
            <button
              className="signIn"
              onClick={() => {
                navigate("/");
                setCloseModal(false);
                localStorage.setItem("login", false);
                setLogin(JSON.parse(localStorage.getItem("login")));
                localStorage.removeItem("userId");
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
                className="text-royal   bg-transparent border-royal-bottom"
                onClick={() => {
                  localStorage.removeItem("basket");
                }}
              />
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex h-100 w-100 align-items-center justify-content-between flex-column position-relative p-0">
              <div className="basketMain text-royal h-100 w-100 ">
                {basketItems ? (
                  basket.map((order, index) => {
                    let findItem = basketItems.find(
                      (item) => order.id == item.id
                    );
                    console.log(findItem);
                    return (
                      <div
                        key={index}
                        className="d-flex gap-5 border p-3 mb-4 rounded-4 align-items-center  position-relative h-10 w-100"
                      >
                        <div
                          className="position-absolute top-0 end-0 me-3 fs-5"
                          onClick={() => deleteOrderPro(index)}
                        >
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
                          <p className="m-0">{order.name}</p>
                          <p className="m-0">Price : {order.price} </p>
                          <p className="m-0">quantity : {findItem.stock}</p>
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
                  onClick={orderHandler}
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
