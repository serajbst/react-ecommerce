import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "./Styles/productDetails.module.css";

function ProductDetails() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    async function getProduct() {

        const res = await fetch(
            `https://fakestoreapi.com/products/${id}`
        );

        const data = await res.json();
        setProduct(data);
    }

    useEffect(() => {
        getProduct();
    }, [id]);

    return (
        <>
            {
                product && (
                    <div className={Styles.details}>

                        {/* Product Image */}
                        <div className={Styles.imageBox}>
                            <img
                                src={product.image}
                                alt={product.title}
                            />
                        </div>

                        {/* Product Information */}
                        <div className={Styles.info}>

                            <p className={Styles.category}>
                                {product.category}
                            </p>

                            <h1>{product.title}</h1>

                            <div className={Styles.rating}>
                                ⭐ {product.rating.rate}
                                <span>
                                    ({product.rating.count} reviews)
                                </span>
                            </div>

                            <h2 className={Styles.price}>
                                ${product.price}
                            </h2>

                            <p className={Styles.description}>
                                {product.description}
                            </p>

                            <button
                                className={Styles.buyButton}
                                onClick={() =>
                                    navigate(
                                        `/order-summary?product=${product.id}`
                                    )
                                }
                            >
                                Buy Now
                            </button>

                        </div>

                    </div>
                )
            }
        </>
    );
}

export default ProductDetails;