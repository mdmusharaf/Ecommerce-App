import { useState } from "react";
import CardDetails from "./assets/Components/CardDetails";
// import Home from "./assets/Components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cards from "./assets/Components/Cards";
import { useEffect } from "react";
import Register from "./assets/Components/Register";
import Login from "./assets/Components/Login";
import { ToastContainer } from "react-toastify";
import Protected from "./assets/Components/Protected";
import Layout from "./assets/Components/Layout";
import AddProducts from "./assets/Components/AddProducts";

function App() {
  const [count, setCount] = useState(
    localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0
  );
  useEffect(() => {
    const getNumber = () => {
      localStorage.setItem("count", count);
    };
    getNumber();
  }, [count]);

  function change() {
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Protected />}>
            <Route path="/" element={<Layout count={count} />}>
              <Route index element={<Cards onClick={change} />} />
              <Route path="/addproduct" element={<AddProducts />} />
              <Route
                path="products/:id"
                element={<CardDetails onClick={change} />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />
    </>
  );
}

export default App;
