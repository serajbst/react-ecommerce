import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Styles from "./Styles/placeOrder.module.css";

function PlaceOrder() {

    const [searchParam] = useSearchParams();

    const productId = searchParam.get("product");
    const quantity = Number(searchParam.get("quantity"));

    const [product, setProduct] = useState(null);

    const navigate = useNavigate();

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

            <h1>Place Order</h1>

            {
                product && (

                    <div className={Styles.container}>

                        {/* Product */}

                        <div className={Styles.productBox}>

                            <img
                                src={product.image}
                                alt={product.title}
                            />

                            <div className={Styles.info}>

                                <h2>{product.title}</h2>

                                <p className={Styles.category}>
                                    {product.category}
                                </p>

                                <p>
                                    Quantity: <strong>{quantity}</strong>
                                </p>

                                <p className={Styles.price}>
                                    ${product.price}
                                </p>

                            </div>

                        </div>


                        {/* Price Details */}

                        <div className={Styles.summary}>

                            <h2>Price Details</h2>

                            <div className={Styles.row}>
                                <span>Product Price</span>

                                <span>
                                    ${(product.price * quantity).toFixed(2)}
                                </span>
                            </div>

                            <div className={Styles.row}>
                                <span>Quantity</span>

                                <span>{quantity}</span>
                            </div>

                            <div className={Styles.row}>
                                <span>Delivery</span>

                                <span className={Styles.free}>
                                    FREE
                                </span>
                            </div>

                            <hr />

                            <div className={Styles.total}>
                                <span>Total</span>

                                <span>
                                    ${(product.price * quantity).toFixed(2)}
                                </span>
                            </div>

                            <button
                                className={Styles.placeBtn}
                                onClick={() =>
                                    navigate("/order-successfull")
                                }
                            >
                                Place Order
                            </button>

                        </div>

                    </div>
                )
            }

        </div>
    );
}

export default PlaceOrder;