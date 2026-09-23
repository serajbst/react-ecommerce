import Styles from "./Styles/orderSuccess.module.css";

function OrderSuccess() {

    return (
        <div className={Styles.page}>

            <div className={Styles.card}>

                <div className={Styles.icon}>
                    ✓
                </div>

                <h1>Congratulations! 🎉</h1>

                <h2>Order Placed Successfully</h2>

                <p>
                    Thank you for your order. Your order has been
                    successfully placed.
                </p>

                <p className={Styles.message}>
                    We will process your order shortly.
                </p>

            </div>

        </div>
    );
}

export default OrderSuccess;