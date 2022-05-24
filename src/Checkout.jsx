import Subtotal from './Subtotal'
import './Checkout.css'

function About() {
    return (
        <div className="checkout">

            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="ad" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your Shoping Basket</h2>
                    {/* Shoping item */}
                    {/* Shoping item */}
                    {/* Shoping item */}
                    {/* Shoping item */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    );
}

export default About;

// free bug