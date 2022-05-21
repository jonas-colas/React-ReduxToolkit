import { toggleActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(process.env.REACT_APP_CART);

      if(!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceCart(cartData));

    } catch (error) {
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching Cart to server failed!",
        })
      );
    };
  }
}

export const sendCartToServer = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart to server!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(process.env.REACT_APP_CART, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });
  
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    }

    try {
      await sendRequest();
      dispatch(
        toggleActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent Cart to server succcessfully!",
        })
      );
    }catch(err) {
      dispatch(
        toggleActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending Cart to server failed!",
        })
      );
    }
  };
}