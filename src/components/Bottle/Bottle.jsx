import PropTypes from "prop-types";
const Bottle = ({ bottle, handleAddToCart }) => {
  const { name, img, price } = bottle;
  return (
    <div className="shadow-sm pb-4 border border-lime-600 rounded-xl ">
      <figure className="">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="mt-4 px-3 space-y-2">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-lg">Price: ${price}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(bottle)}
            className="btn btn-lg btn-primary"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object,
  handleAddToCart: PropTypes.func,
};

export default Bottle;
