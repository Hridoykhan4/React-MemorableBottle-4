import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS, getCartItems, removeFromLS } from "../../Utils/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    setCart([...cart, bottle]);
    addToLS(bottle.id);
  };

  useEffect(() => {
    if (bottles.length) {
      const storedCart = getCartItems();
      const saveBottle = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        saveBottle.push(bottle);
      }
      setCart(saveBottle);
    }
  }, [bottles]);

  const handleDelete = (id) => {
    const remaining = cart.filter((bottle) => bottle.id !== id);
    setCart(remaining);
    removeFromLS(id);
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Bottles Available : {bottles.length}
      </h2>

      <div>
        <Cart handleDelete={handleDelete} cart={cart}></Cart>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
