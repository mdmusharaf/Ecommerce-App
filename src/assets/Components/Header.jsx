import { useState } from "react";
import { FaAlignRight, FaBabyCarriage, FaCartArrowDown } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({ count }) {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.removeItem("loggedIN");
    navigate("/login");
  };

  return (
    <>
      <div className="h-20  sticky top-0 shadow-md w-full  bg-gray-200 z-10 flex justify-between items-center md:px-20 px-8">
        <NavLink to={"/"} className="text-gray-800 md:text-4xl ">
          <FaBabyCarriage />{" "}
        </NavLink>
        <div className="relative md:flex items-center  hidden">
          <NavLink to={"/"} className="text-gray-600 px-4 ">
            Products
          </NavLink>
          <NavLink className="text-gray-600 px-4" to={"/addproduct"}>
            Add Product
          </NavLink>
          <FaCartArrowDown className="text-slate-700 text-4xl" />

          <div className="absolute right-36  top-0 text-base font-semibold w-6 text-center text-white bg-orange-400 rounded-xl">
            <p> {count}</p>
          </div>
          <button
            className="px-8 ms-6  bg-slate-600 py-2 text-white rounded-md"
            onClick={handleLogin}>
            Logout
          </button>
        </div>
        <div className="md:hidden block cursor-pointer mr-38">
          <FaAlignRight onClick={() => setHide(!hide)} />
        </div>
        <div
          className={`h-screen  flex items-center  flex-col  right-0 bg-white absolute transition-width z-10 top-20 ease-in-out  duration-100`}>
          <NavLink
            to={"/"}
            className={`text-gray-600 px-20 py-4 ${hide ? "hidden" : "block"}`}>
            Products
          </NavLink>
          <NavLink
            to={"addproduct"}
            className={`text-gray-600 px-20  py-4 ${
              hide ? "hidden" : "block"
            }`}>
            Add Product
          </NavLink>
          <FaCartArrowDown
            className={`text-slate-700 my-4 text-4xl ${
              hide ? "hidden" : "block"
            }`}
          />
          <div className={`relative ${hide ? "hidden" : "block"}`}>
            <div className="absolute right-0 left-0 -top-16 text-base font-semibold w-6 text-center text-white bg-orange-400 rounded-xl">
              <p> {count}</p>
            </div>
          </div>
          <button
            className={`px-8 ms-6   bg-slate-600 py-2 text-white rounded-md ${
              hide ? "hidden" : "block"
            }`}
            onClick={handleLogin}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
