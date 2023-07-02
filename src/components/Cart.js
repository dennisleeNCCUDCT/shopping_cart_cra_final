import { useContext } from "react";
import { CartContext } from "../store";

const Cart = () => {
  const [state, dispatch] = useContext(CartContext);

  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          {state.cartList.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    type="button"
                    className="btn sm"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_CART_ITEM",
                        payload: {
                          ...item,
                        },
                      });
                    }}
                  >
                    {" "}
                    x
                  </button>
                </td>
                <td>
                  <img src={item.img} alt="" className="table-image" />
                </td>
                <td>
                  {item.title}
                  <br />
                  <small className="text-muted">{item.price}</small>
                </td>
                <td>
                  <select
                    className="form-select "
                    value={item.quantity}
                    onChange={(e) => {
                      e.preventDefault();
                      const quantity = e.target.value;
                      dispatch({
                        type: "CHANGR_CART_QUANTITY",
                        payload: { ...item, quantity },
                      });
                    }}
                  >
                    {[...Array(20)].map((_, i) => {
                      return (
                        <option value={i + 1} key={i}>
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td className="text-end">{item.price * item.quantity}</td>
              </tr>
            );
          })}

          <td colSpan={5} className="text-end">
            總金額：${state.total || 0}
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
