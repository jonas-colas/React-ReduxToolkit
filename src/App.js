import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
// import { toggleActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartToServer} from "./store/cart-action";

let isInitial = true;

function App() {
  const dispatch = useDispatch();

  const showCart = useSelector((state) => state.uiToggle.isCartOpen);
  const notification = useSelector((state) => state.uiToggle.notification);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    
    if (cart.changed) {
      dispatch(sendCartToServer(cart));
    }

  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
