import cart from "./assets/cart.svg";

const cartStyle = {
    width: "2rem",
    filter: "invert(100%) sepia(92%) saturate(13%) hue-rotate(187deg) brightness(114%) contrast(91%)"
}

const CartWidget = () => {
  return (
    <div>
      <img style={cartStyle}   src={cart} alt="cart-widget" />
      <span className="text-center rounded-circle text-light text-bg-danger ps-2 pb-1 pe-2">0</span>
    </div>
  );
};

export default CartWidget;
