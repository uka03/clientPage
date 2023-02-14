import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import axios from "axios";

export const DataContext = createContext();

function App() {
  const [closeModal, setCloseModal] = useState();
  if (!localStorage.getItem("login")) {
    localStorage.setItem("login", false);
  }
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem("login")));
  const [data, setdata] = useState();
  const [userData, setUserData] = useState();

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    axios.get("http://localhost:2020/product").then((res) => setdata(res.data));
    axios
      .get("http://localhost:2020/users")
      .then((res) => setUserData(res.data));
  }, []);

  return (
    <>
      {data && (
        <div className="App">
          <DataContext.Provider
            value={{ data, userData, setCloseModal, setLogin, login, setFilter, filter }}
          >
            <Header />
            {closeModal ? <SignIn /> : null}
            <Routes>
              <Route path={"/"} element={<Main />} />
              <Route path={`/product/:id`} element={<ProductCard />} />
            </Routes>
            <Footer />
          </DataContext.Provider>
        </div>
      )}
    </>
  );
}

export default App;
