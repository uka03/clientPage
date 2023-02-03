import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header"
import Main from "./components/Main"
import ProductCard from "./components/ProductCard"
import Footer from "./components/Footer"
import SignIn from "./components/SignIn"
import axios from "axios";

function App() {

  const [closeModal, setCloseModal] = useState();
  const [login, setLogin] = useState();
  const [data, setdata] = useState();
  const [refresh, setRefesh] = useState("")
  useEffect(() => {
    axios.get("http://localhost:2020/product").then((res) => setdata(res.data));
  }, [refresh]);

  return <>{data && (
    <div className="App">
      <Header closeModal={setCloseModal} login={login} setLogin={setLogin} data={data} />
      {closeModal ? <SignIn closeModal={setCloseModal} login={setLogin} data={data} /> : null}
      <Routes>
        <Route path={"/"} element={<Main data={data} />} />
        <Route path={`/product/:id`} element={<ProductCard data={data} />} />
      </Routes>
      <Footer />
    </div>
  )}</>
}

export default App;
