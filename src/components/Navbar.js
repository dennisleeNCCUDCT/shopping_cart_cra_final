import { useContext } from "react";
import { CartContext } from "../store";

const Navbar = () => {
  const [state] = useContext(CartContext);
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">甜點蛋糕店</a>

        <button
          className="btn btn-outline-dark position-relative"
          type="submit"
        >
          購物車
          <span className="badge rounded-pill text-bg-danger position-absolute top-0 start-100 translate-middle">
            {state.cartList.length}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
