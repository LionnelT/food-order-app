// import { Fragment } from "react";
// import mealsImage from '../../assets/meal.jpg'
// import classes from './Header.module.css'
// import HeaderCartButton from "./HeaderCartButton";

// const Header = props => {
//     return (<Fragment>
//         <header className={classes.header} >
//             <h1>Chikafu</h1>
//             <HeaderCartButton />
//         </header>
//         <div className={classes['main-image']}>
//             <img src={mealsImage} alt="sadza,vegetables and beef" />
//         </div>
//     </Fragment>
//     )
// }

// export default Header;

import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meal.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Chikafu</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;