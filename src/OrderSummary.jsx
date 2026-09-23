import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Styles from "./Styles/orderSummary.module.css";

function OrderSummary() {

    const [searchParam] = useSearchParams();

    const productId = searchParam.get("product");

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const [address] = useState({
        name: "Seraj",
        address: "Ashraf Chak",
        city: "Saharsa",
        state: "Bihar",
        pin: "852127"
    });

    async function getProduct() {

        const res = await fetch(
            `https://fakestoreapi.com/products/${productId}`
        );

        const data = await res.json();

        setProduct(data);
    }

    useEffect(() => {
        getProduct();
    }, [productId]);

    return (
        <div className={Styles.page}>

            <h1>Order Summary</h1>

            {
                product && (
                    <div className={Styles.container}>

                        {/* Left Section */}
                        <div className={Styles.left}>

                            {/* Address */}
                            <div className={Styles.box}>

                                <div className={Styles.boxHeader}>
                                    <h2>Delivery Address</h2>

                                    <button className={Styles.changeBtn}>
                                        Change
                                    </button>
                                </div>

                                <h3>{address.name}</h3>

                                <p>{address.address}</p>

                                <p>
                                    {address.city}, {address.state}
                                </p>

                                <p>
                                    PIN: {address.pin}
                                </p>

                            </div>


                            {/* Product */}
                            <div className={Styles.box}>

                                <h2>Product Details</h2>

                                <div className={Styles.product}>

                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />

                                    <div>

                                        <h3>{product.title}</h3>

                                        <p>
                                            Price: ${product.price}
                                        </p>

                                    </div>

                                </div>


                                {/* Quantity */}

                                <div className={Styles.quantityBox}>

                                    <span>Quantity</span>

                                    <div className={Styles.quantity}>

                                        <button
                                            onClick={() => {
                                                if (quantity > 1) {
                                                    setQuantity(quantity - 1);
                                                }
                                            }}
                                        >
                                            -
                                        </button>

                                        <span>{quantity}</span>

                                        <button
                                            onClick={() =>
                                                setQuantity(quantity + 1)
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Right Section */}
                        <div className={Styles.priceBox}>

                            <h2>Price Details</h2>

                            <div className={Styles.row}>
                                <span>Price</span>

                                <span>
                                    ${(product.price * quantity).toFixed(2)}
                                </span>
                            </div>

                            <div className={Styles.row}>
                                <span>Delivery</span>

                                <span className={Styles.free}>
                                    FREE
                                </span>
                            </div>

                            <hr />

                            <div className={Styles.total}>
                                <span>Total Amount</span>

                                <span>
                                    ${(product.price * quantity).toFixed(2)}
                                </span>
                            </div>

                            <button
                                className={Styles.continueBtn}
                                onClick={() =>
                                    navigate(
                                        `/order-place?product=${product.id}&quantity=${quantity}`
                                    )
                                }
                            >
                                Continue
                            </button>

                        </div>

                    </div>
                )
            }

        </div>
    );
}

export default OrderSummary;