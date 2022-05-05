import { useDispatch, useSelector } from 'react-redux';
import { toggleActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQty = useSelector(state => state.cart.qty);

  const toggleCart = () => {
    dispatch(toggleActions.toggleCart());
  };
  
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQty}</span>
    </button>
  );
};

export default CartButton;
