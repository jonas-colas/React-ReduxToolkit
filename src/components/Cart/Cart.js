import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartInfo = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const qty = useSelector((state) => state.cart.qty);

  return (
    <Card className={classes.cart}>
      <h2>
        Your Shopping Cart :
        <span> Qty: {qty}</span>
        <span> total: ${total.toFixed(2)}</span>
      </h2>
      <ul>
        {cartInfo.map((p) => (
          <CartItem
            key={p.id}
            item={{
              id: p.id,
              title: p.title,
              quantity: p.quantity,
              total: p.subTotal,
              price: p.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
