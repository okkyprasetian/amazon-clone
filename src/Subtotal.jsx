import { useContext } from 'react';
import CurrencyFormat from 'react-currency-format'
import { StateContext } from './Provider';
import './Subtotal.css'

function Subtotal() {

    // Install global state to local state
    const { basket, totalPrice } = useContext(StateContext)

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{totalPrice}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;

// free bug