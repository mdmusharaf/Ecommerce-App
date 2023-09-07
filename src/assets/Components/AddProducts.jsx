import { useState } from "react";

const AddProducts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const data = { title, description, category, image, price };
    console.log(data);
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  }
  return (
    <>
      <div className="flex justify-center">
        <form className="mx-10 w-[450px]  my-6" onSubmit={handleSubmit}>
          <div className=" pb-4 ">
            <label htmlFor="email" className="pb-2 block text-base font-bold">
              Title
            </label>
            <input
              type="text"
              className="border-2 w-full p-2 rounded-md border-gray-500"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              id="title"
            />
          </div>
          <div className=" pt-4 pb-4 ">
            <label
              htmlFor="description"
              className="pb-2  block text-base font-bold">
              Description
            </label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="border-2 w-full p-2 rounded-md border-gray-500"
              id="description"
            />
          </div>
          <div className=" pt-4 pb-4 ">
            <label
              htmlFor="category"
              className="pb-2  block text-base font-bold">
              Category
            </label>
            <input
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="border-2 w-full p-2 rounded-md border-gray-500"
              id="category"
            />
          </div>
          <div className=" pt-4 pb-4 ">
            <label htmlFor="image" className="pb-2  block text-base font-bold">
              Image
            </label>
            <input
              type="text"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              className="border-2 w-full p-2 rounded-md border-gray-500"
              id="image"
            />
          </div>
          <div className=" pt-4 pb-4 ">
            <label htmlFor="Price" className="pb-2  block text-base font-bold">
              Price
            </label>
            <input
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              className="border-2 w-full p-2 rounded-md border-gray-500"
              id="price"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="px-12 py-1 bg-gray-700 rounded-md text-white"
              type="submit">
              Submit
            </button>{" "}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProducts;
