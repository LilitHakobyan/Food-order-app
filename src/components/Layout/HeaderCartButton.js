import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const [btnHighlighted, setbtnHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    }, 0);

    const { items } = cartCtx;

    useEffect(() => {
        if (items.lenght === 0) {
            return;
        }

        setbtnHighlighted(true);
        const timer = setTimeout(() => {
            setbtnHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer)
        };
    }, [items]);
    
    const btnClass = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;
    return <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton;