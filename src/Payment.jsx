import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { StateContext } from './Provider';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'

function Payment() {

    // Global State
    const { basket, user } = useContext(StateContext)

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>

                {/* Delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>React Js Street</p>
                        <p>Jogja, Yogyakarta</p>
                    </div>
                </div>

                {/* Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />)
                        )}
                    </div>
                </div>

                {/* Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__detail">
                        {/* Using Stripe for Payment */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Payment;