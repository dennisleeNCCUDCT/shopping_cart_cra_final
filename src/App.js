import { useReducer } from "react";
import { CartContext } from "./store";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Product from "./components/Products";

function App() {
  const reducer = useReducer(
    (state, action) => {
      const cartList = [...state.cartList];
      const index = cartList.findIndex((item) => item.id === action.payload.id);
      console.log(action);
      switch (action.type) {
        case "ADD_TO_CART":
          if (index === -1) {
            cartList.push(action.payload);
          } else {
            cartList[index].quantity += action.payload.quantity;
          }

          const total = calculate(cartList);

          return { ...state, cartList, total: calculate(cartList) };

        case "REMOVE_CART_ITEM":
          cartList.splice(index, 1);
          return { ...state, cartList, total: calculate(cartList) };

        case "CHANGR_CART_QUANTITY":
          cartList[index].quantity = action.payload.quantity;
          return { ...state, cartList, total: calculate(cartList) };

        default:
          return state;
      }
    },
    {
      cartList: [],
    }
  );
  return (
    <CartContext.Provider value={reducer}>
      <Navbar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-7">
            <Product />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
function calculate(cartList) {
  return cartList
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
}
