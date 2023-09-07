import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { AddCart, OrderButton } from "./Buttons";

// eslint-disable-next-line react/prop-types
function CardDetails({ onClick }) {
  const [details, setDetails] = useState(false);
  const params = useParams();
  //  console.log(params)

  const getDetails = async () => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetails();
  }, [params.id]);
  //can you elplai this code

  return (
    <>
      {details ? (
        <div className="md:px-20 px-12 py-12  shadow-none gap-20 grid md:grid-cols-2 bg-white rounded-md ">
          <div className="flex justify-center">
            {" "}
            <img src={details.image} alt="" className="h-[450px] px-4" />
          </div>
          <div className="py-10">
            <p className="capitalize">{details.category}</p>
            <h1 className="text-2xl py-4 font-semibold">{details.title}</h1>
            <p className="capitalize py-6 text-gray-500">
              {details.description}
            </p>
            <hr className="h-[1px] mb-6 block bg-gray-200" />
            <div className="flex  gap-6">
              <h1 className="text-xl">${details.price}</h1>
              <OrderButton />
              <AddCart onClick={onClick} />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default CardDetails;
