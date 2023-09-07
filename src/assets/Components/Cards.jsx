// import { useState } from "react"
import axios from "axios";
import { useEffect, useState } from "react";
import { AddCart, BuyOrder } from "./Buttons";
import { Link } from "react-router-dom";
import Loader from "./Loader";
// eslint-disable-next-line react/prop-types
function Cards({ count, onClick }) {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(false);

  const getCards = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setCards(res.data);
        setData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(cards);
  useEffect(() => {
    getCards();
  }, []);

  const displayedElems = cards
    .filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    })
    .map((item) => (
      <div
        className="w-[225px] sm:w-[300px]  bg-white  rounded-md p-6  hover:scale-105 transition-all "
        key={item.id}>
        <Link to={`products/${item.id}`}>
          <img src={item.image} alt="" className="w-full h-60 " />
        </Link>
        <p className="text-base pt-6 text-gray-500 capitalize">
          {item.category}
        </p>
        <h1 className="md:text-xl text-sm py-4">{item.title}</h1>
        <h1 className="text-xl text-gray-500">
          Price:<span className="text-2xl text-orange-600">${item.price}</span>
        </h1>
        <div className="md:flex md:justify-between md:pt-6 pt-4 ">
          <AddCart count={count} onClick={onClick} />
          <BuyOrder />
        </div>
      </div>
    ));
  return (
    <>
      {data ? (
        <>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center  w-full h-screen"></div>
          <span className="text-4xl text-center block py-8">
            Popular Products
          </span>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="ms-10 px-20 py-1"
            placeholder="Search Here"
          />

          <div className="grid md:grid-cols-4 grid-cols-2 md:p-10 p-5 md:gap-6 gap-4">
            {displayedElems}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Cards;
