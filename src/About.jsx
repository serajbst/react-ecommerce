import Styles from "./Styles/about.module.css";

function About() {
    return (
        <div className={Styles.about}>

            {/* Hero */}
            <section className={Styles.hero}>
                <h1>About Us</h1>
                <p>
                    Welcome to our online store, where shopping is
                    simple, convenient and enjoyable.
                </p>
            </section>


            {/* Who We Are */}
            <section className={Styles.section}>
                <div>
                    <h2>Who We Are</h2>

                    <p>
                        We are an online shopping platform created to
                        provide customers with a simple and convenient
                        way to discover and purchase products.
                    </p>

                    <p>
                        From electronics and jewellery to clothing,
                        we bring different categories of products
                        together in one place.
                    </p>
                </div>
            </section>


            {/* What We Offer */}
            <section className={Styles.section}>

                <h2>What We Offer</h2>

                <div className={Styles.features}>

                    <div className={Styles.feature}>
                        <h3>🛍️ Quality Products</h3>
                        <p>
                            Explore a wide range of products across
                            multiple categories.
                        </p>
                    </div>

                    <div className={Styles.feature}>
                        <h3>⚡ Easy Shopping</h3>
                        <p>
                            Browse products, check details and place
                            your order with ease.
                        </p>
                    </div>

                    <div className={Styles.feature}>
                        <h3>🔒 Secure Checkout</h3>
                        <p>
                            Our checkout experience is designed to
                            keep your shopping process simple and safe.
                        </p>
                    </div>

                    <div className={Styles.feature}>
                        <h3>🚚 Fast Delivery</h3>
                        <p>
                            We aim to make the delivery experience
                            convenient for our customers.
                        </p>
                    </div>

                </div>

            </section>


            {/* Why Choose Us */}
            <section className={Styles.section}>

                <h2>Why Choose Us?</h2>

                <p>
                    We focus on making online shopping straightforward.
                    Our goal is to provide clear product information,
                    easy navigation and a smooth ordering experience.
                </p>

                <ul>
                    <li>Wide range of products</li>
                    <li>Simple and user-friendly shopping experience</li>
                    <li>Easy product discovery</li>
                    <li>Convenient ordering process</li>
                </ul>

            </section>


            {/* Mission */}
            <section className={Styles.mission}>

                <h2>Our Mission</h2>

                <p>
                    Our mission is to make online shopping easier,
                    more convenient and accessible by bringing
                    useful products and a simple shopping experience
                    together on one platform.
                </p>

            </section>


            {/* CTA */}
            <section className={Styles.cta}>

                <h2>Start Shopping Today</h2>

                <p>
                    Explore our products and find something you love.
                </p>

            </section>

        </div>
    );
}

export default About;