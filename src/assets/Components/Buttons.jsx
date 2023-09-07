function OrderButton() {
  return (
    <>
      <button className="bg-slate-600 md:px-12 px-8 md:py-2  rounded-md text-white md:text-sm text-xs hover:bg-slate-400">
        Place Order
      </button>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function AddCart({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-slate-700 border-2 text-sm hover:bg-slate-700 transition-all duration-100 delay-75 hover:text-white rounded-md md:px-6 px-10 md:py-2 py-3 md:mb-0  md:text-sm text-xs text-slate-700">
      Add to Cart
    </button>
  );
}

function BuyOrder() {
  return (
    <button className="bg-orange-600 rounded-md hover:bg-orange-500 md:px-8 px-16 md:mt-0 md:text-sm text-xs mt-2 py-2 text-white">
      Buy
    </button>
  );
}
// eslint-disable-next-line react/prop-types
function RegisterButton({ disabled }) {
  return (
    <>
      <button
        type="submit"
        className={`bg-slate-600 px-12 py-2  rounded-md text-white hover:bg-slate-400 ${
          disabled ? "disabled" : ""
        } `}>
        {disabled ? "signing in" : "Sign Up"}
      </button>
    </>
  );
}
// eslint-disable-next-line react/prop-types
function LoginButton() {
  return (
    <>
      <button
        type="submit"
        className={`bg-slate-600 px-12 py-2  rounded-md text-white hover:bg-slate-400`}>
        login
      </button>
    </>
  );
}
export { BuyOrder, OrderButton, RegisterButton, LoginButton, AddCart };
