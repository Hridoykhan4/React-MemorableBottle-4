import PropTypes from "prop-types";
const Cart = ({ cart, handleDelete }) => {
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Cart : {cart.length}
      </h2>

      <div className="flex justify-center flex-wrap items-center mt-3 gap-3">
        {cart.map((bottle, id) => (
          <div key={id} className="space-y-3 text-center">
            <img className="w-32" key={id} src={bottle.img} />
            <button
              onClick={() => handleDelete(bottle.id)}
              className="btn btn-error text-white btn-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleDelete: PropTypes.func,
};

export default Cart;
