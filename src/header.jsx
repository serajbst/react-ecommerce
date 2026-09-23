import Styles from './Styles/header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <ul className={Styles.header}>

            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/about">About</Link>
            </li>

            <li>
                <Link to="/">Product</Link>
            </li>

            <li className={Styles.categoryMenu}>

                <span>Category ▾</span>

                <ul className={Styles.dropdown}>

                    <li>
                        <Link to="/category/electronics">
                            Electronics
                        </Link>
                    </li>

                    <li>
                        <Link to="/category/jewelery">
                            Jewelery
                        </Link>
                    </li>

                    <li>
                        <Link to="/category/men's%20clothing">
                            Men's Clothing
                        </Link>
                    </li>

                    <li>
                        <Link to="/category/women's%20clothing">
                            Women's Clothing
                        </Link>
                    </li>

                </ul>

            </li>

            <li>
                <Link to="/account">Account</Link>
            </li>

        </ul>
    );
}

export default Header;