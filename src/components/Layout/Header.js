import { Fragment } from 'react';
import imgMeals from '../../assets/meals.jpg';
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>MealsOrder</h1>
            <HeaderCartButton onClick={props.onCartClick} />
        </header>
        <div className={classes['main-image']}>
            <img src={imgMeals} alt="A table full of delicious food!" />
        </div>
    </Fragment>
};

export default Header;