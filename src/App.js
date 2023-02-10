import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header"
import Main from "./components/Main"
import ProductCard from "./components/ProductCard"
import Footer from "./components/Footer"
import SignIn from "./components/SignIn"
import axios from "axios";

export const DataContext = createContext()
function App() {

  const [closeModal, setCloseModal] = useState();
  const [login, setLogin] = useState(false);
  const [data, setdata] = useState();
  const [userData, setUserData] = useState();
  const [refresh, setRefesh] = useState("")
  useEffect(() => {
    axios.get("http://localhost:2020/product").then((res) => setdata(res.data));
    axios.get("http://localhost:2020/users").then((res) => setUserData(res.data));
  }, [refresh]);

  return <>{data && (
    <div className="App">
      <DataContext.Provider value={{ data, userData, setCloseModal, setLogin, login }}>
        <Header />
        {closeModal ? <SignIn /> : null}
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={`/product/:id`} element={<ProductCard />} />
        </Routes>
        <Footer />
      </DataContext.Provider>

    </div>
  )}</>
}

export default App;
