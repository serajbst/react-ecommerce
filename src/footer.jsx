import { Link } from "react-router-dom";
import Styles from "./Styles/footer.module.css";

function Footer() {
    return (
        <footer className={Styles.footer}>

            <div className={Styles.container}>

                {/* Brand */}
                <div className={Styles.column}>
                    <h2>MyStore</h2>

                    <p>
                        Your simple and convenient online shopping
                        destination for quality products.
                    </p>
                </div>


                {/* Quick Links */}
                <div className={Styles.column}>

                    <h3>Quick Links</h3>

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/">Products</Link>
                    <Link to="/account">Account</Link>

                </div>


                {/* Categories */}
                <div className={Styles.column}>

                    <h3>Categories</h3>

                    <Link to="/category/electronics">
                        Electronics
                    </Link>

                    <Link to="/category/jewelery">
                        Jewelery
                    </Link>

                    <Link to="/category/men's%20clothing">
                        Men's Clothing
                    </Link>

                    <Link to="/category/women's%20clothing">
                        Women's Clothing
                    </Link>

                </div>


                {/* Contact */}
                <div className={Styles.column}>

                    <h3>Contact Us</h3>

                    <p>📧 support@mystore.com</p>
                    <p>📞 +91 98765 43210</p>
                    <p>📍 Bihar, India</p>

                </div>

            </div>


            {/* Bottom */}

            <div className={Styles.bottom}>

                <p>
                    © 2026 MyStore. All rights reserved.
                </p>

                <div>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms & Conditions</Link>
                </div>

            </div>

        </footer>
    );
}

export default Footer;