import { useContext } from 'react'
import { StateContext } from './Provider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'

function Checkout() {

    // Install global state basket
    const { basket } = useContext(StateContext)

    return (
        <div className="checkout">

            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your Shoping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    );
}

export default Checkout;
