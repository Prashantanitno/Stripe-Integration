import React, { useState } from "react";

const Home = () => {
  const itemName = "FireImg";
  const itemPrice = 500;
  const [quantity, setQuantity] = useState(1);
  const [finalAmount, setFinalAmount] = useState(itemPrice);

  const decrement = () => {
    if (quantity <= 1) {
      setQuantity(1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
      setFinalAmount(finalAmount - itemPrice);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
    setFinalAmount(finalAmount + itemPrice);
  };

  const checkout = async () => {
    try {
      const res = await fetch("http://localhost:8000/checkout", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          items: [
            {
              id: 1,
              quantity: quantity,
              price: itemPrice,
              name: itemName,
            },
          ],
        }),
      });
      const data = await res.json();
      window.location = data.url;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="m-auto flex flex-col justify-center align-items-center items-center">
      <div>
        <p className="text-bold text-2xl">Amount to be paid:</p>
      </div>
      <div className="p-4">
        <button
          className="bg-purple-400 text-white p-2 text-bold text-3xl "
          onClick={increment}
        >
          +
        </button>
        <span className="text-bold text-3xl m-3">{finalAmount}</span>
        <button
          className="bg-purple-400 text-white p-2 text-bold text-3xl "
          onClick={decrement}
        >
          -
        </button>
      </div>

      <div>
        <button
          onClick={checkout}
          className="bg-green-400 text-white px-8 py-4 rounded-md text-2xl"
        >
          checkOut
        </button>
      </div>
    </div>
  );
};

export default Home;
